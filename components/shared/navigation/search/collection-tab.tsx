import CollectionBox from '@/components/home/boxs/collection-box';
import { Input } from '@/components/ui/input';
import { TabsContent } from '@/components/ui/tabs';

const CollectionTab = () => {
  return (
    <TabsContent value="collections">
      <div className="mb-2">
        <Input icon="search" placeholder="Search..." />
      </div>
      <div className="mb-2 flex items-center justify-between gap-3 border-t border-primary-dark pt-2">
        <h6 className="text-xl font-semibold text-primary">Collections:</h6>
        <h6 className="font-semibold text-primary">12 Resultes found</h6>
      </div>
      <div className="flex grow flex-col gap-3 px-1.5">
        <CollectionBox
          colored
          icon="🏴‍☠️"
          link="/collection/1"
          title="Collection Name"
          date="10-20-2023"
          items={21}
        />
      </div>
    </TabsContent>
  );
};

export default CollectionTab;
