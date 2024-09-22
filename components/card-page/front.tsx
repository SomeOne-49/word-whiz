'use client';

import Image from 'next/image';
import { useState } from 'react';
import CardOptions from './card-options';

const Front = ({
  isFront,
  front,
  color,
}: {
  isFront: boolean;
  front: string;
  color: string;
}) => {
  const [showImg, setShowImg] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  return (
    <div
      className={`center_ele relative z-10 mx-auto size-full overflow-hidden rounded-3xl shadow-md transition-all duration-500 ${!isFront ? 'h-3/5' : ''} `}
      style={{ background: color || '#BEEAFF' }}
    >
      <h4
        className={`p-3 text-center font-semibold text-primary transition-all duration-500 ${isFront ? 'text-4xl' : 'text-2xl'}`}
      >
        {front}
      </h4>
      {showImg && (
        <Image
          src="/assets/dev/card-img.svg"
          fill
          className="object-cover"
          alt="bag"
        />
      )}
      <CardOptions
        isFront={isFront}
        isSaved={isSaved}
        toggleSave={setIsSaved}
        showImg={showImg}
        toggleImg={setShowImg}
      />
    </div>
  );
};

export default Front;
