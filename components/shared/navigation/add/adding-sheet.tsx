import { TabsContent } from '@radix-ui/react-tabs';
import TabsSheet from '../../tabs-sheet';
import CardForm from './card-form';
import CollectionForm from './collection-form';

const AddingSheet = () => {
  return (
    <TabsSheet triggerIcon="add-folder-white" title="Add New">
      <TabsContent value="collections">
        <CollectionForm isEdit={false} />
      </TabsContent>
      <TabsContent value="cards">
        <CardForm />
      </TabsContent>
    </TabsSheet>
  );
};

export default AddingSheet;
