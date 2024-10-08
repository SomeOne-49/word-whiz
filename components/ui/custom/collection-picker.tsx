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
import { colors } from '@/constants';

const CollectionPicker = ({
  setFormVal,
  collections,
  value,
  opened,
}: {
  setFormVal: (val: any) => void;
  collections: string;
  value: string;
  opened?: boolean;
}) => {
  return (
    <FormAccordion icon="folder" title="Cadr Collection" opened={opened}>
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
                    // console.log(value === collection.id);
                    // console.log(value);
                    // console.log(collection._id);
                  }}
                >
                  <CommandItem
                    className={`${value === collection._id ? '!bg-primary !text-primary-dark' : 'bg-primary-dark/70'} mb-1`}
                  >
                    <div className="flex w-full items-center justify-between gap-2">
                      <div className="flex items-center gap-3">
                        <BoxIcon
                          size="size-6 text-sm"
                          icon={collection.icon}
                          bg={colors[collection.color]?.bg}
                        />
                        <h6 className="font-semibold">{collection.name}</h6>
                      </div>
                      <div className="flex items-center gap-1 font-semibold">
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
