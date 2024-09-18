import FormAccordion from '@/components/shared/accordion';
import { colors } from '@/constants';
import { ToggleGroup, ToggleGroupItem } from '../toggle-group';

const ColorPicker = ({ title }: { title: string }) => {
  return (
    <FormAccordion icon="color" title={title}>
      <ToggleGroup type="single" variant="outline">
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
