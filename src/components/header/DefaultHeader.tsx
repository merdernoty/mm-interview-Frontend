'use client'
import React, { useState, useLayoutEffect } from 'react'
import InputForm from '@/components/ui/Input/InputForm'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { useAuthStore } from '@/lib/stores/authStore';
import { usePathStore } from '@/lib/stores/pathStore';
import {
    Bell,
    PanelLeftOpen,
    PanelLeftClose,
    CircleUser,
    Star,
    History,
} from 'lucide-react'


const DefaultHeader = () => {
    const { isAuthorized, login, logout } = useAuthStore((state) => state);
    const { updatePathState, isAuthorizing, isChatting,  } = usePathStore((state) => state);


    const [isSideBarOpened, setIsSideBarOpened] = useState(true)
    const [inputText, setInputText] = useState('')

    const [isIconsLoaded, setIsIconsLoaded] = useState(false );

    const {theme,questionId} = useParams();
    const iconSize:number = 25;

    useLayoutEffect(() => {

        if (typeof window !== 'undefined') {
            const currentPath = window.location.pathname
            updatePathState(currentPath);

            setIsIconsLoaded(true);
        }
    }, [])

    const addToFavorite = ()=>{

    }

    const changeSidebar = () => {
        setIsSideBarOpened(!isSideBarOpened)
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value)
    }

    return (
        <>
            {!isAuthorizing && (
                <div
                    className="sticky top-0 left-0 w-full flex justify-between items-center bg-mainBlack px-10 py-2.5 border-b-[1px] border-[#323232]">
                    <ul className="flex list-none m-0 p-0 mr-auto items-center">
                        {isSideBarOpened ? (
                            <li>
                                <button className="icon-container  ">
                                    <PanelLeftOpen
                                        size={iconSize}
                                        className="text-gray-200 cursor-pointer hover:text-white"
                                        onClick={changeSidebar}
                                    />
                                    <div className="icon-hover"></div>
                                </button>
                            </li>
                        ) : (
                            <li>
                                <button className="icon-container">
                                    <PanelLeftClose
                                        size={iconSize}
                                        className="text-gray-200 cursor-pointer hover:text-white"
                                        onClick={changeSidebar}
                                    />
                                    <div className="icon-hover"></div>
                                </button>
                            </li>
                        )}
                        {isChatting && (
                            <>
                                <li className="ml-5">
                                    <button className="icon-container">
                                        <Star
                                            size={iconSize}
                                            className="text-gray-200 cursor-pointer hover:text-white"
                                        />
                                        <div className="icon-hover"></div>
                                    </button>
                                </li>

                                <li className="ml-5">
                                    <span
                                        className=" cursor-pointer mr-4 text-transform: capitalize opacity-70">{theme}</span>
                                    <span className="opacity-70">/</span>
                                    <span
                                        className=" cursor-pointer ml-4 text-transform: capitalize">{questionId}</span>
                                </li>
                            </>

                        )}

                    </ul>
                    <li className={`absolute left-1/2 transform w-1/3 -translate-x-1/2 list-none ${inputText.length > 0 ? 'input-focused' : ''}`}>
                        <InputForm onChange={handleInputChange} />
                    </li>
                    {isIconsLoaded ? (

                        <ul className="flex list-none m-0 p-0 ml-auto items-center">
                        {isAuthorized ? (
                                <>
                                    {isChatting && (
                                        <li className="mr-5">
                                            <button className="icon-container">
                                                <History
                                                    size={iconSize}
                                                    className="text-gray-200 cursor-pointer hover:text-white"
                                                />
                                                <div className="icon-hover"></div>
                                            </button>
                                        </li>
                                    )}
                                    <li className="mr-5">
                                        <button className="icon-container">
                                            <Bell
                                                size={iconSize}
                                                className="text-gray-200 cursor-pointer hover:text-white"
                                            />
                                            <div className="icon-hover"></div>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="icon-container">
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
                                    <li className="mr-4">
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
                    ) : null}
                    <style jsx>{`
                        .input-focused {
                            transform: scale(1.05) translate(-50%, -1%);
                            transition: transform 0.3s ease-in-out;
                        }

                        .icon-container {
                            position: relative;
                            display:flex;
                            align-items: center;
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
            )}
        </>
    )
}

export default DefaultHeader
