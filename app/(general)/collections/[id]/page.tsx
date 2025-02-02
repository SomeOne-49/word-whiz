import Head from '@/components/card-page/Head';
import NoCards from '@/components/card-page/no-cards';
import WordCard from '@/components/card-page/word-card';
import { getCollectionCards } from '@/lib/actions/card.action';
import { SearchParamsProps } from '@/types';
import Image from 'next/image';

const CardDetails = async ({
  params,
  searchParams,
}: {
  params: { id: string };
} & SearchParamsProps) => {
  const cards = await getCollectionCards(
    params.id,
    searchParams.f,
    searchParams.c
  );

  const thereFilters = searchParams.f || searchParams.c;

  if (cards.length === 0 && !thereFilters) return <NoCards />;

  return (
    <>
      <div className="relative z-30 h-full px-2">
        <Head cardsTotal={cards.length} />
        {thereFilters && cards.length === 0 ? (
          <div className="mt-28 flex flex-col items-center justify-center">
            <Image
              src="/assets/no-cards.png"
              width={250}
              height={250}
              alt="No Cards Yet"
            />
            <h3 className="rounded-xl bg-white px-4 text-center text-2xl font-semibold text-primary">
              You didn&apos;t add any cards matches this filter.
            </h3>
          </div>
        ) : (
          <WordCard cards={JSON.stringify(cards)} />
        )}
      </div>
    </>
  );
};

export default CardDetails;
