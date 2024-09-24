'use client';
import Image from 'next/image';
import { Button } from '../ui/button';

const NoCards = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/assets/no-cards.png"
          width={250}
          height={250}
          alt="No Cards Yet"
        />
        <h3 className="rounded-xl bg-white px-4 text-center text-2xl font-semibold text-primary">
          You haven&apos;t added any cards to this collection yet.
        </h3>
      </div>
      <Button
        className="!px-8 !py-3.5 text-xl font-semibold"
        onClick={() => {
          document.getElementById('add_sheet')?.click();
        }}
      >
        Add Now
      </Button>
    </div>
  );
};

export default NoCards;
