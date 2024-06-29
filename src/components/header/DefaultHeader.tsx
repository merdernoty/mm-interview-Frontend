'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import InputForm from '@/components/UI/Input/InputForm';
import { Bell, PanelLeftOpen, PanelLeftClose, CircleUser, Star, History } from 'lucide-react';

const DefaultHeader = () => {
    const [isAuthorized, setIsAuthorized] = useState(true);

    const [isAuthorizing, setIsAuthorizing] = useState(false);
    const [isChatting, setIsChatting] = useState(false);
    const [isSideBarOpened, setIsSideBarOpened] = useState(true);
    const [inputText, setInputText] = useState('');

    useEffect(() => {
        // Проверяем, что код выполняется в клиентском контексте
        if (typeof window !== 'undefined') {
            const currentPath = window.location.pathname;
            setIsChatting(currentPath.startsWith('/Chat'));
            setIsAuthorizing(currentPath.startsWith('/auth'));
        }
    }, []);

    const changeSidebar = () => {
        setIsSideBarOpened(!isSideBarOpened);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value);
    };

    return (
        <>
            {!isAuthorizing && (
                <div className="fixed top-0 left-0 w-full flex justify-between items-center bg-mainBlack p-3">
                    <ul className="flex list-none m-0 p-0 mr-auto">
                        {isSideBarOpened ? (
                            <li className="ml-5">
                                <PanelLeftOpen
                                    size={24}
                                    className="text-gray-200 cursor-pointer hover:text-white"
                                    onClick={changeSidebar}
                                />
                            </li>
                        ) : (
                            <li className="ml-5">
                                <PanelLeftClose
                                    size={24}
                                    className="text-gray-200 cursor-pointer hover:text-white"
                                    onClick={changeSidebar}
                                />
                            </li>
                        )}

                        {isChatting && isAuthorized && (
                            <li className="ml-5">
                                <Star size={24} className="text-gray-200 cursor-pointer hover:text-white" />
                            </li>
                        )}
                    </ul>

                    <ul className="flex list-none m-0 p-0 ml-auto items-center">
                        <li className={`mr-5 ml-5 ${inputText.length > 0 ? 'input-focused' : ''}`}>
                            <InputForm onChange={handleInputChange} />
                        </li>

                        {isAuthorized ? (
                            <>
                                {isChatting && (
                                    <li className="mr-3">
                                        <History size={24} className="text-gray-200 cursor-pointer hover:text-white" />
                                    </li>
                                )}
                                <li className="mr-3">
                                    <Bell size={24} className="text-gray-200 cursor-pointer hover:text-white" />
                                </li>
                                <li>
                                    <Link href="/">
                                        <CircleUser size={24} className="text-gray-200 cursor-pointer hover:text-white" />
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="mr-3">
                                    <button className="bg-white rounded-lg px-3 py-1 text-[#3d3d3d] transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-tr hover:from-white hover:via-[#F3F4FC] hover:to-[#E1E2FB] w-auto whitespace-nowrap">
                                        Sign up
                                    </button>
                                </li>
                                <li>
                                    <button className="bg-[#B7B9F7] rounded-lg px-3 py-1 text-[#2E2D2D] transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-tr hover:from-[#9D9FEF] hover:via-[#A4A5FF] hover:to-[#8E90F4] w-auto whitespace-nowrap">
                                        Sign in
                                    </button>
                                </li>
                            </>
                        )}
                    </ul>

                    <style jsx>{`
                        .input-focused {
                            transform: scale(1.05);
                            transition: transform 0.3s ease-in-out;
                        }

                        /* Эффект hover для иконок */
                        .text-white:hover {
                            fill: #ccc; /* Замените цвет fill на свой */
                        }
                    `}</style>
                </div>
            )}
        </>
    );
};

export default DefaultHeader;
