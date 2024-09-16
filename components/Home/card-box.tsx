import Link from "next/link";

const CardBox = ({ colored }: { colored?: boolean }) => {
  return (
    <Link
    href='cards/cardname'
      className={`flex flex-col rounded-xl px-3.5 py-2 shadow-sm transition duration-500 hover:scale-[1.01] active:scale-[.99] ${colored ? 'bg-primary-light' : 'bg-white'}`}
    >
      <h5 className="text-lg font-semibold text-primary">Card Name</h5>
      <div className="flex gap-1.5 items-center">
        <div
          className={`center_ele size-6 rounded-full ${colored ? 'bg-white' : 'bg-primary-light'}`}
        >
          <div className="h-5">🇸🇦</div>
        </div>
        <p className="text-sm text-gray-500">Collection name</p>
      </div>
    </Link>
  );
};

export default CardBox;
