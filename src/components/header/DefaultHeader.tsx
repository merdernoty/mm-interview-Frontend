'use client'
import React, { useState, useLayoutEffect } from 'react';
import Link from 'next/link';
import InputForm from '@/components/UI/Input/InputForm';
import { Bell, PanelLeftOpen, PanelLeftClose, CircleUser, Star, History } from 'lucide-react';

const DefaultHeader = () => {
    const [isAuthorized, setIsAuthorized] = useState(true);
    const [isAuthorizing, setIsAuthorizing] = useState(false);
    const [isChatting, setIsChatting] = useState(false);
    const [isSideBarOpened, setIsSideBarOpened] = useState(true);
    const [inputText, setInputText] = useState('');
    const [isIconsLoaded, setIsIconsLoaded] = useState(false);
    const iconSize = 22;

    useLayoutEffect(() => {

        if (typeof window !== 'undefined') {
            const currentPath = window.location.pathname;
            setIsChatting(currentPath.startsWith('/Chat'));
            setIsAuthorizing(currentPath.startsWith('/auth'));
            setIsIconsLoaded(true);
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
            {isIconsLoaded ? (
                !isAuthorizing && (
                    <div
                        className="fixed top-0 left-0 w-full flex justify-between items-center bg-mainBlack  h-12 border-b-2 border-[#323232]">
                        <ul className="flex list-none m-0 p-0 mr-auto">
                            {isSideBarOpened ? (
                                <li className="ml-5">
                                    <div className="icon-container">
                                        <PanelLeftOpen
                                            size={iconSize}
                                            className="text-gray-200 cursor-pointer hover:text-white"
                                            onClick={changeSidebar}
                                        />
                                        <div className="icon-hover"></div>
                                    </div>
                                </li>
                            ) : (
                                <li className="ml-5">
                                    <div className="icon-container">
                                        <PanelLeftClose
                                            size={iconSize}
                                            className="text-gray-200 cursor-pointer hover:text-white"
                                            onClick={changeSidebar}
                                        />
                                        <div className="icon-hover"></div>
                                    </div>
                                </li>
                            )}

                            {isChatting && isAuthorized && (
                                <li className="ml-5">
                                    <div className="icon-container">
                                        <Star
                                            size={iconSize}
                                            className="text-gray-200 cursor-pointer hover:text-white"
                                        />
                                        <div className="icon-hover"></div>
                                    </div>
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
                                            <div className="icon-container">
                                                <History
                                                    size={iconSize}
                                                    className="text-gray-200 cursor-pointer hover:text-white"
                                                />
                                                <div className="icon-hover"></div>
                                            </div>
                                        </li>
                                    )}
                                    <li className="mr-3">
                                        <div className="icon-container">
                                            <Bell
                                                size={iconSize}
                                                className="text-gray-200 cursor-pointer hover:text-white"
                                            />
                                            <div className="icon-hover"></div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon-container">
                                            <Link href="/">
                                                <CircleUser
                                                    size={iconSize}
                                                    className="text-gray-200 cursor-pointer hover:text-white"
                                                />
                                            </Link>
                                            <div className="icon-hover"></div>
                                        </div>
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
                                transform: scale(1.05);
                                transition: transform 0.3s ease-in-out;
                            }


                            .icon-container {
                                position: relative;
                                display: inline-block;
                                margin-left: 8px;
                                margin-top: 5px;
                            }

                            .icon-hover {
                                position: absolute;
                                top: -7px;
                                left: -7px;
                                width: 38px;
                                height: 38px;
                                background-color: #ccc;
                                border-radius: 8px;
                                opacity: 0;
                                transition: opacity 0.1s ease-in-out;
                                pointer-events: none;
                            }

                            .icon-container:hover .icon-hover {
                                opacity: 0.2;
                            }
                        `}</style>
                    </div>
                )
                ) :
                <div className="fixed top-0 left-0 w-full flex justify-between items-center bg-mainBlack  h-12 border-b-2 border-[#323232]">

                </div>}
        </>
    );
};

export default DefaultHeader;
