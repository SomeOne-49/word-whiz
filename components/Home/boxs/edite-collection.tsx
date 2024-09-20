import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import Image from 'next/image';
import { Button } from '../../ui/button';
import ColorPicker from '../../ui/custom/color-picker';
import { Input } from '../../ui/input';
const EditCollection = () => {
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
          <div className="my-2 flex flex-col gap-2">
            <Input icon="folder" placeholder="Collection name" />
            <ColorPicker title="Collection Color" />
            <Input icon="icon" placeholder="Collection icon" />
          </div>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction className="bg-green-500 text-white hover:bg-green-600 hover:text-white">
            Save
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default EditCollection;
