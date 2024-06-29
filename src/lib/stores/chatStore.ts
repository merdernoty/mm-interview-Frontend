import { create } from 'zustand'
import { axiosURL } from '../axios /axios'

const useChat = create((set) => ({
    data: null,
    isLoading: false,
    error: null,
    fetchMessage: async (messages: string[]) => {
        set({ isLoading: true, error: null })
        try {
            const res = await axiosURL.post(
                '/openai/chat',
                { messages },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                },
            )
            set({ data: res.data, isLoading: false })
        } catch (error) {
            set({ error: error, isLoading: false })
        }
    },
}))

export default useChat
