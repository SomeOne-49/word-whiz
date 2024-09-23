'use client';
import {
  AlertDialog,
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
import { deleteCard } from '@/lib/actions/card.action';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
const DeleteCard = ({ id }: { id: string }) => {
  const path = usePathname();
  const { toast } = useToast();
  const onDelete = async () => {
    try {
      await deleteCard(id, path);
      toast({
        title: 'Card Deleted',
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
        <Button variant={'destructive'}>
          <Image
            src="/assets/icons/trash-white.svg"
            width={19}
            height={19}
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
          <AlertDialogCancel
            className="bg-red-500 text-white hover:bg-red-600 hover:text-white"
            onClick={onDelete}
          >
            Delete
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteCard;
