'use client';
import { Slider } from '@nextui-org/slider';
import { useState } from 'react';

const WordSlide = () => {
  const [value, setValue] = useState(25);

  return (
    <div className="flex flex-1 items-center gap-5">
      <h6 className="text-xl font-semibold text-primary">{value}/155</h6>
      <Slider
        step={1}
        maxValue={100}
        minValue={1}
        showTooltip={true}
        defaultValue={value}
        className="flex-1"
        aria-label="Words"
        onChange={(value: any) => setValue(value)}
      />
    </div>
  );
};

export default WordSlide;
