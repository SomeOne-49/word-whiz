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
import { SheetFooter } from '@/components/ui/sheet';
import {
  createCollection,
  updateCollection,
} from '@/lib/actions/collections.action';
import { collectionSchema } from '@/lib/validation';
import { usePathname } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import {
  AlertDialogCancel,
  AlertDialogFooter,
} from '@/components/ui/alert-dialog';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@clerk/nextjs';
import { PopoverClose } from '@radix-ui/react-popover';

const CollectionForm = ({
  isEdit,
  collection,
}: {
  isEdit: boolean;
  collection?: string;
}) => {
  const collectionInfo = JSON.parse(collection || '{}');
  const pathname = usePathname();
  const { toast } = useToast();
  const { userId } = useAuth();

  const form = useForm<z.infer<typeof collectionSchema>>({
    resolver: zodResolver(collectionSchema),
    defaultValues: {
      name: collectionInfo.name || '',
      color: collectionInfo.color || '#fff',
      icon: collectionInfo.icon || '',
    },
  });

  if (!userId) return;

  const onSubmit = async (values: z.infer<typeof collectionSchema>) => {
    try {
      if (!isEdit) {
        const { name, color, icon } = values;
        await createCollection({ name, color, icon, userId }, pathname);
        toast({
          title: 'Collection has been added.',
          variant: 'success',
        });
        form.reset();
      } else {
        const { name, color, icon } = values;
        await updateCollection(
          collectionInfo.id,
          { name, color, icon },
          pathname
        );
        toast({
          title: 'Collection has been added.',
          variant: 'success',
        });
      }
    } catch (e) {
      toast({
        title: 'Error occurred',
        description: e instanceof Error ? e.message : 'Something went wrong',
        variant: 'destructive',
      });
    }
  };

  return (
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
                  <ColorPicker
                    title="Collection Color"
                    setFormVal={(val) => {
                      form.setValue('color', val);
                    }}
                    opened={isEdit}
                    defaultValue={collectionInfo.color}
                  />
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
                  <Input icon="icon" placeholder="Collection icon" {...field} />
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
          {isEdit ? (
            <AlertDialogFooter>
              <PopoverClose>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
              </PopoverClose>
              {/* <AlertDialogAction
                type="submit"
                className="bg-green-500 text-white hover:bg-green-600 hover:text-white"
              >
                {form.formState.isSubmitting ? 'Saving...' : 'Save'}
              </AlertDialogAction> */}
              <Button
                type="submit"
                className="grow"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? 'Saving...' : 'Save'}
              </Button>
            </AlertDialogFooter>
          ) : (
            <Button
              type="submit"
              className="grow"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? 'Creating' : 'Create Collection'}
            </Button>
          )}
        </SheetFooter>
      </form>
    </Form>
  );
};

export default CollectionForm;
