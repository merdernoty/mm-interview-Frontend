'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import InputForm from '@/components/UI/Input/InputForm';
import { Bell, PanelRightOpen, CircleUser, Star, History } from 'lucide-react'

const DefaultHeader = () => {
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [isChatting, setIsChatting] = useState(true);
    const [inputText, setInputText] = useState('');

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

                {isChatting && isAuthorized ?
                    <li className="ml-5">
                    <Link href="/">
                       <Star size={24} className="text-white" />
                 </Link>
                </li>: null}
            </ul>
            <ul className="flex list-none m-0 p-0 ml-auto items-center">

                <li className={`mr-5 ml-5 ${inputText.length > 0 ? 'input-focused' : ''}`}>
                <InputForm onChange={handleInputChange} />
                </li>

                {isAuthorized ? (
                    <>
                        {isChatting ?
                            <li className="mr-3">
                                <Link href="/">
                                    <History size={24} className="text-white" />
                                </Link>
                            </li>:null}
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
                    </>
                ) : (
                    <>
                        <li className="mr-3">
                            <button
                                className="bg-white rounded-lg px-3 py-1 text-[#3d3d3d] transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-tr hover:from-white hover:via-[#F3F4FC] hover:to-[#E1E2FB] w-auto whitespace-nowrap">
                                Sign up
                            </button>
                        </li>
                        <li>
                            <button
                                className="bg-[#B7B9F7] rounded-lg px-3 py-1 text-[#2E2D2D] transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-tr hover:from-[#9D9FEF] hover:via-[#A4A5FF] hover:to-[#8E90F4] w-auto whitespace-nowrap">
                                Sign in
                            </button>
                        </li>
                    </>
                )}
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

export default DefaultHeader;
