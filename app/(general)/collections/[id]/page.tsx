import Head from '@/components/card-page/Head';
import NoCards from '@/components/card-page/no-cards';
import WordCard from '@/components/card-page/word-card';
import { getCollectionCards } from '@/lib/actions/card.action';
import { SearchParamsProps } from '@/types';

const CardDetails = async ({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: SearchParamsProps;
}) => {
  const cards = await getCollectionCards(params.id, searchParams.f);

  if (cards.length <= 0) return <NoCards />;

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
