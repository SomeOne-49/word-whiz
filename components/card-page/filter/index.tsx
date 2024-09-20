import ColorPicker from '@/components/ui/custom/color-picker';
import Image from 'next/image';
import React from 'react';
import { Button } from '../../ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../../ui/sheet';
import FilterBy from './filter-by';
const Filters = () => {
  return (
    <Sheet key="bottom">
      <SheetTrigger asChild>
        <Button variant={'ghost'}>
          <Image
            src={`/assets/icons/filter-colored.svg`}
            width={24}
            height={24}
            alt="filter-colored"
          />
        </Button>
      </SheetTrigger>
      <SheetContent side={'bottom'}>
        <SheetHeader>
          <SheetTitle className="text-start text-3xl text-primary">
            Filters
          </SheetTitle>
        </SheetHeader>
        <div>
          <div className="mb-2 flex flex-col gap-2">
            <h5 className="text-lg font-semibold">Filter by:</h5>
            <FilterBy />
          </div>
          <div>
            <div className="flex flex-col gap-2">
              <ColorPicker title="colors" type='multiple' opened />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Filters;
