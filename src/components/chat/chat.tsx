'use client'

import React, { useState, useEffect, useMemo, useRef } from 'react'
import { CornerDownLeft } from 'lucide-react'
import { useParams, useRouter } from 'next/navigation'
import useChat from '@/lib/stores/chatStore'
import FirstMessage from './firstMessage'
import Message from './message'
import SpinnerUI from '@/components/ui/spinner/spinner'

function Chat() {
    const {
        data,
        result,
        feedback,
        isLoading,
        error,
        fetchQuestion,
        sendAnswer,
    } = useChat()
    const endOfMessagesRef = useRef<HTMLDivElement>(null)
    const [content, setContent] = useState('')
    const [messages, setMessages] = useState<
        { content: string; role: 'user' | 'server' }[]
    >([])
    const router = useRouter()
    const params = useParams<{
        theme: string
        subtheme: string
        question: string
    }>()

    const fetchQuestionMemoized = useMemo(() => {
        if (params.theme && params.subtheme && params.question) {
            return {
                theme: params.theme,
                subtheme: params.subtheme,
                question: params.question.replace(/%20/g, ' '),
            }
        }
        return null
    }, [params.theme, params.subtheme, params.question])

    useEffect(() => {
        if (fetchQuestionMemoized) {
            fetchQuestion(fetchQuestionMemoized)
        } else {
            router.push('/')
        }
        return () => {
            useChat.setState({ data: '', isLoading: false, error: null })
        }
    }, [fetchQuestionMemoized, fetchQuestion, router])

    useEffect(() => {
        if (result) {
            setMessages((prevMessages) => [
                ...prevMessages,
                { content: result, role: 'server' },
            ])
        }
    }, [result])

    useEffect(() => {
        if (feedback) {
            setMessages((prevMessages) => [
                ...prevMessages,
                { content: feedback, role: 'server' },
            ])
        }
    }, [feedback])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (content.trim()) {
            setMessages((prevMessages) => [
                ...prevMessages,
                { content, role: 'user' },
            ])
            setContent('')

            await sendAnswer({
                theme: params.theme || '',
                subtheme: params.subtheme || '',
                question: params.question || '',
                answer: content,
            })
        }
    }
    useEffect(() => {
        endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages])

    return (
        <div className="flex flex-col h-screen">
            <div className="flex-grow overflow-y-auto p-4">
                {isLoading && (
                    <div>
                        <SpinnerUI />
                    </div>
                )}
                {error && <div>Error: {error.message}</div>}
                {data && !result && <FirstMessage data={{ question: data }} />}
                {messages.map((msg, index) => (
                    <Message
                        key={index}
                        content={msg.content}
                        role={msg.role}
                    />
                ))}
            </div>
            <div ref={endOfMessagesRef} />
            <form
                className="fixed bottom-0 left-0 w-full md:px-12 p-2 py-8 shadow-md"
                onSubmit={handleSubmit}
            >
                <div className="flex w-full flex-col gap-1.5 rounded-[26px] p-1.5 transition-colors bg-[#8B9AEE] dark:bg-token-main-surface-secondary">
                    <div className="flex items-end gap-1.5 md:gap-2">
                        <input
                            className="rounded-full w-full border-none pl-4 bg-[#8B9AEE] text-white text-sm leading-6 outline-none h-9 placeholder-white"
                            type="text"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            placeholder="Enter message"
                        />
                        <button
                            type="submit"
                            className="p-2 flex items-end rounded-full bg-gradient-to-tr from-[#9D9FEF] via-[#A4A5FF] to-[#8E90F4] text-white"
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
