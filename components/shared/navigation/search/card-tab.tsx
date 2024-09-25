'use client';
import CardBox from '@/components/home-components/boxes/card-box';
import { TabsContent } from '@/components/ui/tabs';
import { colors } from '@/constants';
import { getCards } from '@/lib/actions/card.action';
import { useAuth } from '@clerk/nextjs';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import NoResults from './no-results';
import SearchInp from './search-inp';
import Searching from './searching';
const CardTab = () => {
  const { userId } = useAuth();
  const searchParams = useSearchParams();
  const search = searchParams.get('s');
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!userId || !search) {
      setCards([]);
      return;
    }

    const fetchCards = async () => {
      setIsLoading(true);
      try {
        const cards = await getCards(userId, search);
        setCards(JSON.parse(cards));
        setIsLoading(false);
      } catch (e) {
        console.error('Error fetc hing collections:', e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCards();
  }, [search, searchParams, userId]);

  return (
    <TabsContent value="cards">
      <div className="mb-2">
        <SearchInp placeholder="Search Cards..." />
      </div>
      <div className="mb-2 flex items-center justify-between gap-3 border-t border-primary-dark pt-2">
        <h6 className="text-xl font-semibold text-primary">Cards:</h6>
        <h6 className="font-semibold text-primary">
          {cards.length} Resultes found
        </h6>
      </div>
      <div className="flex flex-col gap-3 p-1.5">
        {search ? (
          isLoading ? (
            <Searching />
          ) : cards.length > 0 ? (
            cards.map((card: any) => (
              <CardBox
                key={card._id}
                colored
                front={card.front}
                back={card.back}
                bg={colors[card.color]?.bg}
                idx={card.collectionId.cards.indexOf(card._id)}
                color={colors[card.color]?.txt}
                collection={{
                  id: card.collectionId._id,
                  name: card.collectionId.name,
                  icon: card.collectionId.icon,
                  iconBg: colors[card.collectionId.color]?.bg,
                }}
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

export default CardTab;
