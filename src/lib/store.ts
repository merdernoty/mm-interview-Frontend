import { create } from 'zustand'

export const useCount = create((set) => ({
    count: 1,
    decrementCount: () => set((state: any) => ({ count: state.count - 1 })),
    incrementCount: () => set((state: any) => ({ count: state.count + 1 })),
}))
