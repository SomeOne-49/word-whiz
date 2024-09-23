import { create } from 'zustand';

type Store = {
  currentCard: number;
  updateCurrent: (val: number) => void;
};

const useStore = create<Store>()((set) => ({
  currentCard: 0,
  updateCurrent: (val) => set((state) => ({ currentCard: val })),
}));
export default useStore;
