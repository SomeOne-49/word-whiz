'use client';
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
import { createCard } from '@/lib/actions/card.action';
import { cardSchema } from '@/lib/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { usePathname } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
// import UploadImg from './upload-img';

const CardForm = ({ collections }: { collections: string }) => {
  const path = usePathname();
  const form = useForm<z.infer<typeof cardSchema>>({
    resolver: zodResolver(cardSchema),
    defaultValues: {
      front: '',
      back: '',
      note: '',
      img: undefined,
      color: '',
      cardCollection: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof cardSchema>) => {
    try {
      const { front, back, note, img, color, cardCollection } = values;

      await createCard(
        {
          front,
          back,
          note,
          img,
          color,
          cardCollection,
        },
        path
      );
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="hide_scroll my-2 flex max-h-[55vh] flex-col gap-2 overflow-auto">
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
            name="cardCollection"
            render={() => (
              <FormItem>
                <FormControl>
                  <CollectionPicker
                    collections={collections}
                    setFormVal={(val) => {
                      form.setValue('cardCollection', val);
                    }}
                    value={form.getValues('cardCollection')}
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
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* <FormField
            control={form.control}
            name="note"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <UploadImg />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> */}
        </div>
        <SheetFooter>
          <Button
            type="submit"
            className="grow"
            disabled={form.formState.isSubmitting}
            onClick={() => {
              // console.log(form.getValues());
            }}
          >
            {form.formState.isSubmitting ? 'Creating' : 'Create Card'}
          </Button>
        </SheetFooter>
      </form>
    </Form>
  );
};

export default CardForm;
