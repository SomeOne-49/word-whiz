'use client';
import Image from 'next/image';
import { useState } from 'react';

type Props = {
  back: string;
  desc: string;
  isHide: boolean;
};
const BackToggler = ({ back, desc, isHide }: Props) => {
  const [isDesc, setIsDesc] = useState(false);
  return (
    <div className="h-full">
      <div
        className={`p-3 ${isDesc ? 'pt-8' : 'h-full grid place-content-center text-xl text-center'}`}
      >
        {isDesc ? <h6>{desc}</h6> : <h6>{back}</h6>}
      </div>
      {!isHide && (
        <div
          className="absolute bottom-3 right-3 z-30  flex size-10 items-center justify-center gap-3 overflow-hidden rounded-xl cursor-pointer bg-primary p-2"
          onClick={() => setIsDesc(!isDesc)}
        >
          {isDesc ? (
            <Image
              src="/assets/icons/word-white.svg"
              width={22}
              height={22}
              alt="word"
            />
          ) : (
            <Image
              src="/assets/icons/note-white.svg"
              width={22}
              height={22}
              alt="note"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default BackToggler;
