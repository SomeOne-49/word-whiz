import { getCollections } from '@/lib/actions/collections.action';
import { auth } from '@clerk/nextjs/server';
import { TabsContent } from '@radix-ui/react-tabs';
import TabsSheet from '../../tabs-sheet';
import CardForm from './card-form';
import CollectionForm from './collection-form';

const AddingSheet = async () => {
  const { userId } = auth();
  if (!userId) return;
  const collections = await getCollections(userId);

  return (
    <TabsSheet triggerIcon="add-folder-white" title="Add New">
      <TabsContent value="collections">
        <CollectionForm />
      </TabsContent>
      <TabsContent value="cards">
        <CardForm collections={collections} />
      </TabsContent>
    </TabsSheet>
  );
};

export default AddingSheet;
