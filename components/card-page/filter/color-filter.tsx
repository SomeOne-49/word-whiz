'use client';

import ColorPicker from '@/components/ui/custom/color-picker';
import { formUrlQuery } from '@/lib/utils';
import { useRouter, useSearchParams } from 'next/navigation';

const ColorFilter = () => {
  const route = useRouter();
  const searchParams = useSearchParams();

  const handleChange = (val: string) => {
    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: 'c',
      value: val,
    });
    route.push(newUrl, { scroll: false });
  };
  return (
    <ColorPicker
      setFormVal={handleChange}
      title="colors"
      type="multiple"
      opened
    />
  );
};

export default ColorFilter;
