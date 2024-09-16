import Image from "next/image";
import { Button } from "../ui/button";

const Sort = () => {
  return (
    <Button variant={'ghost'} className="px-2">
      <Image src="/assets/icons/sort.svg" width={24} height={24} alt="sort" />
    </Button>
  );
};

export default Sort;
