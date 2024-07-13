import { create } from 'zustand';
import { axiosURL } from '../axios/axios';


interface Question {
    id: number;
    question: string;
}
interface userInfo{
    favoriteQuestions: Question[];
    completedQuestions: Question[];
    rewards: Reward[];
}
interface Reward {
    id: number;
    image: string;
    title: string;
    description: string;
}
interface User {
    id: number;
    username: string;
    email: string;
    info:userInfo;
}

interface UserData {
    data: User | null;
    isLoading: boolean;
    error: string | null;
    fetchUserData: (userId: number) => Promise<void>;
}

const useUserData = create<UserData>((set) => ({
    data: null,
    isLoading: false,
    error: null,

    fetchUserData: async (userId: number) => {
        set({ isLoading: true, error: null });
        try {
            const url = `/users/${userId}`;
            const res = await axiosURL.get(url);
            set({ data: res.data, isLoading: false });
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            set({ error: errorMessage, isLoading: false });
        }
    },
}));

export default useUserData;
