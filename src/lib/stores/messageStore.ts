import create from 'zustand'

type Message = {
    id: number
    content: string
    role: 'user' | 'assistant'
}

type MessageState = {
    messages: Message[]
    sendMessage: (content: any) => void // eslint-disable-line @typescript-eslint/no-explicit-any
}

const useMessage = create<MessageState>((set) => ({
    messages: [],
    sendMessage: (content: string) => {
        const newMessage: Message = {
            id: Date.now(),
            content: content,
            role: 'user',
        }
        set((state) => ({
            messages: [...state.messages, newMessage],
        }))
    },
}))

export default useMessage
