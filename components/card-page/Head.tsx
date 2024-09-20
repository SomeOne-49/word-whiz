'use client';
import { useState } from 'react';
import { Slider } from '../ui/slider';
import Filters from './filter';
type Props = {
  cardsTotal: number;
};
const Head = ({ cardsTotal }: Props) => {
  const [currentCard, setCurrentCard] = useState(1);
  return (
    <div className="flex items-center justify-between gap-4">
      <h5 className="shrink-0 font-semibold text-primary">
        {currentCard} of {cardsTotal}
      </h5>
      <Slider
        defaultValue={[1]}
        max={cardsTotal}
        step={1}
        onValueChange={(val) => setCurrentCard(+val.join())}
      />
      <Filters/>
    </div>
  );
};

export default Head;
