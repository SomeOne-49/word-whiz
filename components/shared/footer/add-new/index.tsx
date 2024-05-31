'use client';
import CollectionList from '@/components/ui/collection-picker';
import ColorPicker from '@/components/ui/color-picker';
import UInput from '@/components/ui/input';
import { Button } from '@nextui-org/button';

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/modal';
import { Tab, Tabs } from '@nextui-org/tabs';
import Image from 'next/image';
type Props = {
  title: string;
};
const AddNew = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="flex flex-col gap-2">
      <Button
        onPress={onOpen}
        variant="light"
        color="primary"
        className="h-auto min-w-fit p-1.5"
      >
        <Image
          src="/assets/icons/add-folder.svg"
          alt="add"
          width={32}
          height={32}
        />
      </Button>
      <Modal
        isOpen={isOpen}
        backdrop="blur"
        placement="bottom-center"
        onOpenChange={onOpenChange}
        classNames={{
          base: 'bg-white  text-primary pb-4',
          closeButton:
            'top-[18px] rounded-lg hover:bg-primary/20 right-[1.5rem]',
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-2xl pb-2">
                Add New
              </ModalHeader>
              <ModalBody className="py-0 gap-2 max-h-[80vh] overflow-auto">
                <Tabs
                  aria-label="types"
                  color="primary"
                  radius="full"
                  size="md"
                  classNames={{
                    tabList: 'bg-primary-light w-full',
                    tab: ' text-primary',
                    tabContent: ' text-primary',
                    panel: 'px-0 pb-0',
                  }}
                >
                  <Tab key="collection" title="Collectin">
                    <div className="flex gap-3 flex-col">
                      <UInput
                        type="text"
                        icon="folder"
                        placeholder="Collection Name"
                      />
                      <ColorPicker title="Collection Color" />
                      <UInput
                        type="text"
                        icon="icon"
                        placeholder="Collection Icon"
                      />
                    </div>
                    <ModalFooter className="p-0 pt-3 ">
                      <Button
                        color="primary"
                        className="w-full"
                        onPress={onClose}
                      >
                        Create Collaction
                      </Button>
                    </ModalFooter>
                  </Tab>
                  <Tab key="card" title="Card">
                    <div className="flex gap-3 flex-col">
                      <UInput
                        type="text"
                        icon="front"
                        placeholder="Card Front"
                      />
                      <UInput type="text" icon="back" placeholder="Card Back" />
                      <UInput type="text" icon="note" placeholder="Notes" />
                      <CollectionList />
                      <ColorPicker title="Collection Color" />
                      <div className="bg-primary-light rounded-xl p-3 flex gap-2 justify-between items-center">
                        <div className="flex gap-3 items-center">
                          <Image
                            src={`/assets/icons/gallery.svg`}
                            alt="image"
                            width={22}
                            height={22}
                          />
                          <span>Card Image</span>
                        </div>
                        <div>
                          <label
                            className="w-12 h-12 rounded-lg bg-primary grid place-content-center"
                            htmlFor="uploadImg"
                          >
                            <Image
                              src="/assets/icons/upload-img.svg"
                              alt="upload-img"
                              width={27}
                              height={27}
                            />
                          </label>
                          <input type="file" name="img" id="uploadImg" className='hidden' />
                        </div>
                      </div>
                    </div>
                    <ModalFooter className="p-0 pt-3 ">
                      <Button
                        color="primary"
                        className="w-full"
                        onPress={onClose}
                      >
                        Create Collaction
                      </Button>
                    </ModalFooter>
                  </Tab>
                </Tabs>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default AddNew;
