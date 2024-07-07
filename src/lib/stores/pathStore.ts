import create from 'zustand';
import useSidebarStore from '@/lib/stores/sidebarStore'

interface PathState {
    isAuthorizing: boolean;
    isChatting: boolean;
    updatePathState: (path: string) => void;
}

export const usePath = create<PathState>((set) => ({
    isAuthorizing: false,
    isChatting: false,
    updatePathState: (path) => set({
        isAuthorizing: path.startsWith('/auth'),
        isChatting: path.startsWith('/chat'),
    }),

}));
export default usePath;