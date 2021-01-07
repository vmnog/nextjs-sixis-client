import create from 'zustand';

export const usePostStore = create((set) => ({
  globalPosts: [],
  setGlobalPosts: (globalPosts) => set(() => ({ globalPosts })),
}));
