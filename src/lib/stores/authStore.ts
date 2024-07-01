import create from 'zustand';

interface AuthState {
    isAuthorized: boolean;
    login: () => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    isAuthorized: false,
    login: () => set({ isAuthorized: true }),

    logout: () => set({ isAuthorized: false }),
}));
