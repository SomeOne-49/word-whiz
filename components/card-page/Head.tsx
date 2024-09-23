'use client';
import useStore from '@/store/useStore';
import { Slider } from '../ui/slider';
import Filters from './filter';
type Props = {
  cardsTotal: number;
};
const Head = ({ cardsTotal }: Props) => {
  const { currentCard, updateCurrent } = useStore();

  return (
    <div className="flex items-center justify-between gap-4">
      <h5 className="shrink-0 font-semibold text-primary">
        {currentCard + 1} of {cardsTotal}
      </h5>
      <Slider
        min={0}
        defaultValue={[currentCard]}
        max={cardsTotal - 1}
        value={[currentCard]}
        step={1}
        onValueChange={(val) => {
          const newCurrentCard = +val.join();
          updateCurrent(newCurrentCard);
        }}
      />
      <Filters />
    </div>
  );
};

export default Head;
