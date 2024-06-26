import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const Scriptanime = () => {
  return (
    <TypeAnimation
      sequence={[
        'Welcome', // Types 'One'
        1000, // Waits 1s
        'To ', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        'Code Defender', // Types 'Three' without deleting 'Two'
        2500,
        () => {
          console.log('Sequence completed');
        },
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      className='font-bold text-[40px] text-white'
    />
  )
}

export default Scriptanime;