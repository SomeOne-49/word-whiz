import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet';
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
        <div>test</div>
      </SheetContent>
    </Sheet>
  );
};

export default Filters;
