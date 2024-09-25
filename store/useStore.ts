import { create } from 'zustand';

type Store = {
  currentCard: number;
  updateCurrent: (val: number) => void;
  searchIpn: string;
  updateSearch: (val: string) => void;
};

const useStore = create<Store>()((set) => ({
  currentCard: 0,
  updateCurrent: (val) => set(() => ({ currentCard: val })),
  searchIpn: '',
  updateSearch: (val) => set(() => ({ searchIpn: val })),
}));
export default useStore;
