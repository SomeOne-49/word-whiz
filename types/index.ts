// @types/index.ts
export interface SearchParamsProps {
  searchParams: {
    f?: string;
    c?: string[];
    [key: string]: string | string[] | undefined;
  };
}
