import Link from "next/link";
import Image from "next/image";

export default function InitialPrompts({ onPromptClick, promptOne, promptTwo, promptThree, promptFour }) {

  const promptStyles = "text-lg text-start text-white group-hover:text-white transition-colors duration-150";

  return (
    <section className="w-11/12 md:w-3/4">
      <div className={`fixed z-50 flex justify-start items-center w-11/12 md:w-3/4 p-4 -translate-x-1/2 bg-emerald-700 border border-gray-100 rounded-lg shadow-sm left-1/2 top-6`}>
        <Link 
          href="https://whitewallsmedia.ca"         
          className="flex items-center mb-2 border-gray-200 md:pe-4 md:me-4 md:border-e md:mb-0 dark:border-gray-600"
        >
        <Image
          src="/whitewalls.webp"
          height="45"
          width="45"
          className="rounded-full"
          alt="A logo of a maze against white"
        />
        </Link>
        <h1 className="hidden md:block md:text-2xl xl:text-2xl text-white">Find Any Scientific Paper To Help Your Studies - Powered By Springer</h1>
      </div>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <button 
              onClick={() => onPromptClick(promptOne)}
              className="group bg-emerald-500 w-full p-4 rounded-lg hover:bg-blue-500 transition-colors duration-150 border-black shadow-lg"
            >
              <p className={promptStyles}>{promptOne}</p>
            </button>
          </div>
          <div>
            <button 
              onClick={() => onPromptClick(promptTwo)}
              className="group bg-emerald-500 w-full p-4 rounded-lg hover:bg-blue-500 transition-colors duration-150 border-black shadow-lg"
            >
              <p className={promptStyles}>{promptTwo}</p>
            </button>
          </div>
          <div>
            <button 
              onClick={() => onPromptClick(promptThree)}
              className="group bg-emerald-500 w-full p-4 rounded-lg hover:bg-blue-500 transition-colors duration-150 border-black shadow-lg"
            >
              <p className={promptStyles}>{promptThree}</p>
            </button>
          </div>
          <div>
            <button 
              onClick={() => onPromptClick(promptFour)}
              className="group bg-emerald-500 w-full p-4 rounded-lg hover:bg-blue-500 transition-colors duration-150 border-black shadow-lg"
            >
              <p className={promptStyles}>{promptFour}</p>
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}
