import { Button } from '@/components/ui/button';
import ColorPicker from '@/components/ui/custom/color-bicker';
import { Input } from '@/components/ui/input';
import { SheetFooter } from '@/components/ui/sheet';

const CollectionForm = () => {
  return (
    <>
      <div className="my-2 flex flex-col gap-2">
        <Input icon="folder" placeholder="Collection name" />
        <ColorPicker title='Collection Color' />


        <Input icon="icon" placeholder="Collection icon" />
      </div>
      <SheetFooter>
        <Button className="grow">Create Collection</Button>
      </SheetFooter>
    </>
  );
};

export default CollectionForm;
