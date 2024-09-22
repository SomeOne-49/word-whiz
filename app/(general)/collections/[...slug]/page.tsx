import Head from '@/components/card-page/Head';
// import ResultsLine from '@/components/card-page/result-line';
import WordCard from '@/components/card-page/word-card';
import { getCard } from '@/lib/actions/card.action';
import { getCollectionById } from '@/lib/actions/collections.action';

const CardDetails = async ({ params }: { params: { slug: string } }) => {
  const { front, back, color, note } = await getCard(params.slug[1]);
  const { cards } = await getCollectionById(true, params.slug[0]);

  // console.log(cards);

  return (
    <>
      <div className="relative z-30 h-full px-2">
        <Head
          cardsTotal={cards.length-1}
          current={params.slug[1]}
          collection={params.slug[0]}
          cards={JSON.stringify(cards)}
        />
        {/* <ResultsLine /> */}
        <WordCard front={front} back={back} color={color} note={note} />
      </div>
    </>
  );
};

export default CardDetails;
