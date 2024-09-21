'use client'
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
import { TabsContent } from '@/components/ui/tabs';
import { createCard } from '@/lib/actions/card.action';
import { cardSchema } from '@/lib/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import UploadImg from './upload-img';


const CardForm = () => {
  
  const form = useForm<z.infer<typeof cardSchema>>({
    resolver: zodResolver(cardSchema),
    defaultValues: {
      front: '',
      back: '',
      note: '',
      isMarked: false,
      img: undefined,
      color: '',
      cardCollection: '',
    },
  });
  
  const onSubmit = async (values: z.infer<typeof cardSchema>) => {
    try {
      const { front, back, note, isMarked, img, color, cardCollection } =
        values;
      await createCard({
        front,
        back,
        note,
        isMarked,
        img,
        color,
        cardCollection,
      });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <TabsContent value="cards">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="my-2 flex flex-col gap-2">
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
            <CollectionPicker />
            <ColorPicker title="Cadr Color" />
            <UploadImg />
            {/* <FormField
              control={form.control}
              name="back"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
          </div>
          <SheetFooter>
            <Button className="grow">Create Card</Button>
          </SheetFooter>
        </form>
      </Form>
    </TabsContent>
  );
};

export default CardForm;
