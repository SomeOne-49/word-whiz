import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import FilterBtn from './filter-btn';
const FilterBy = () => {
  return (
    <ToggleGroup type="single">
      <div className="flex grow items-center justify-around gap-2">
        <ToggleGroupItem value="a" className="block h-auto p-0">
          <FilterBtn icon="bookmark-save" title='Bookmarked' />
        </ToggleGroupItem>
        <ToggleGroupItem value="b" className="block h-auto p-0">
          <FilterBtn icon="shuffle" title='Shuffle' />
        </ToggleGroupItem>
        <ToggleGroupItem value="c" className="block h-auto p-0">
          <FilterBtn icon="oldest" title='Oldest' />
        </ToggleGroupItem>
        <ToggleGroupItem value="e" className="block h-auto p-0">
          <FilterBtn icon="newest" title='Newest' />
        </ToggleGroupItem>
      </div>
    </ToggleGroup>
  );
};

export default FilterBy;
