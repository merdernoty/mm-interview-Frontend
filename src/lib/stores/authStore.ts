import create from 'zustand'
import { persist, PersistOptions } from 'zustand/middleware'
import { axiosURL } from '@/lib/axios/axios'

interface AuthState {
    data: any | null
    token: string | null
    isAuthorized: boolean
    isLoading: boolean
    error: string | null
    login: (email: string, password: string) => Promise<void>
    logout: () => void
    refreshToken: (newToken: string) => void
    updateAuth: () => void
    register: (
        email: string,
        password: string,
        username: string,
    ) => Promise<void>
}

type AuthStatePersist = Pick<AuthState, 'token'>

const useAuth = create<AuthState>(
    (persist as any)(
        (set: any) => ({
            data: null,
            token: null,
            isAuthorized: false,
            isLoading: false,
            error: null,

            register: async (
                email: string,
                password: string,
                username: string,
            ) => {
                set({ isAuthorized: false, error: null, isLoading: true })
                try {
                    const res = await axiosURL.post('/auth/reg', {
                        email,
                        password,
                        username,
                    })
                    set({
                        token: res.data.token,
                        isAuthorized: true,
                        isLoading: false,
                    })
                } catch (error: any) {
                    const errorMessage =
                        error.response?.data?.message ||
                        error.message ||
                        'Unknown error'
                    set({ error: errorMessage, isLoading: false })
                }
            },

            login: async (email: string, password: string) => {
                set({ isLoading: true, error: null })
                try {
                    const res = await axiosURL.post('/auth/login', {
                        email,
                        password,
                    })
                    set({
                        token: res.data.token,
                        isAuthorized: true,
                        isLoading: false,
                    })
                } catch (error: any) {
                    const errorMessage =
                        error.response?.data?.message ||
                        error.message ||
                        'Unknown error'
                    set({ error: errorMessage, isLoading: false })
                }
            },

            logout: () => {
                localStorage.removeItem('token')
                set({ isAuthorized: false, token: null, data: null })
            },

            updateAuth: async () => {
                set({ isLoading: true, error: null })
                try {
                    const tokenString = localStorage.getItem('token')
                    const token = tokenString
                        ? JSON.parse(tokenString)?.state?.token
                        : null
                    const res = await axiosURL.get('/auth/validate', {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    })
                    if (res.data.message === 'valid') {
                        set({
                            isAuthorized: true,
                            isLoading: false,
                        })
                    }
                    if (res.data.message === 'falied') {
                        set({ isLoading: false, isAuthorized: false })
                    }
                    if (token === null) {
                        localStorage.removeItem('token')
                        set({ isAuthorized: false, token: null, data: null })
                    }
                } catch (error: any) {
                    const errorMessage =
                        error.response?.data?.message ||
                        error.message ||
                        'Unknown error'
                    set({ error: errorMessage, isLoading: false })
                }
            },
        }),
        {
            name: 'token',
            partialize: (state: AuthStatePersist) => ({ token: state.token }),
        } as PersistOptions<AuthStatePersist, { token: string | null }>,
    ),
)

export default useAuth
