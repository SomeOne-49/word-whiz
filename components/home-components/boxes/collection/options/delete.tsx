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
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { deleteCollection } from '@/lib/actions/collections.action';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
const DeleteCollection = ({ id, name }: { id: string; name: string }) => {
  const [collectionName, setCollectionName] = useState('');
  const path = usePathname();
  const route = useRouter();
  const { toast } = useToast();
  const onDelete = async () => {
    try {
      await deleteCollection(id, path);
      toast({
        title: 'Collection Deleted',
        variant: 'success',
      });
      route.push('/');
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
            <p className="mb-2">
              To delete the collection{' '}
              <strong className="text-primary">{name}</strong>, type the name to
              confirm.
            </p>
            <Input
              placeholder="Enter collection name..."
              value={collectionName}
              onChange={(e) => setCollectionName(e.target.value)}
            />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="justify-center">
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="bg-red-500 text-white hover:bg-red-600 hover:text-white"
            onClick={onDelete}
            disabled={name !== collectionName}
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteCollection;
