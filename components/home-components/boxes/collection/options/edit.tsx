import CollectionForm from '@/components/shared/navigation/add/collection-form';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
const EditCollection = ({ collection }: { collection: string }) => {

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button variant={'ghost'}>
          <Image
            src="/assets/icons/edit.svg"
            width={20}
            height={20}
            alt="Edit"
          />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Edit Collection Info</AlertDialogTitle>
          <CollectionForm isEdit collection={collection} />
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default EditCollection;
