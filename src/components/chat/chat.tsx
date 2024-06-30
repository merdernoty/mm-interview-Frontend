'use client'
import useChat from '@/lib/stores/chatStore'
import { CornerDownLeft } from 'lucide-react'
import React, { useState } from 'react'
import Message from './message'

function Chat() {
    const { data, isLoading, error, fetchMessage } = useChat(
        (state: any) => state,
    )
    const [сontent, setСontent] = useState('')

    const handleSubmit = (e: any) => {
        e.preventDefault()
        const messages = [
            {
                role: 'user',
                content: сontent,
            },
        ]
        fetchMessage(messages)
    }
    return (
        <div>
            {isLoading && <div>Loading...</div>}
            {error && <div>Error: {error}</div>}
            {data && <Message data={data}></Message>}
            <form
                className="fixed bottom-0 left-0 w-full md:px-12 p-2  py-8 shadow-md "
                onSubmit={handleSubmit}
            >
                <div className="flex w-full flex-col gap-1.5 rounded-[26px] p-1.5 transition-colors bg-[#8B9AEE] dark:bg-token-main-surface-secondary">
                    <div className="flex items-end gap-1.5 md:gap-2">
                        <input
                            className="rounded-full w-full border-none pl-4 bg-[#8B9AEE] text-white text-sm leading-6 outline-none h-9 placeholder-white "
                            type="text"
                            value={сontent}
                            onChange={(e) => setСontent(e.target.value)}
                            placeholder="Enter message"
                        />
                        <button
                            type="submit"
                            className="p-2 flex items-end rounded-full bg-gradient-to-tr from-[#9D9FEF] via-[#A4A5FF] to-[#8E90F4] text-white "
                        >
                            <CornerDownLeft size={20} />
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Chat
