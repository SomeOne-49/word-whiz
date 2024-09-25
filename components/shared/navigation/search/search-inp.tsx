'use client';
import { Input } from '@/components/ui/input';
import { formUrlQuery, removeKeyesFromQuery } from '@/lib/utils';
import useStore from '@/store/useStore';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const SearchInp = ({ placeholder }: { placeholder: string }) => {
  const route = useRouter();
  const path = usePathname();
  const searchParams = useSearchParams();
  const { searchIpn, updateSearch } = useStore();

  useEffect(() => {
    const time = setTimeout(() => {
      if (searchIpn) {
        const newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: 's',
          value: searchIpn,
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
  }, [searchIpn, path, route, searchParams]);

  return (
    <div className="mb-2">
      <Input
        id="search_inp"
        icon="search"
        type="text"
        placeholder={placeholder}
        value={searchIpn}
        onChange={(e) => {
          updateSearch(e.target.value.trimStart());
        }}
      />
    </div>
  );
};

export default SearchInp;
