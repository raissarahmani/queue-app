import React from 'react'
import { useState } from 'react'
import useAudioSequence from '../hook/useAudioSequence'

function NumberCard({name}) {
  const [count, setCount] = useState(0)
  const [lastAudio, setLastAudio] = useState([]);
  const { getAudioSequence, playAudioSequence } = useAudioSequence();

  const handleNext = async () => {
    const newCount = count + 1;
    setCount(newCount);

    const audioFiles = getAudioSequence(name, newCount);
    setLastAudio(audioFiles);
    await playAudioSequence(audioFiles);
  }

  const handleRepeat = async () => {
    if (lastAudio.length > 0) {
      await playAudioSequence(lastAudio);
    }
  }

  const handleReset = () => {
    setCount(0);
    setLastAudio([]);
  };

  return (
    <>
      <div className='queue text-center mb-5'>
        <div className='text-7xl font-semibold pt-8 px-2'>POLI {name}</div>
        <div className='text-[230px] font-black'>{count}</div>
      </div>
      <div className='flex flex-col'>
        <button className='button bg-[#e65050] border-[#e65050]' onClick={handleReset}>Reset</button>
        <button className='button bg-[#64c8b4] border-[#64c8b4]' onClick={handleNext}>Lanjut</button>
        <button className='button bg-[#b4b4b4] border-[#b4b4b4]' onClick={handleRepeat}>Ulangi</button>
      </div>
    </>
  )
}

export default NumberCard
