'use client';
import { useState } from 'react';
import Back from './back';
import CardAction from './card-action';
import Front from './front';

type Props = {
  cards: {
    front: string;
    back: string;
    _id: string;
    cardCollection: string;
    color: string;
    note: string;
  }[];
  current: number;
  changeCurrent: (val: number) => void;
};
const WordCard = ({ cards, current,changeCurrent }: Props) => {
  const [isFront, setIsFront] = useState(true);

  const card = cards[current];

  return (
    <>
      <div className="relative mx-auto h-80 w-[320px] max-w-[95%] ">
        <Front
          cardId={card._id}
          isFront={isFront}
          front={card.front}
          back={card.back}
          collection={card.cardCollection}
          color={card.color}
          note={card.note}
        />
        <Back isFront={isFront} back={card.back} note={card.note} />
      </div>
      <div className="fixed left-1/2 top-0 -z-30 h-[75vh] max-h-[732px] w-screen max-w-sm -translate-x-1/2 rounded-b-[75px] bg-gray-200/75">
        <CardAction
          cardLength={cards.length}
          current={current}
          changeCurrent={changeCurrent}
          isFront={isFront}
          toggleFront={(val: boolean) => setIsFront(val)}
        />
      </div>
    </>
  );
};

export default WordCard;
