import create from 'zustand';

export const useAuthStore = create((set) => ({
  token: undefined,
  user: undefined,
  isLogged: false,
  onLogin: (token, user) => set(() => ({ token, user, isLogged: true })),
  onLogout: () =>
    set(() => ({ token: undefined, user: undefined, isLogged: false })),
}));
