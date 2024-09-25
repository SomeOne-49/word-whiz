'use client';

import { colors } from '@/constants';
import Image from 'next/image';
import { useState } from 'react';
import CardOptions from './card-options';

const Front = ({
  isFront,
  front,
  color,
  cardId,
  back,
  collection,
  note,
  isMarked,
}: {
  isFront: boolean;
  front: string;
  color: string;
  cardId: string;
  back: string;
  collection: string;
  note: string;
  isMarked: boolean;
}) => {
  const [showImg, setShowImg] = useState(false);

  return (
    <div
      className={`center_ele relative z-10 mx-auto size-full overflow-hidden rounded-3xl shadow-md transition-all duration-500 ${!isFront ? 'h-3/5' : ''} `}
      style={{ background: colors[color]?.bg || '#BEEAFF' }}
    >
      <h4
        className={`p-3 text-center font-semibold  transition-all duration-500 ${isFront ? 'text-4xl' : 'text-2xl'}`}
        style={{ color: colors[color]?.txt || '#0279B2' }}
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
        card={{ front, back, color, cardId, note, collection }}
        showImg={showImg}
        toggleImg={setShowImg}
        isMarked={isMarked}
      />
    </div>
  );
};

export default Front;
