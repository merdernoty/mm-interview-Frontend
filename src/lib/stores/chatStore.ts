import { create } from 'zustand'
import { axiosURL } from '../axios/axios'

interface State {
    data: string
    result: string
    feedback: string
    isLoading: boolean
    error: any // eslint-disable-line @typescript-eslint/no-explicit-any
    cachedQuestions: Record<string, string>
}

interface Question {
    theme: string
    subtheme: string
    question: string
}

interface Answer {
    theme: string
    subtheme: string
    question: string
    answer: string
}

interface Actions {
    fetchQuestion: (question: Question) => Promise<void>
    sendAnswer: (answer: Answer) => Promise<void>
}

const useChat = create<State & Actions>((set, get) => ({
    data: '',
    result: '',
    feedback: '',
    isLoading: false,
    error: null,
    cachedQuestions: {},
    fetchQuestion: async (question: Question) => {
        set({ isLoading: true, error: null })

        const cacheKey = `${question.theme}-${question.subtheme}-${question.question}`
        const cachedQuestion = get().cachedQuestions[cacheKey]

        if (cachedQuestion) {
            set({ data: cachedQuestion, isLoading: false })
            return
        }

        try {
            const response = await axiosURL.post(
                '/openai/interview/question',
                question,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                },
            )

            const responseData = response.data.question
            set((state) => ({
                data: responseData,
                isLoading: false,
                cachedQuestions: {
                    ...state.cachedQuestions,
                    [cacheKey]: responseData,
                },
            }))
        } catch (error) {
            set({ error: error, isLoading: false })
        }
    },
    sendAnswer: async (answer: Answer) => {
        set({ isLoading: false, error: null })

        try {
            const response = await axiosURL.post(
                '/openai/interview/answer',
                answer,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                },
            )

            const responseData = response.data.result // Предположим, что сервер возвращает результат в `result`
            const feedbackData = response.data.feedback // Обратная связь от сервера
            set({
                result: responseData,
                feedback: feedbackData,
                isLoading: false,
            })
        } catch (error) {
            set({ error: error, isLoading: false })
        }
    },
}))

export default useChat
