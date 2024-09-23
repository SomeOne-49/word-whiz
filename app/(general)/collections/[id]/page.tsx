'use client';
import Head from '@/components/card-page/Head';
import WordCard from '@/components/card-page/word-card';
import { getCards } from '@/lib/actions/card.action';
import { useEffect, useState } from 'react';

const CardDetails = ({ params }: { params: { id: string } }) => {
  const [current, setCurrent] = useState(0);
  const [cardsList, setCardsList] = useState<any>([]);

  useEffect(() => {
    const fetchCollections = async () => {
      if (!params.id) return;
      const cards = await getCards(params.id);
      if (!cards || cards.length <= 0) return;
      setCardsList(JSON.parse(cards));
    };

    fetchCollections();
  }, [params.id]);

  if (cardsList.length === 0) {
    return <div>U didn&apos;t add any card yet.</div>;
  }

  return (
    <>
      <div className="relative z-30 h-full px-2">
        <Head
          cardsTotal={cardsList.length}
          current={current}
          changeCurrent={(val: number) => setCurrent(val)}
        />
        {cardsList.length > 0 ? (
          <WordCard
            cards={cardsList}
            current={current}
            changeCurrent={(val: number) => setCurrent(val)}
            // cardId={params.slug[1]}
            // collection={params.slug[0]}
            // front={front}
            // back={back}
            // color={color}
            // note={note}
          />
        ) : (
          <p>Loading</p>
        )}
      </div>
    </>
  );
};

export default CardDetails;
