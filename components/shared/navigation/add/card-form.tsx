import { Button } from '@/components/ui/button';
import CollectionPicker from '@/components/ui/custom/collection-bicker';
import ColorPicker from '@/components/ui/custom/color-bicker';
import { Input } from '@/components/ui/input';
import { SheetFooter } from '@/components/ui/sheet';
import { TabsContent } from '@/components/ui/tabs';
import UploadImg from './upload-img';

const CardForm = () => {
  return (
    <TabsContent value="cards">
      <div className="my-2 flex flex-col gap-2">
        <Input icon="front" placeholder="Card Front" />
        <Input icon="back" placeholder="Card Back" />
        <Input icon="note" placeholder="Notes" />
        <CollectionPicker />
        <ColorPicker title="Cadr Color" />
        <UploadImg />
      </div>
      <SheetFooter>
        <Button className="grow">Create Card</Button>
      </SheetFooter>
    </TabsContent>
  );
};

export default CardForm;
