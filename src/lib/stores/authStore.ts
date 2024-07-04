import create from 'zustand';
import useChat from '@/lib/stores/chatStore'

interface AuthState {
    isAuthorized: boolean;
    login: () => void;
    logout: () => void;
}

export const useAuth = create<AuthState>((set) => ({
    isAuthorized: false,
    login: () => set({ isAuthorized: true }),

    logout: () => set({ isAuthorized: false }),
}));
export default useAuth;