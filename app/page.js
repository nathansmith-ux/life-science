import ChatInterface from "@/components/ui/chat/ChatInterface";
export const maxDuration = 90

export default function Home() {
  return (
    <>
      <main className="flex flex-col justify-end items-center h-screen">
        <ChatInterface 
          security={false}
          placeholderText="Ask about different types of diseases and find research papers"
          promptOne="Find Research Papers On [topic]"
          promptTwo="What is [disease]?"
          disclaimer="This should not be considered and/or replace medical advice"
        />
      </main>
    </>
  )
}
