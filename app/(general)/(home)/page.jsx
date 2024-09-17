import CollectionBox from "@/components/Home/collection-box";
import HomeSort from "@/components/Home/sort";

const Home = () => {
  return (
    <div className="flex max-h-full flex-col gap-3">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold text-primary">My Collections</h1>
        <HomeSort/>
      </div>
      <div className="hide_scroll flex flex-col gap-3 overflow-auto px-1">
        <CollectionBox colored />
        <CollectionBox colored />
      </div>
    </div>
  )
}

export default Home;