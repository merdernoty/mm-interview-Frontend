import { create } from 'zustand'
import { axiosURL } from '../axios/axios'
import axios from 'axios'

interface Question {
    id: number
    question: string
    difficulty: string
}

interface UserInfo {
    favoriteQuestions: Question[]
    completedQuestions: Question[]
    rewards: Reward[]
}

interface Reward {
    id: number
    image: string
    title: string
    description: string
}

interface User {
    id: number
    username: string
    email: string
    info: UserInfo
}

interface UserData {
    data: User | null
    isLoading: boolean
    error: string | null
    fetchUserDataByUsername: (username: string) => Promise<void>
    fetchUserDataByToken: () => Promise<void>
    addToFav: (questionId: number) => Promise<void>
}

export const getUserToken = (): string => {
    let token = ''

    if (typeof window !== 'undefined') {
        const tokenString = localStorage.getItem('token')
        if (tokenString) {
            try {
                const tokenObject = JSON.parse(tokenString)
                token = tokenObject?.state?.token || ''
            } catch (error) {
                console.error(
                    'Ошибка при разборе токена из localStorage:',
                    error,
                )
            }
        }
    }

    return token
}

const useUser = create<UserData>((set) => ({
    data: null,
    isLoading: false,
    error: null,

    fetchUserDataByUsername: async (username: string) => {
        set({ isLoading: true, error: null })
        try {
            const url = `/users/byUsername/${username}`
            const res = await axiosURL.get(url)
            set({ data: res.data, isLoading: false })
        } catch (error) {
            const errorMessage =
                error instanceof Error ? error.message : 'Unknown error'
            set({ error: errorMessage, isLoading: false })
        }
    },

    fetchUserDataByToken: async () => {
        try {
            const token = getUserToken()
            const res = await axiosURL.post('/users/me', null, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            console.log('Ответ сервера:', res)
            if (res.status === 201) {
                set({ data: res.data, isLoading: false, error: null })
            } else {
                throw new Error('Ошибка загрузки данных пользователя')
            }
        } catch (error) {
            console.error('Ошибка при запросе:', error)
            const errorMessage =
                error instanceof Error ? error.message : 'Unknown error'
            set({ error: errorMessage, isLoading: false })
        }
    },

    addToFav: async (questionId: number) => {
        try {
            const token = getUserToken()
            const res = await axios.post(
                `http://localhost:5000/questions/addToFav/${questionId}`,
                null,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                },
            )
            console.log('Ответ сервера:', res)
            if (res.status === 201) {
                set({ data: res.data, isLoading: false, error: null })
            } else {
                throw new Error('Ошибка загрузки данных пользователя')
            }
        } catch (error) {
            console.error('Ошибка при запросе:', error)
            const errorMessage =
                error instanceof Error ? error.message : 'Unknown error'
            set({ error: errorMessage, isLoading: false })
        }
    },
}))

export default useUser
