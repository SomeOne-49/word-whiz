'use client';
import useStore from '@/store/useStore';
import { useState } from 'react';
import Back from './back';
import CardAction from './card-action';
import Front from './front';

type Props = {
  cards: string;
};
const WordCard = ({ cards }: Props) => {
  const [isFront, setIsFront] = useState(true);

  const { currentCard, updateCurrent } = useStore();

  const card = JSON.parse(cards)[currentCard];

  return (
    <>
      <div className="relative mx-auto h-80 w-[320px] max-w-[95%] ">
        <Front
          cardId={card._id}
          isFront={isFront}
          front={card.front}
          back={card.back}
          collection={card.collectionId}
          color={card.color}
          note={card.note}
        />
        <Back isFront={isFront} back={card.back} note={card.note} />
      </div>
      <div className="fixed left-1/2 top-0 -z-30 h-[75vh] max-h-[732px] w-screen max-w-sm -translate-x-1/2 rounded-b-[75px] bg-gray-200/75">
        <CardAction
          cardLength={JSON.parse(cards).length}
          current={currentCard}
          changeCurrent={updateCurrent}
          isFront={isFront}
          toggleFront={(val: boolean) => setIsFront(val)}
        />
      </div>
    </>
  );
};

export default WordCard;
