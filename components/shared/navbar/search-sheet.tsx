import CardBox from '@/components/Home/card-box';
import CollectionBox from '@/components/Home/collection-box';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';

const SearchSheet = () => {
  return (
    <Sheet key="bottom">
      <SheetTrigger asChild>
        <Button variant={'ghost'}>
          <Image
            src="/assets/icons/search-white.svg"
            width={37}
            height={37}
            alt="Add folder"
          />
        </Button>
      </SheetTrigger>
      <SheetContent side={'bottom'} className="min-h-[75vh]">
        <SheetHeader>
          <SheetTitle className="text-start text-2xl text-primary">
            Search
          </SheetTitle>
        </SheetHeader>
        <Tabs
          defaultValue="collections"
          className="flex flex-col overflow-hidden"
        >
          <TabsList>
            <TabsTrigger value="collections">Collections</TabsTrigger>
            <TabsTrigger value="cards">Cards</TabsTrigger>
          </TabsList>
          <div className="mt-2">
            <Input icon="search" placeholder="Search..." />
            <div className="mt-2 flex items-center justify-end gap-3 border-t border-primary-dark pt-2">
              <h6 className="text-end font-semibold text-primary">12 Resultes found</h6>
            </div>
          </div>
          <TabsContent value="collections">
            <div className="flex grow flex-col gap-3 px-1.5">
              <CollectionBox colored />
              <CardBox colored />
            </div>
          </TabsContent>
          <TabsContent value="cards">
            <div className="flex grow flex-col gap-3 p-1.5">
              <div className=" flex grow flex-col gap-3 p-1.5">
                <div className="center_ele grow flex-col">
                  <Image
                    src="/assets/no-matches.png"
                    width={225}
                    height={225}
                    alt="no-matches"
                  />
                  <h5 className="mt-[-30px] rounded-xl bg-primary-light px-3 text-center text-3xl font-bold text-primary">
                    No Matches Found
                  </h5>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        {/* <div className="flex grow flex-col overflow-hidden">
          <div className="flex items-center justify-between gap-3 text-primary">
            <h5 className="font-semibold">Collections:</h5>
            <p className="text-sm">12 result</p>
          </div>
        </div> */}
      </SheetContent>
    </Sheet>
  );
};

export default SearchSheet;
