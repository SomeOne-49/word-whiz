import CollectionBox from '@/components/home-components/boxes/collection/collection-box';
import { Input } from '@/components/ui/input';
import { TabsContent } from '@/components/ui/tabs';
import { COLLECTIONS_LIST } from '@/constants';

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
        {COLLECTIONS_LIST.map((collection) => {
          return (
            <CollectionBox
              key={collection.id}
              colored
              iconBg={collection.color}
              icon={collection.icon}
              link={`/collections/${collection.id}/1`}
              title={collection.name}
              date={collection.createdAt}
              items={collection.itemCount}
            />
          );
        })}
      </div>
    </TabsContent>
  );
};

export default CollectionTab;
