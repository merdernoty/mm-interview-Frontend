import create from 'zustand';

interface PathState {
    isAuthorizing: boolean;
    isChatting: boolean;
    updatePathState: (path: string) => void;
}

export const usePathStore = create<PathState>((set) => ({
    isAuthorizing: false,
    isChatting: false,
    updatePathState: (path) => set({
        isAuthorizing: path.startsWith('/auth'),
        isChatting: path.startsWith('/chat'),
    }),

}));
