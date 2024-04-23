import { createAI, createStreamableUI, getMutableAIState } from 'ai/rsc';
import getAiResponse from "../../helpers/life-sciences/getAiResponse"
import getJournalData from "../../helpers/life-sciences/getJournalData";
import JournalCardGrid from "../../components/ui/life-science/JournalCardGrid";
import Spinner from "../../components/ui/loading/Spinner";
import AICard from "../../components/ui/card/AICard";

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

async function submitUserMessage(userInput) {
  'use server';

  const aiState = getMutableAIState();

  // Update the AI state with the new user message.
  aiState.update([
    ...aiState.get(),
    {
      role: 'user',
      content: userInput,
    },
  ]);

  const reply = createStreamableUI(
    <AICard>
      <Spinner />
    </AICard>
  );

  function decideAction() {
    if (userInput.toLowerCase().includes("journal") || userInput.toLowerCase().includes("research") ||  userInput.toLowerCase().includes("papers") ||  userInput.toLowerCase().includes("paper")) {
      return createJournalResponse();
    } else {
      return createTextResponse();
    }
  }

  async function createJournalResponse() {
    try {
      reply.update(
        <AICard>
          <Spinner />
        </AICard>
      );

      const journals = await getJournalData(userInput);

      reply.done(
        <AICard>
          <JournalCardGrid 
            records={journals.records}
          />
        </AICard>
      );

    } catch {
      reply.done(<div>There was an error generating your journal data</div>);
    }
  }
  async function createTextResponse() {
    try {
      reply.update(
        <AICard>
          <Spinner />
        </AICard>
      );

      const response = await getAiResponse(userInput);

      reply.done(
        <AICard>
          {response}
        </AICard>
      );

    } catch {
      reply.done(<div>There was an error generating your response</div>);
    }
  }

  decideAction();
  
  return {
    id: Date.now(),
    display: reply.value,
  };
}

const initialAIState = [];
const initialUIState = [];

export const AI = createAI({
  actions: {
    submitUserMessage
  },
  initialUIState,
  initialAIState
});
