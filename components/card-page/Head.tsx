'use client';
import { Slider } from '../ui/slider';
import Filters from './filter';
type Props = {
  cardsTotal: number;
  current: number;
  changeCurrent: (val: number) => void;
};
const Head = ({ cardsTotal, current, changeCurrent }: Props) => {
  return (
    <div className="flex items-center justify-between gap-4">
      <h5 className="shrink-0 font-semibold text-primary">
        {current + 1} of {cardsTotal}
      </h5>
      <Slider
        min={0}
        defaultValue={[current]}
        max={cardsTotal - 1}
        value={[current]}
        step={1}
        onValueChange={(val) => {
          const newCurrentCard = +val.join();
          changeCurrent(newCurrentCard);
        }}
      />
      <Filters />
    </div>
  );
};

export default Head;
