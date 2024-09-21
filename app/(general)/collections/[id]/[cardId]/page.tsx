import Head from '@/components/card-page/Head';
import ResultsLine from '@/components/card-page/result-line';
import WordCard from '@/components/card-page/word-card';

const CardDetails = async () => {
  return (
    <>
      <div className="relative z-30 h-full px-2">
        <Head cardsTotal={142} />
        <ResultsLine />
        <WordCard />
      </div>
    </>
  );
};

export default CardDetails;
