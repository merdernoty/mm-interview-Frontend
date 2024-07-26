import React, { useState, useEffect } from 'react';
import { CornerDownLeft } from 'lucide-react';
import { usePathname, useSearchParams } from 'next/navigation';
import useChat from '@/lib/stores/chatStore';
import Message from './message';

function Chat() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [theme, setTheme] = useState<string | null>(null);
    const [subtheme, setSubtheme] = useState<string | null>(null);
    const [question, setQuestion] = useState<string | null>(null);

    useEffect(() => {
        // Обновляем состояния на основе текущих параметров URL
        const params = new URLSearchParams(searchParams);
        const themeParam = params.get('theme');
        const subthemeParam = params.get('subtheme');
        const questionParam = params.get('question');

        setTheme(themeParam);
        setSubtheme(subthemeParam);
        setQuestion(questionParam);
    }, [pathname, searchParams]);

    const { data, isLoading, error, fetchMessage } = useChat();

    const [content, setContent] = useState('');
    const [isSend, setIsSend] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!content.trim()) return;

        const message = {
            role: 'user',
            content: JSON.stringify({
                messageL
                theme: 'themeValue',
                subtheme: 'subthemeValue',
                question: 'questionValue'
            })
        };

        fetchMessage(message);
        setIsSend(content);
        setContent('');
    };

    return (
        <div>
            {isLoading && <div>Loading...</div>}
            {error && <div>Error: {error}</div>}
            {data && <Message data={data} content={isSend} />}

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
    );
}

export default Chat;
