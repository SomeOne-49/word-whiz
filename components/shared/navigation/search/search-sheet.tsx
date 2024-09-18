import TabsSheet from '../../tabs-sheet';
import CardTab from './card-tab';
import CollectionTab from './collection-tab';

const SearchSheet = () => {
  return (
    <TabsSheet
      triggerIcon="search-white"
      title="Search"
      contentClasses="h-[75vh]"
    >
      <CollectionTab />
      <CardTab />
    </TabsSheet>
  );
};

export default SearchSheet;
