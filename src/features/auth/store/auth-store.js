import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: (email, password) => {
        if (email === 'test@test.com') {
          set({ user: { name: 'John Doe', email }, isAuthenticated: true });
          return true;
        }
        return false;
      },
      logout: () => {
        set({ user: null, isAuthenticated: false });
      },
    }),
    { name: 'auth-storage' }
  )
);