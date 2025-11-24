import { useAuthStore } from '@/features/auth/store/auth-store';

export const useAuth = () => {
  const { user, isAuthenticated } = useAuthStore();
  return { user, isAuthenticated };
};