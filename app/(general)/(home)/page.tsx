import CollectionBox from '@/components/home/boxs/collection-box';
import HomeSort from '@/components/home/sort';
import { COLLECTIONS_LIST } from '@/constants';

const Home = () => {
  return (
    <div className="flex max-h-full flex-col gap-3">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold text-primary">My Collections</h1>
        <HomeSort />
      </div>
      <div className="hide_scroll flex flex-col gap-3 overflow-auto px-1">
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
    </div>
  );
};

export default Home;
