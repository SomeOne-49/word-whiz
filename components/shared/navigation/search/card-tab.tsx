// import CardBox from '@/components/Home/boxs/card-box';
import { Input } from '@/components/ui/input';
import { TabsContent } from '@/components/ui/tabs';
import NoResults from './no-results';
const CardTab = () => {
  return (
    <TabsContent value="cards">
      <div className="mb-2">
        <Input icon="search" placeholder="Search..." />
      </div>
      <div className="mb-2 flex items-center justify-between gap-3 border-t border-primary-dark pt-2">
        <h6 className="text-xl font-semibold text-primary">Cards:</h6>
        <h6 className="font-semibold text-primary">0 Resultes found</h6>
      </div>
      <div className="flex flex-col gap-3 p-1.5">
        <NoResults />
        {/* <CardBox
          colored
          title="CardTitle"
          link="/collections/id/id"
          collection={{ name: 'Collection Name', icon: '🏴‍☠️' }}
        /> */}
      </div>
    </TabsContent>
  );
};

export default CardTab;
