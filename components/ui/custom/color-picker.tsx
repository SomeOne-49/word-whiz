import FormAccordion from '@/components/shared/accordion';
import { colors } from '@/constants';
import { ToggleGroup, ToggleGroupItem } from '../toggle-group';

const ColorPicker = ({
  title,
  type,
  opened,
  // setVal,
  setFormVal,
  defaultValue,
}: {
  title: string;
  type?: 'multiple' | 'single';
  opened?: boolean;
  // setVal: (val: any) => void;
  setFormVal: (val: any) => void;
  defaultValue?: any;
}) => {
  return (
    <FormAccordion icon="color" title={title} opened={opened}>
      <ToggleGroup
        type={type || 'single'}
        variant="outline"
        defaultValue={defaultValue}
        onValueChange={(val: any) => {
          setFormVal(val);
        }}
      >
        <div className="grid w-full grid-cols-5 gap-3">
          {colors.map((colorVal) => (
            <ToggleGroupItem
              key={colorVal}
              className="h-9 rounded-xl"
              value={colorVal}
              style={{ backgroundColor: colorVal }}
            />
          ))}
        </div>
      </ToggleGroup>
    </FormAccordion>
  );
};

export default ColorPicker;
