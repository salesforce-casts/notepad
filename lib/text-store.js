import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useTextStore = create()(
  persist(
    (set) => ({
      text: '// some comment',
      setText(text) {
        set(() => ({ text }));
      },
    }),
    { name: 'command' }
  )
);

export default useTextStore;
