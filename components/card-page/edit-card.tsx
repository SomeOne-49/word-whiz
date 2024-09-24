'use client';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { getCollections } from '@/lib/actions/collections.action';
import { useAuth } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import CardForm from '../shared/navigation/add/card-form';
import OptBtn from './opt-btn';
type Props = {
  front: string;
  back: string;
  color: string;
  cardId: string;
  note: string;
  collection: string;
  isOpen: boolean;
};
const EditCard = ({
  front,
  back,
  color,
  cardId,
  note,
  collection,
  isOpen,
}: Props) => {
  const { userId } = useAuth();
  const path = usePathname();
  const [collections, setCollections] = useState<any>([]);

  useEffect(() => {
    const fetchCollections = async () => {
      if (!userId) return;
      const data = await getCollections(userId, path);

      setCollections(data);
    };
    fetchCollections();
  }, [userId, path, isOpen]);
  
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <OptBtn icon="edit" />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogDescription />
          <AlertDialogTitle>Edit Card Info</AlertDialogTitle>
        </AlertDialogHeader>
        <CardForm
          card={{ front, back, color, cardId, note, collection }}
          collections={collections}
          isEdit
        />
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default EditCard;
