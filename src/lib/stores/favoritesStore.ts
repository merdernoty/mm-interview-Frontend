import { create } from 'zustand';
import { axiosURL } from '../axios/axios';
import { getUserToken } from './userStore';


interface Question {
    id: number;
    question: string;
    answers: string[];
    difficulty: string;
}

interface FavoritesStore {
    favoriteQuestions: Question[];
    isLoading: boolean;
    error: string | null;
    addToFav: (questionId: number) => Promise<void>;
    removeFromFav: (questionId: number) => Promise<void>;
    fetchFavorites: () => Promise<void>;
}
const useFavorites = create<FavoritesStore>((set) => ({
    favoriteQuestions: [],
    isLoading: false,
    error: null,

    fetchFavorites: async () => {
        set({ isLoading: true, error: null });
        try {
            const token = getUserToken();
            const res = await axiosURL.post('/users/myFav', null, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

            console.log('Ответ сервера:', res);

            if (res.status === 201 ) {
                set({
                    favoriteQuestions: res.data,
                    isLoading: false,
                    error: null,
                });
            } else {
                throw new Error('Ошибка загрузки избранных вопросов');
            }
        } catch (error) {
            console.error('Ошибка при запросе:', error);
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            set({ error: errorMessage, isLoading: false });
        }
    },
    addToFav: async (questionId: number) => {
        set({ isLoading: true, error: null });
        try {
            const token = getUserToken();
            const res = await axiosURL.post(`/questions/addToFav/${questionId}`, null, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

            console.log('Ответ сервера:', res);

            if (res.status === 204 ) {

                set((state) => ({
                    favoriteQuestions: [...state.favoriteQuestions, res.data],
                    isLoading: false,
                    error: null
                }));
            } else {
                throw new Error('Ошибка добавления вопроса в избранное');
            }
        } catch (error) {
            console.error('Ошибка при запросе:', error);
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            set({ error: errorMessage, isLoading: false });
        }
    },

    removeFromFav: async (questionId: number) => {
        set({ isLoading: true, error: null });
        try {
            const token = getUserToken();
            const res = await axiosURL.post(`/questions/removeFromFav/${questionId}`, null, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

            console.log('Ответ сервера:', res);

            if (res.status === 204 ) {
                set((state) => ({
                    favoriteQuestions: state.favoriteQuestions.filter(q => q.id !== questionId),
                    isLoading: false,
                    error: null
                }));
            } else {
                throw new Error('Ошибка удаления вопроса из избранного');
            }
        } catch (error) {
            console.error('Ошибка при запросе:', error);
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            set({ error: errorMessage, isLoading: false });
        }
    },
}));

export default useFavorites;
