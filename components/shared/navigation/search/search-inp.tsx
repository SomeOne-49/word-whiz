'use client';
import { Input } from '@/components/ui/input';
import { formUrlQuery, removeKeyesFromQuery } from '@/lib/utils';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const SearchInp = ({ placeholder }: { placeholder: string }) => {
  const route = useRouter();
  const path = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.get('s');
  const [input, setInput] = useState(query || '');

  useEffect(() => {
    const time = setTimeout(() => {
      if (input) {
        const newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: 's',
          value: input,
        });
        route.push(newUrl, { scroll: false });
      } else {
        const newUrl = removeKeyesFromQuery({
          params: searchParams.toString(),
          keys: ['s'],
        });
        route.push(newUrl, { scroll: false });
      }
    }, 300);
    return () => clearTimeout(time);
  }, [input, path, route, searchParams]);

  return (
    <div className="mb-2">
      <Input
        id="search_inp"
        icon="search"
        type="text"
        placeholder={placeholder}
        value={input}
        onChange={(e) => {
          setInput(e.target.value.trimStart());
        }}
      />
    </div>
  );
};

export default SearchInp;
