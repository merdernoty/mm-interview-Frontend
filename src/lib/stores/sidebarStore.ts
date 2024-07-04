import create from 'zustand';

interface SidebarState {
    isSideBarOpened: boolean;
    toggleSidebar: () => void;
}

const useSidebar = create<SidebarState>((set) => ({
    isSideBarOpened: false,

    toggleSidebar: () => set((state) => ({ isSideBarOpened: !state.isSideBarOpened })),
}));

export default useSidebar;