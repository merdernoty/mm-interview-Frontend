import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useCount = create(
    persist(
        (set) => ({
            count: 1,
            decrementCount: () =>
                set((state: any) => ({ count: state.count - 1 })),
            incrementCount: () =>
                set((state: any) => ({ count: state.count + 1 })),
        }),
        {
            name: 'count-storage',
        },
    ),
)
