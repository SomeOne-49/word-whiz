'use client';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/ui/button';
import ColorPicker from '@/components/ui/custom/color-picker';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { SheetClose, SheetFooter } from '@/components/ui/sheet';
import { TabsContent } from '@/components/ui/tabs';
import { createCollection } from '@/lib/actions/collections.action';
import { collectionSchema } from '@/lib/validation';
import { usePathname, useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { useToast } from '@/hooks/use-toast';

const CollectionForm = () => {
  const router = useRouter()
  const pathname = usePathname();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof collectionSchema>>({
    resolver: zodResolver(collectionSchema),
    defaultValues: {
      name: '',
      color: '#fff',
      icon: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof collectionSchema>) => {
    try {
      const { name, color, icon } = values;
      await createCollection({ name, color, icon }, pathname);
      toast({
        title: 'Collection has been added.',
        variant: 'success',
      });
      form.reset();
    } catch (e) {
      toast({
        title: 'Error occurred',
        description: e instanceof Error ? e.message : 'Something went wrong',
        variant: 'destructive',
      });
    }
    router.push('/')
  };

  return (
    <TabsContent value="collections">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="my-2 flex flex-col gap-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      icon="folder"
                      placeholder="Collection name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="color"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <ColorPicker title="Collection Color" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="icon"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      icon="icon"
                      placeholder="Collection icon"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                  <FormDescription>
                    Make sure to select only the emoji.
                  </FormDescription>
                </FormItem>
              )}
            />
          </div>
          <SheetFooter>
            {/* <SheetClose asChild> */}
              <Button
                type="submit"
                className="grow"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? 'Creating' : 'Create Collection'}
              </Button>
            {/* </SheetClose> */}
          </SheetFooter>
        </form>
      </Form>
    </TabsContent>
  );
};

export default CollectionForm;
