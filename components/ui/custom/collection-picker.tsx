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

const CollectionPicker = ({
  setFormVal,
  collections,
}: {
  setFormVal: (val: any) => void;
  collections: string;
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
          <CommandGroup className="hide_scroll max-h-36 overflow-auto">
            {JSON.parse(collections).map((collection: any) => {
              return (
                <button
                  className="block w-full"
                  type="button"
                  key={collection.createdAt}
                  onClick={() => {
                    setFormVal(collection._id);
                  }}
                >
                  <CommandItem>
                    <div className="flex items-center gap-3">
                      <BoxIcon
                        size="size-6 text-sm"
                        icon={collection.icon}
                        bg={collection.color}
                      />
                      <h6 className="font-semibold">{collection.name}</h6>
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
