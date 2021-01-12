import create from 'zustand';

export const useAuthStore = create((set) => ({
  token: '',
  user: {},
  isLogged: false,
  onLogin: (token, user) => set(() => ({ token, user, isLogged: true })),
  onLogout: () => set(() => ({ token: '', isLogged: false })),
}));
