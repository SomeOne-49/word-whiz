import CollectionBox from '@/components/home-components/boxes/collection/collection-box';
import SortBtn from '@/components/home-components/sort';
import { colors } from '@/constants';
import { getCollections } from '@/lib/actions/collections.action';
import { SearchParamsProps } from '@/types';
import { auth } from '@clerk/nextjs/server';
import Image from 'next/image';
const Home = async ({ searchParams }: SearchParamsProps) => {
  const { userId } = auth();
  if (!userId) return;

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
        {JSON.parse(collections).length > 0 ? (
          JSON.parse(collections).map((collection: any) => {
            return (
              <div key={collection._id}>
                <CollectionBox
                  id={collection._id}
                  colored
                  color={colors[collection.color]?.bg}
                  icon={collection.icon}
                  link={`/collections/${collection._id}`}
                  name={collection.name}
                  date={collection.createdAt}
                  items={collection.cards.length}
                />
              </div>
            );
          })
        ) : (
          <div className="mt-28 flex flex-col items-center justify-center">
            <Image
              src="/assets/icons/cards.svg"
              width={200}
              height={200}
              alt="No Cards Yet"
              className="grayscale"
            />
            <h3 className="mt-5 rounded-xl bg-white px-14 text-center text-2xl font-semibold text-primary ">
              The cards you add will appear here.
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
