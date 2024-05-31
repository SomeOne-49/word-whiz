'use client';
import Image from 'next/image';
import { useState } from 'react';
import BoxActions from './box-actions';

type Props = {
  front: string;
  img: string;
  isHide: boolean;
};

const FrontToggler = ({ front, isHide, img }: Props) => {
  const [isImg, setIsImg] = useState(false);
  return (
    <div>
      {isImg ? (
        <Image src={img} alt={front} fill className={`object-cover ${isImg}`} />
      ) : (
        <h6>{front}</h6>
      )}
      {isHide && <BoxActions toggleImg={() => setIsImg(!isImg)} isImg={isImg} />}
    </div>
  );
};

export default FrontToggler;
