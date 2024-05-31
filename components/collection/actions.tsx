'use client';
import { Button } from '@nextui-org/button';
import Image from 'next/image';
import { useState } from 'react';

const Actions = ({
  toggleCard,
  isHide,
}: {
  toggleCard: any;
  isHide: boolean;
}) => {
  const [isCorrect, setisCorrect] = useState(false);
  const [isInCorrect, setisInCorrect] = useState(false);

  const handleCorrect = () => {
    setisCorrect(!isCorrect);
  };

  const handleInCorrect = () => {
    setisInCorrect(!isInCorrect);
  };

  console.log(isHide);

  return (
    <section className="absolute -left-3 top-[-82px] h-[80vh] w-[calc(100%+24px)] rounded-b-[65px] bg-gray-200">
      <div className="absolute -bottom-9 left-1/2 flex -translate-x-1/2 items-center gap-8">
        <Button
          className="min-h-16 min-w-16 rounded-xl bg-white p-0 shadow-md"
          onClick={handleInCorrect}
        >
          <Image
            src={
              isInCorrect
                ? '/assets/icons/thumb-down-fill.svg'
                : '/assets/icons/thumb-down.svg'
            }
            width={40}
            height={40}
            alt="dislike"
          />
        </Button>
        <Button
          className={`min-h-20 min-w-20   rotate-45 rounded-xl bg-primary-light p-0 shadow-md`}
          onClick={toggleCard}
        >
          <Image
            src={
              isHide
                ? '/assets/icons/eye-open.svg'
                : '/assets/icons/eye-close.svg'
            }
            width={45}
            height={45}
            alt="eye"
            className={`-rotate-45`}
          />
        </Button>
        <Button
          className="min-h-16 min-w-16 rounded-xl bg-white p-0 shadow-md"
          onClick={handleCorrect}
        >
          <Image
            src={
              isCorrect
                ? '/assets/icons/thumb-up-fill.svg'
                : '/assets/icons/thumb-up.svg'
            }
            width={40}
            height={40}
            alt="like"
          />
        </Button>
      </div>
    </section>
  );
};

export default Actions;
