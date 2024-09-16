import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import Image from 'next/image';
import CardForm from './card-form';
import CollectionForm from './collection-form';

const AddingSheet = () => {
  return (
    <Sheet key="bottom">
      <SheetTrigger asChild>
        <Button variant={'ghost'}>
          <Image
            src="/assets/icons/add-folder.svg"
            width={27}
            height={20}
            alt="Add folder"
          />
        </Button>
      </SheetTrigger>
      <SheetContent side={'bottom'}>
        <SheetHeader>
          <SheetTitle className="text-start text-2xl text-primary">
            Add New
          </SheetTitle>
        </SheetHeader>

        <Tabs defaultValue="collection" className='flex flex-col overflow-hidden'>
          <TabsList>
            <TabsTrigger value="collection">Collection</TabsTrigger>
            <TabsTrigger value="card">Card</TabsTrigger>
          </TabsList>
            <TabsContent value="collection">
              <CollectionForm />
            </TabsContent>
            <TabsContent value="card">
              <CardForm />
            </TabsContent>
        </Tabs>
      </SheetContent>
    </Sheet>
  );
};

export default AddingSheet;
