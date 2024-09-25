import CollectionBox from '@/components/home-components/boxes/collection/collection-box';
import SortBtn from '@/components/home-components/sort';
import { getCollections } from '@/lib/actions/collections.action';
import { auth } from '@clerk/nextjs/server';
export interface SearchParamsProps {
  searchParams: { [key: string]: string | undefined };
}
const Home = async ({ searchParams }: SearchParamsProps) => {
  const { userId } = auth();
  if (!userId) return;
  console.log(searchParams.f);

  const collections = await getCollections(
    userId,
    '/',
    undefined,
    searchParams.f
  );

  return (
    <div className="flex max-h-full flex-col gap-3">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold text-primary">My Collections</h1>
        <SortBtn />
      </div>
      <div className="hide_scroll flex flex-col gap-3 overflow-auto px-1">
        {JSON.parse(collections).map((collection: any) => {
          return (
            <div key={collection._id}>
              <CollectionBox
                id={collection._id}
                colored
                color={collection.color}
                icon={collection.icon}
                link={`/collections/${collection._id}`}
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
