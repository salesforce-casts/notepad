import { create } from 'zustand';

const useAnimation = create()((set) => ({
  animate: false,
  isLoading: true,
  triggerAnimation() {
    set({ animate: true });
    setTimeout(() => {
      set({ isLoading: false });
    }, 500);
    setTimeout(() => {
      set({ animate: false, isLoading: true });
    }, 3000);
  },
}));

export default useAnimation;
