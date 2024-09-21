import CollectionBox from '@/components/home-components/boxes/collection/collection-box';
import SortBtn from '@/components/home-components/sort-btn';
import { getCollections } from '@/lib/actions/collections.action';
const Home = async () => {
  const { collections } = await getCollections();

  return (
    <div className="flex max-h-full flex-col gap-3">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold text-primary">My Collections</h1>
        <SortBtn />
      </div>
      <div className="hide_scroll flex flex-col gap-3 overflow-auto px-1">
        {collections.map((collection) => {
          return (
            <div key={collection.id}>
              <CollectionBox
                colored
                iconBg={collection.color}
                icon={collection.icon}
                link={`/collections/${collection.id}/1`}
                title={collection.name}
                date={collection.createdAt}
                items={collection.itemCount}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
