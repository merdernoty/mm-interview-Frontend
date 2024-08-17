import { create } from 'zustand'
import { axiosURL } from '@/lib/axios/axios'

interface PathState {
    data: any | null // или точный тип вместо `any`
    isLoading: boolean
    error: string | null
    getRandomQuestion: () => Promise<void>
    getRandomSubthemeQuestion: (subthemeId: number) => Promise<void>
}

export const useQuestion = create<PathState>((set) => ({
    data: null,
    isLoading: false,
    error: null,

    getRandomQuestion: async () => {
        set({ isLoading: true, error: null })
        try {
            const url = `/themes/random`
            const res = await axiosURL.get(url)
            set({ data: res.data, isLoading: false })
        } catch (error) {
            const errorMessage =
                error instanceof Error ? error.message : 'Unknown error'
            set({ error: errorMessage, isLoading: false })
        }
    },
    getRandomSubthemeQuestion: async (subthemeId: number) => {
        set({ isLoading: true, error: null })
        try {
            const url = `/themes/random/${subthemeId}`
            const res = await axiosURL.get(url)
            set({ data: res.data, isLoading: false })
        } catch (error) {
            const errorMessage =
                error instanceof Error ? error.message : 'Unknown error'
            set({ error: errorMessage, isLoading: false })
        }
    },
}))

export default useQuestion
