import create from 'zustand';
import axios from 'axios';
import {axiosURL} from "@/lib/axios/axios";

interface ThemeList {
    title: string;
    description: string;
}

interface ThemeListState {
    data: ThemeList[] | null;
    isLoading: boolean;
    error: string | null;
    fetchThemes: () => Promise<void>;
}

const useThemeList = create<ThemeListState>((set) => ({
    data: null,
    isLoading: false,
    error: null,
    fetchThemes: async () => {
        set({ isLoading: true, error: null });
        try {
            const url = `/themes?depth=0`;
            const res = await axiosURL.get(url);
            const filteredData = res.data.map((item: any) => ({
                title: item.title,
                description: item.description,
            }));
            set({ data: filteredData, isLoading: false });
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            set({ error: errorMessage, isLoading: false });
        }
    }
}));

export default useThemeList;
