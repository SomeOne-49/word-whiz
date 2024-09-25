'use client';
import CollectionBox from '@/components/home-components/boxes/collection/collection-box';
import { TabsContent } from '@/components/ui/tabs';
import { getCollections } from '@/lib/actions/collections.action';
import { useAuth } from '@clerk/nextjs';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import NoResults from './no-results';
import SearchInp from './search-inp';
import Searching from './searching';

const CollectionTab = () => {
  const { userId } = useAuth();
  const searchParams = useSearchParams();
  const search = searchParams.get('s');
  const [collections, setCollections] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!userId || !search) {
      setCollections([]);
      return;
    }

    const fetchCollections = async () => {
      setIsLoading(true);
      try {
        const collections = await getCollections(userId, undefined, search);
        setCollections(JSON.parse(collections));
      } catch (error) {
        console.error('Error fetching collections:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCollections();
  }, [searchParams, search, userId]);

  return (
    <TabsContent value="collections">
      <SearchInp placeholder="Search Collections..." />
      <div className="mb-2 flex items-center justify-between gap-3 border-t border-primary-dark pt-2">
        <h6 className="text-xl font-semibold text-primary">Collections:</h6>
        <h6 className="font-semibold text-primary">
          {collections.length} Resultes found
        </h6>
      </div>
      <div className="flex grow flex-col gap-3 px-1.5">
        {search ? (
          isLoading ? (
            <Searching />
          ) : collections.length > 0 ? (
            collections.map((collection: any) => (
              <CollectionBox
                key={collection._id}
                id={collection._id}
                colored
                color={collection.color}
                icon={collection.icon}
                link={`/collections/${collection._id}`}
                name={collection.name}
                date={collection.createdAt}
                items={collection.cards.length}
              />
            ))
          ) : (
            <NoResults />
          )
        ) : (
          ''
        )}
      </div>
    </TabsContent>
  );
};

export default CollectionTab;
