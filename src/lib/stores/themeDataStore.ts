import { create } from 'zustand';
import { axiosURL } from '../axios/axios';

// Интерфейсы для данных
interface Question {
    id: number;
    question: string;
    answers: string[];
}

interface Subtheme {
    id: number;
    title: string;
    questions: Question[];
}

interface Theme {
    id: number;
    title: string;
    description: string;
    subthemes: Subtheme[];
}

interface ThemeData {
    data: Theme | null;
    isLoading: boolean;
    error: string | null;
    fetchData: (themeId: number) => Promise<void>;
}

const useThemeData = create<ThemeData>((set) => ({
    data: null,
    isLoading: false,
    error: null,

    fetchData: async (themeId: number) => {
        set({ isLoading: true, error: null });
        try {
            const url = `/themes/${themeId}`;
            const res = await axiosURL.get(url);
            set({ data: res.data, isLoading: false });
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            set({ error: errorMessage, isLoading: false });
        }
    },
}));

export default useThemeData;
