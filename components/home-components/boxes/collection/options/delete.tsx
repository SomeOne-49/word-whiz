'use client';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { deleteCollection } from '@/lib/actions/collections.action';
import { PopoverClose } from '@radix-ui/react-popover';
import Image from 'next/image';
const DeleteCollection = ({ id }: { id: string }) => {
  const { toast } = useToast();
  const onDelete = async () => {
    try {
      await deleteCollection(id, '/');
      toast({
        title: 'Collection Deleted',
        variant: 'success',
      });
    } catch (e) {
      toast({
        title: 'Error occurred',
        description: e instanceof Error ? e.message : 'Something went wrong',
        variant: 'destructive',
      });
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button variant={'ghost'} className="hover:bg-red-100">
          <Image
            src="/assets/icons/trash.svg"
            width={20}
            height={20}
            alt="trash"
          />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            collection and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="justify-center">
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <PopoverClose>
            <AlertDialogAction
              className="bg-red-500 text-white hover:bg-red-600 hover:text-white"
              onClick={onDelete}
            >
              Delete
            </AlertDialogAction>
          </PopoverClose>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteCollection;
