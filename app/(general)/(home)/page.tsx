import CollectionBox from '@/components/home-components/boxes/collection/collection-box';
import SortBtn from '@/components/home-components/sort-btn';
import { getCollections } from '@/lib/actions/collections.action';
import { auth } from '@clerk/nextjs/server';
const Home = async () => {
  const { userId } = auth();
  if (!userId) return;
  const { collections } = await getCollections(userId);
  
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
                id={collection.id}
                colored
                color={collection.color}
                icon={collection.icon}
                link={`/collections/${collection.id}/${collection.cards[0]}`}
                name={collection.name}
                date={collection.createdAt}
                items={collection.cards.length}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
