import FormAccordion from '@/components/shared/accordion';
import { colors } from '@/constants';
import { ToggleGroup, ToggleGroupItem } from '../toggle-group';

const ColorPicker = ({
  title,
  type,
  opened,
  setFormVal,
  defaultValue,
}: {
  title: string;
  type?: 'multiple' | 'single';
  opened?: boolean;
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
        <div className="grid w-full grid-cols-6 gap-3">
          {Object.keys(colors).map((key) => {
            return (
              <ToggleGroupItem
                key={key}
                className="h-9 rounded-xl"
                value={key}
                style={{ backgroundColor: colors[key]?.bg }}
              />
            );
          })}
        </div>
      </ToggleGroup>
    </FormAccordion>
  );
};

export default ColorPicker;
