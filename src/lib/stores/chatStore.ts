import { create, SetState } from 'zustand';
import { axiosURL } from '../axios/axios';

interface State {
    data: any; 
    isLoading: boolean;
    error: any; 
}

interface Actions {
    fetchMessage: (messages: string[]) => Promise<void>;
}

const useChat = create<State & Actions>((set: SetState<State>) => ({
    data: null,
    isLoading: false,
    error: null,
    fetchMessage: async (messages: string[]) => {
        set({ isLoading: true, error: null }); // Установка состояния загрузки и сброс ошибки
        try {
            const res = await axiosURL.post('/openai/chat', { messages }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            set({ data: res.data, isLoading: false }); // Установка полученных данных и завершения загрузки
        } catch (error) {
            set({ error: error, isLoading: false }); // Обработка ошибки и завершения загрузки
        }
    },
}));

export default useChat;
