import Head from '@/components/card-page/Head';
import NoCards from '@/components/card-page/no-cards';
import WordCard from '@/components/card-page/word-card';
import { getCards } from '@/lib/actions/card.action';

const CardDetails = async ({ params }: { params: { id: string } }) => {
  const cards  = await getCards(params.id);
  
  if (cards.length <= 0) return <NoCards/>  

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
