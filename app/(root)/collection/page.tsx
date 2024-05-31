'use client';
import Card from '@/components/collection/card';
import WordSlide from '@/components/collection/slider';
import Statistics from '@/components/collection/statistics';
import { Button } from '@nextui-org/button';
import Image from 'next/image';

const Collectin = () => {
  return (
    <section className="relative">
      <div className="relative z-10">
        <div className="flex items-center justify-center gap-5">
          <WordSlide />
          <Button className="min-w-fit px-3 py-2" color="primary">
            <Image
              src="/assets/icons/filter.svg"
              width={20}
              height={20}
              alt="filter"
            />
          </Button>
        </div>
        <Statistics />
      </div>
      <Card />
    </section>
  );
};

export default Collectin;
