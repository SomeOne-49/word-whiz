// import CollectionBox from '@/components/home/boxs/collection-box';
// import HomeSort from '@/components/home/sort';
import SortBtn from '@/components/homeComponents/sort-btn';
import { COLLECTIONS_LIST } from '@/constants';
const Home = () => {
  return (
    <div className="flex max-h-full flex-col gap-3">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold text-primary">My Collections</h1>
        <SortBtn/>
      </div>
      <div className="hide_scroll flex flex-col gap-3 overflow-auto px-1">
        {COLLECTIONS_LIST.map((collection) => {
          return (
            // <CollectionBox
            //   key={collection.id}
            //   colored
            //   iconBg={collection.color}
            //   icon={collection.icon}
            //   link={`/collections/${collection.id}/1`}
            //   title={collection.name}
            //   date={collection.createdAt}
            //   items={collection.itemCount}
            // />
            <p key={collection.color}>Collection Box</p>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
