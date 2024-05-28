import CollectionCard from "@/components/cards/collection";
import SortDropdown from "@/components/home/sort-dropdown";

const Home = () => {
  return (
    <section className="flex h-full flex-col overflow-auto rounded-xl">
      <div className="sticky top-0 z-40 flex items-center justify-between bg-primary pb-3">
        <h1 className="text-3xl font-semibold">My Collections</h1>
        <SortDropdown/>
      </div>
      <div className="flex flex-col gap-2.5">
        {Array.from({ length: 3 }).map((_, i) => (
          <CollectionCard key={i} />
        ))}
      </div>
    </section>
  )
}

export default Home;