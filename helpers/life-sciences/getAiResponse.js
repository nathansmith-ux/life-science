import OpenAI from "openai";

export default async function getAiResponse(userInput) {

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  
  const messages = [
    {
      role: 'system',
      content: `You are an expert at all things Life Science and will have conversations about different topics that students ask. Please tailor your conversation to be either highly technical or simple based on the user prompt.

      Always respond in 3 sentences or less
      `
    },
    { role: 'user', content: userInput }
  ];

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4-turbo",
      messages: messages,
    });

    const textResponse = response.choices[0].message.content

    return textResponse

  } catch (error) {
    console.error("Error calling OpenAI API:", error);
    return "Error generating product schema.";
  }
}