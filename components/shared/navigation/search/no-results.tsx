import Image from 'next/image';

const NoResults = () => {
  return (
    <div className="center_ele mt-14 flex-col">
      <Image
        src="/assets/no-matches-2.jpg"
        width={225}
        height={225}
        alt="no-matches"
      />
      <h5 className="rounded-xl bg-primary-light px-3 text-center text-3xl font-bold text-primary">
        No Matches Found
      </h5>
    </div>
  );
};

export default NoResults;
