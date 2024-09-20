import * as Clerk from '@clerk/elements/common';
import Image from 'next/image';
import { Button } from '../ui/button';

const CConnection = ({
  name,
}: {
  name: any;
}) => {
  return (
    <Clerk.Connection className="grow" name={name}>
      <Button variant="secondary" className="h-10 w-full">
        <Image
          src={`/assets/icons/${name}.svg`}
          width={20}
          height={20}
          alt={name}
        />
      </Button>
    </Clerk.Connection>
  );
};

export default CConnection;
