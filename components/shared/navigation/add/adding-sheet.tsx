import TabsSheet from '../../tabs-sheet';
import CardForm from './card-form';
import CollectionForm from './collection-form';

const AddingSheet = () => {
  return (
    <TabsSheet triggerIcon="add-folder-white" title="Add New">
      <CollectionForm />
      <CardForm />
    </TabsSheet>
  );
};

export default AddingSheet;
