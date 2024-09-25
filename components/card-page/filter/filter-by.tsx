import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { formUrlQuery } from '@/lib/utils';
import { useRouter, useSearchParams } from 'next/navigation';
import FilterBtn from './filter-btn';
const FilterBy = () => {
  const route = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get('f') || undefined;

  const handleChange = (val: string) => {
    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: 'f',
      value: val,
    });
    route.push(newUrl, { scroll: false });
  };
  return (
    <ToggleGroup type="single" onValueChange={handleChange} value={query}>
      <div className="flex grow items-center justify-around gap-2">
        <ToggleGroupItem value="bookmarked" className="block h-auto p-0">
          <FilterBtn icon="bookmark-save" title="Bookmarked" />
        </ToggleGroupItem>
        <ToggleGroupItem value="shuffle" className="block h-auto p-0">
          <FilterBtn icon="shuffle" title="Shuffle" />
        </ToggleGroupItem>
        <ToggleGroupItem value="oldest" className="block h-auto p-0">
          <FilterBtn icon="oldest" title="Oldest" />
        </ToggleGroupItem>
        <ToggleGroupItem value="newest" className="block h-auto p-0">
          <FilterBtn icon="newest" title="Newest" />
        </ToggleGroupItem>
      </div>
    </ToggleGroup>
  );
};

export default FilterBy;
