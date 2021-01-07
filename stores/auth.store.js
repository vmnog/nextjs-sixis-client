import create from 'zustand';

export const useAuthStore = create((set) => ({
  token: '',
  isLogged: false,
  onLogin: (token) => set((state) => ({ token, isLogged: true })),
  onLogout: () => set(() => ({ token: '', isLogged: false })),
}));
