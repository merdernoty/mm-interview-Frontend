'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import InputForm from '@/components/UI/Input/InputForm';
import { Bell, History, PanelRightOpen, Star, CircleUser } from 'lucide-react';

const ChatHeader = () => {
    const [inputText, setInputText] = useState('');
    const [isAuthorized, setIsAuthorized] = useState(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value);
    };

    return (
        <div className="fixed top-0 left-0 w-full flex justify-between items-center bg-mainBlack p-3">
            <ul className="flex list-none m-0 p-0 mr-auto">
                <li className="ml-5">
                    <Link href="/">
                        <PanelRightOpen size={24} className="text-white" />
                    </Link>
                </li>
                <li className="ml-5">
                    <Link href="/">
                        <Star size={24} className="text-white" />
                    </Link>
                </li>
            </ul>

            <ul className="flex list-none m-0 p-0 ml-auto items-center">
                <li className={`mr-5 ml-5 ${inputText.length > 0 ? 'input-focused' : ''}`}>
                    <InputForm onChange={handleInputChange} />
                </li>

                <li className="mr-3">
                    <Link href="/">
                        <History size={24} className="text-white" />
                    </Link>
                </li>
                <li className="mr-3">
                    <Link href="/">
                        <Bell size={24} className="text-white" />
                    </Link>
                </li>

                <li>
                    <Link href="/">
                        <CircleUser size={24} className="text-white" />
                    </Link>
                </li>
            </ul>

            <style jsx>{`
                .input-focused {
                    transform: scale(1.1); 
                    transition: transform 0.3s ease-in-out;
                }
            `}</style>
        </div>
    );
};

export default ChatHeader;
