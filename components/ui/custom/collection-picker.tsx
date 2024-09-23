import BoxIcon from '@/components/home-components/boxes/box-icon';
import FormAccordion from '@/components/shared/accordion';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import Image from 'next/image';

const CollectionPicker = ({
  setFormVal,
  collections,
  value,
}: {
  setFormVal: (val: any) => void;
  collections: string;
  value: string;
}) => {
  return (
    <FormAccordion icon="folder" title="Cadr Collection">
      <Command className="bg-transparent">
        <CommandInput
          className="h-8 py-1 placeholder:text-primary"
          placeholder="Search for collection..."
        />
        <CommandList>
          <CommandEmpty>No Matches Found.</CommandEmpty>
          <CommandGroup className="hide_scroll max-h-36 overflow-auto ">
            {JSON.parse(collections).map((collection: any) => {
              return (
                <button
                  className="block w-full"
                  type="button"
                  key={collection.createdAt}
                  onClick={() => {
                    setFormVal(collection._id);
                    console.log(value === collection.id);
                    console.log(value);
                    console.log(collection.id);
                    
                  }}
                >
                  <CommandItem className={`${value === collection._id ? '!bg-primary !text-primary-light' : ''}`}>
                    <div className="flex justify-between gap-2 items-center w-full">
                      <div className="flex items-center gap-3">
                        <BoxIcon
                          size="size-6 text-sm"
                          icon={collection.icon}
                          bg={collection.color}
                        />
                        <h6 className="font-semibold">{collection.name}</h6>
                      </div>
                      <div className="flex gap-1 items-center font-semibold">
                        <p>
                          {collection.cards.length} Card
                          {collection.cards.length > 1 ? 's' : ''}
                        </p>
                      </div>
                    </div>
                  </CommandItem>
                </button>
              );
            })}
          </CommandGroup>
        </CommandList>
      </Command>
    </FormAccordion>
  );
};

export default CollectionPicker;
