'use client'

import InputForm from '@/components/ui/Input/InputForm'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import useAuthStore from '@/lib/stores/authStore';
import usePathStore from '@/lib/stores/pathStore';
import useSidebar from '@/lib/stores/sidebarStore'

import {
    Search,
    Bell,
    PanelLeftOpen,
    PanelLeftClose,
    CircleUser,
    Star,
    History,
} from 'lucide-react'
import React, { useLayoutEffect, useState } from 'react'

const SimpleHeader = () => {
    const { isAuthorized, login, logout } = useAuthStore((state) => state);
    const { updatePathState, isAuthorizing, isChatting } = usePathStore((state) => state);
    const { isSideBarOpened, toggleSidebar } = useSidebar((state) => state);

    const [inputText, setInputText] = useState('')
    const [isIconsLoaded, setIsIconsLoaded] = useState(false);

    const { theme, questionId } = useParams();
    const iconSize = 25;

    useLayoutEffect(() => {
        if (typeof window !== 'undefined') {
            const currentPath = window.location.pathname
            updatePathState(currentPath);
            setIsIconsLoaded(true);
        }
    }, [])

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value)
    }

    return (
        <header className="sticky top-0 left-0 flex justify-between items-center p-4 bg-mainBlack text-white border-b-[1px] border-[#323232] px-10 py-2.5">
            <div className={`"flex items-center w-1/5 transition-all duration-300 ${isSideBarOpened ? 'ml-[10%]' : 'ml-0'}`} >
                <ul
                    className={`flex list-none m-0 p-0 mr-auto items-center transition-all duration-300 ${
                        isSideBarOpened ? 'ml-[10%]' : 'ml-0'
                    }`}
                >

                        <li>
                            <button className="icon-container block" onClick={toggleSidebar}>
                                {isSideBarOpened ? (
                                    <>
                                        <PanelLeftClose
                                            size={iconSize}
                                            className="text-gray-200 cursor-pointer hover:text-white"
                                        />
                                        <div className="icon-hover"></div>
                                    </>
                                ) : (
                                    <>
                                        <PanelLeftOpen
                                            size={iconSize}
                                            className="text-gray-200 cursor-pointer hover:text-white"
                                        />
                                        <div className="icon-hover"></div>
                                    </>
                                )}
                            </button>
                        </li>

                    {isChatting && (
                        <>
                        <li className="ml-5">
                                <button className="icon-container block">
                                    <Star
                                        size={iconSize}
                                        className="text-gray-200 cursor-pointer hover:text-white"
                                    />
                                    <div className="icon-hover"></div>
                                </button>
                            </li>
                            <li className="ml-5 hidden md:block">
                                <span
                                    className="cursor-pointer mr-4 text-transform: capitalize opacity-70">{theme}</span>
                                <span className="opacity-70">/</span>
                                <span className="cursor-pointer ml-4 text-transform: capitalize">{questionId}</span>
                            </li>

                        </>
                    )}
                </ul>
            </div>

            <div className="flex items-center w-1/3 hidden sm:block">
                <InputForm onChange={handleInputChange} />
            </div>
            <div className="flex items-center justify-end w-1/5">
                <ul className="flex list-none m-0 p-0 ml-auto items-center">
                    <li className="mr-5">
                        <button className="icon-container block sm:hidden">
                            <Search
                                size={iconSize}
                                className="text-gray-200 cursor-pointer hover:text-white"
                            />
                            <div className="icon-hover"></div>
                        </button>
                    </li>
                    {isAuthorized ? (
                        <>

                            {isChatting && (
                                <li className="mr-0 sm:mr-5">
                                    <button className="icon-container hidden sm:block">
                                        <History
                                            size={iconSize}
                                            className="text-gray-200 cursor-pointer hover:text-white"
                                        />
                                        <div className="icon-hover"></div>
                                    </button>
                                </li>
                            )}

                            <li className="mr-5">
                                <button className="icon-container block">
                                    <Bell
                                        size={iconSize}
                                        className="text-gray-200 cursor-pointer hover:text-white"
                                    />
                                    <div className="icon-hover"></div>
                                </button>
                            </li>
                            <li>
                                <button className="icon-container block">
                                    <Link href="/">
                                        <CircleUser
                                            size={iconSize}
                                            className="text-gray-200 cursor-pointer hover:text-white"
                                        />
                                    </Link>
                                    <div className="icon-hover"></div>

                                </button>
                            </li>

                        </>
                    ) : (
                        <>
                            <li className="mr-4 hidden md:block">
                                <button
                                    onClick={login}
                                    className="bg-[#3d3d3d] rounded-lg px-3 py-1 text-gray-300 transition-all duration-200 transform hover:scale-105 hover:bg-gradient-to-tr hover:text-indigo-50  hover:rounded-md hover:from-[#3d3d3d] hover:via-[#3d3d3d] hover:to-[#363636] whitespace-nowrap">
                                    Sign in
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={login}
                                    className="bg-[#B7B9F7] rounded-lg px-3 py-1 text-[#2E2D2D] transition-all duration-200 transform hover:scale-105 hover:bg-gradient-to-tr hover:text-indigo-50  hover:rounded-md hover:from-[#9D9FEF] hover:via-[#A4A5FF] hover:to-[#8E90F4]  whitespace-nowrap">
                                    Sign up
                                </button>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </header>
    );
}

export default SimpleHeader;
