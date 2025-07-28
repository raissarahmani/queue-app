import React from 'react';
import NumberCard from './NumberCard'

function QueueCard({name}) {
  return (
    <div className='py-5 px-20 w-1/2'>
      <NumberCard name={name}/>
    </div>
  )
}

export default QueueCard
