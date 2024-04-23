"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useUIState, useActions } from "ai/rsc";
import SubmitIcon from "../icons/SubmitIcon";
import LifeScienceIcon from "../icons/LifeScienceIcon";
import InitialPrompts from "./InitialPrompts";
import UserCard from "../card/UserCard";

export default function ChatInterface({ security, placeholderText, promptOne, promptTwo, promptThree, promptFour, disclaimer }) {
  const [inputValue, setInputValue] = useState('');
  const [placeholder, setPlaceholder] = useState(placeholderText);
  const [messages, setMessages] = useUIState();
  const { submitUserMessage } = useActions();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setPlaceholder("Find A Paper");
      } else {
        setPlaceholder(placeholderText); 
      }
    };
    
    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [placeholderText]);

  const handleInput = (prompt) => {
    setInputValue(prompt)
  }

  return (
    <>
      {messages.length === 0 && (
        <InitialPrompts 
          onPromptClick={handleInput}
          promptOne={promptOne}
          promptTwo={promptTwo}
          promptThree={promptThree}
          promptFour={promptFour}
          security={security}
        />
      )}
      <section className="overflow-y-auto w-11/12">
      {
        messages.map((message) => (
          <div 
            className="p-4 mb-3 text-black"
            key={message.id}
          >
            {message.display}
          </div>
        ))
      }
      </section>
 
      <form 
        className={`flex items-center w-11/12 md:w-3/4 mx-auto mb-2 bg-emerald-500 p-10 rounded-lg`}
        onSubmit={async (e) => {
          e.preventDefault();
          
          const newUserMessage = {
            id: Date.now(),  
            display: (
              <UserCard>
                <p>{inputValue}</p>
              </UserCard>
            )
          };
        
          setMessages(currentMessages => [...currentMessages, newUserMessage]);
          
          setInputValue('');
          
          const responseMessage = await submitUserMessage(inputValue);
          setMessages(currentMessages => [...currentMessages, {
            ...responseMessage,
            responseMessage
          }]);
        }}
      >
        <label htmlFor="simple-search" className="sr-only">Search</label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <LifeScienceIcon />
          </div>
          <input
            type="text"
            id="simple-search"
            className={`bg-emerald-700 border border-gray-300 text-white placeholder-white text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5`}
            placeholder={placeholder}
            required
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <button 
          type="submit"
          className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-500 rounded-lg border border-blue-700 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          <SubmitIcon />
          <span className="sr-only">Search</span>
        </button>
      </form>
      <p className="mb-2 mx-8 text-sm text-black text-center">{disclaimer}<Link href="https://whitewallsmedia.ca"><span className="font-normal ml-2 underline decoration-sky-500">Learn More About Us</span></Link></p>
    </>
  );
}
