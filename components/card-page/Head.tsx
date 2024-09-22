'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Slider } from '../ui/slider';
import Filters from './filter';
type Props = {
  cardsTotal: number;
  cards: string;
  current: string;
  collection: string;
};
const Head = ({ cardsTotal, cards, current, collection }: Props) => {
  const router = useRouter();
  const defaultVal = JSON.parse(cards).indexOf(current) 
  const [currentCard, setCurrentCard] = useState(defaultVal);
  
  console.log(defaultVal);
  
  
  return (
    <div className="flex items-center justify-between gap-4">
      <h5 className="shrink-0 font-semibold text-primary">
        {currentCard+1} of {cardsTotal+1}
      </h5>
      <Slider
        min={0}
        defaultValue={[defaultVal]}
        max={cardsTotal}
        step={1}
        onValueChange={(val) => {
          const newCurrentCard = +val.join();
          setCurrentCard(newCurrentCard);
          setTimeout(() => {
            const cardData = JSON.parse(cards)[newCurrentCard];
            const newUrl = `http://localhost:3000/collections/${collection}/${cardData}`;
            router.push(newUrl);
          },);
        }}
      />
      <Filters />
    </div>
  );
};

export default Head;
