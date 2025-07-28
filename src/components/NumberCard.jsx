import React from 'react'
import { useState } from 'react'

function NumberCard({name}) {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='queue text-center mb-5'>
        <div className='text-7xl font-semibold pt-8 px-2'>POLI {name}</div>
        <div className='text-[230px] font-black'>{count}</div>
      </div>
      <div className='flex flex-col'>
        <button className='button bg-[#e65050] border-[#e65050]' onClick={() => setCount(0)}>Reset</button>
        <button className='button bg-[#64c8b4] border-[#64c8b4]' onClick={() => setCount((count) => count + 1)}>Lanjut</button>
        <button className='button bg-[#b4b4b4] border-[#b4b4b4]'>Ulangi</button>
      </div>
    </>
  )
}

export default NumberCard
