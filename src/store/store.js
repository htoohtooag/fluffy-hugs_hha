import { create } from "zustand";

const store = (set) => ({
  isLoaded: false,
  currentPage: 0,
  changePage: (currentPage) =>
    set((state) => {
      return { ...state, currentPage: currentPage };
    }),
  load: (isLoaded) =>
    set((state) => {
      return { ...state, isLoaded: isLoaded };
    }),
});

const useStore = create(store);

export default useStore;
