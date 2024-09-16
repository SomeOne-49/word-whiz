'use client';
import { useState } from 'react';

const CustomSwitch = () => {
  const [IsSwitch, setIsSwitch] = useState(false);

  return (
    <div className="relative flex items-center justify-between rounded-full bg-primary-dark text-black">
      <div
        className={`absolute top-0 h-full w-1/2 rounded-full bg-primary transition-all duration-300 ${IsSwitch ? 'left-1/2' : 'left-0'}`}
      ></div>
      <button
        onClick={() => setIsSwitch(false)}
        className={`relative w-1/2 py-1 text-center ${!IsSwitch && 'text-primary-light'}`}
      >
        Collection
      </button>
      <button
        onClick={() => setIsSwitch(true)}
        className={`relative w-1/2 py-1 text-center ${IsSwitch && 'text-primary-light'}`}
      >
        Cards
      </button>
    </div>
  );
};

export default CustomSwitch;
