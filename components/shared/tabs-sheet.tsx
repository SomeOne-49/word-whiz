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
import { Tabs, TabsList, TabsTrigger } from '../ui/tabs';
type Props = {
  triggerIcon: string;
  title: string;
  children: React.ReactNode;
  contentClasses?: string;
};
const TabsSheet = ({ triggerIcon, title, children, contentClasses }: Props) => {
  return (
    <Sheet key="bottom">
      <SheetTrigger asChild>
        <Button variant={'ghost'}>
          <Image
            src={`/assets/icons/${triggerIcon}.svg`}
            width={37}
            height={37}
            alt={triggerIcon}
          />
        </Button>
      </SheetTrigger>
      <SheetContent side={'bottom'} className={contentClasses}>
        <SheetHeader>
          <SheetTitle className="text-start text-3xl text-primary">
            {title}
          </SheetTitle>
        </SheetHeader>
        <Tabs
          defaultValue="collections"
          className="flex flex-col overflow-hidden"
        >
          <TabsList className='mb-3'>
            <TabsTrigger value="collections">Collections</TabsTrigger>
            <TabsTrigger value="cards">Cards</TabsTrigger>
          </TabsList>
          {children}
        </Tabs>
      </SheetContent>
    </Sheet>
  );
};

export default TabsSheet;
