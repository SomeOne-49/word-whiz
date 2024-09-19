'use client';
import { useState } from 'react';
import Back from './back';
import CardAction from './card-action';
import Front from './front';

const WordCard = () => {
  const [isFront, setIsFront] = useState(true);

  return (
    <>
      <div className="relative mx-auto h-80 w-[320px] max-w-[95%] ">
        <Front isFront={isFront} />
        <Back isFront={isFront} />
      </div>
      <div className="fixed left-1/2 top-0 -z-30 h-[75vh] max-h-[732px] w-screen max-w-sm -translate-x-1/2 rounded-b-[75px] bg-gray-200/75">
        <CardAction
          isFront={isFront}
          toggleFront={() => setIsFront(!isFront)}
        />
      </div>
    </>
  );
};

export default WordCard;
