import Head from '@/components/card-page/Head';
import WordCard from '@/components/card-page/word-card';
import { getCards } from '@/lib/actions/card.action';

const CardDetails = async ({ params }: { params: { id: string } }) => {
  const cards  = await getCards(params.id);
  
  if (cards.length <= 0) return <>no Cards yet</>;
  

  return (
    <>
      <div className="relative z-30 h-full px-2">
        <Head cardsTotal={cards.length} />

        <WordCard cards={JSON.stringify(cards)} />
      </div>
    </>
  );
};

export default CardDetails;
