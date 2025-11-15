// stores/counterStore.ts

import { create } from 'zustand';

type CounterStore = {
  count: number;
  lang: string;
  increment: () => void;
  setLang: (value: string) => void;
};

export const useStore = create<CounterStore>()((set) => ({
  count: 0,
  lang: 'en',
  increment: () => set((state) => ({ count: state.count + 1 })),
  setLang: (value) => set({ lang: value }),
}));
