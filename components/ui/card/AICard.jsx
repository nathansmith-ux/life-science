import Image from 'next/image'

export default function AICard({ children }) {


  return (
    <div className={`flex bg-emerald-500 p-8 rounded-lg`}>
      <Image 
        src="/life-science-ai.webp"
        height="60"
        width="60"
        alt="Cyber security bot profile pic"
        className='mr-8 max-h-[60px] max-w-[60px] rounded-xl'
      />
      <div>
        {children}
      </div>
    </div>
  )
}