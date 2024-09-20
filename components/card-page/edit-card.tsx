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
import UploadImg from '../shared/navigation/add/upload-img';
import CollectionPicker from '../ui/custom/collection-picker';
import ColorPicker from '../ui/custom/color-picker';
import { Input } from '../ui/input';
import OptBtn from './opt-btn';
const EditCard = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <OptBtn icon="edit" />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Edit Card Info</AlertDialogTitle>
          <div className="hide_scroll my-2 flex max-h-[450px] flex-col gap-2 overflow-auto">
            <Input icon="front" placeholder="Card Front" />
            <Input icon="back" placeholder="Card Back" />
            <Input icon="note" placeholder="Notes" />
            <CollectionPicker />
            <ColorPicker title="Cadr Color" />
            <UploadImg />
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

export default EditCard;
