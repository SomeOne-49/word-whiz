'use client';
import DeleteCard from '@/components/card-page/delete-card';
import {
  AlertDialogCancel,
  AlertDialogFooter,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import CollectionPicker from '@/components/ui/custom/collection-picker';
import ColorPicker from '@/components/ui/custom/color-picker';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { SheetFooter } from '@/components/ui/sheet';
import { createCard, updateCard } from '@/lib/actions/card.action';
import { cardSchema } from '@/lib/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { usePathname, useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
// import UploadImg from './upload-img';
type Props = {
  collections: string;
  card?: {
    front: string;
    back: string;
    color: string;
    cardId: string;
    note: string;
    collection: string;
  };
  isEdit?: boolean;
};
const CardForm = ({ collections, isEdit = false, card }: Props) => {
  const route = useRouter()
  const path = usePathname();
  const form = useForm<z.infer<typeof cardSchema>>({
    resolver: zodResolver(cardSchema),
    defaultValues: {
      front: card?.front || '',
      back: card?.back || '',
      note: card?.note || '',
      color: card?.color || '',
      collectionId: card?.collection || '',
    },
  });

  const onSubmit = async (values: z.infer<typeof cardSchema>) => {
    try {
      const { front, back, note, img, color, collectionId } = values;
      if (isEdit) {
        await updateCard(
          card?.cardId || '',
          { front, back, note, color, collection: collectionId },
          path
        );
        route.push('/')
      } else {
        await createCard(
          {
            front,
            back,
            note: note || '',
            img,
            color,
            collectionId,
          },
          path
        );
        form.reset();
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="hide_scroll flex flex-col gap-2 overflow-auto">
          <FormField
            control={form.control}
            name="front"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input icon="front" placeholder="Card Front" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="back"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input icon="back" placeholder="Card Back" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="note"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input icon="note" placeholder="Note" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="collectionId"
            render={() => (
              <FormItem>
                <FormControl>
                  <CollectionPicker
                    collections={collections}
                    setFormVal={(val) => {
                      form.setValue('collectionId', val);
                    }}
                    value={form.getValues('collectionId')}
                    opened
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="color"
            render={() => (
              <FormItem>
                <FormControl>
                  <ColorPicker
                    title="Cadr Color"
                    setFormVal={(val) => form.setValue('color', val)}
                    defaultValue={card?.color}
                    opened
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <SheetFooter className="mt-3">
          {isEdit ? (
            <AlertDialogFooter className="grow">
              <div className="flex grow items-center justify-between gap-2">
                <DeleteCard id={card?.cardId || ''} />
                <div className="flex items-center gap-2">
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <Button
                    type="submit"
                    className="grow"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? 'Saving...' : 'Save'}
                  </Button>
                </div>
              </div>
            </AlertDialogFooter>
          ) : (
            <Button
              type="submit"
              className="grow"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? 'Creating' : 'Create Card'}
            </Button>
          )}
        </SheetFooter>
      </form>
    </Form>
  );
};

export default CardForm;
