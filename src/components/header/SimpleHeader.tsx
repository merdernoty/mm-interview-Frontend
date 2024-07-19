'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import {
    Search,
    Bell,
    PanelLeftOpen,
    PanelLeftClose,
    CircleUser,
    Star,
    History,
} from 'lucide-react'
import InputForm from '@/components/ui/Input/InputForm'
import { useParams } from 'next/navigation'
import useAuthStore from '@/lib/stores/authStore'
import usePathStore from '@/lib/stores/pathStore'
import useSidebar from '@/lib/stores/sidebarStore'

const SimpleHeader = () => {
    const { isAuthorized, login, logout, updateAuth } = useAuthStore(
        (state) => state,
    )
    const { updatePathState, isAuthorizing, isChatting } = usePathStore(
        (state) => state,
    )
    const { isSideBarOpened, toggleSidebar } = useSidebar((state) => state)

    const [inputText, setInputText] = useState('')
    const [showInput, setShowInput] = useState(false)

    const { theme, subtheme } = useParams()
    const iconSize = 25

    useEffect(() => {
        if (!isAuthorized) {
            updateAuth()
        } else {
            logout()
        }
    }, [updateAuth, logout])

    const toggleInput = () => {
        setShowInput(!showInput)
    }

    const handleInputChange = (event: any) => {
        setInputText(event.target.value)
    }

    return (
        <>
            {!isAuthorizing && (
                <header className="sticky z-[100] top-0 left-0 flex justify-between items-center p-4 bg-mainBlack text-white border-b-[1px] border-[#323232] px-9 py-2.5">
                    <div
                        className={`flex items-center w-1/5 transition-all duration-300 ${isSideBarOpened ? 'ml-[250px]' : 'ml-0'}`}
                    >
                        <ul className="flex list-none m-0 p-0 mr-auto items-center transition-all duration-300">
                            <li className="ml-5 relative">
                                <button
                                    className="icon-container block p-1"
                                    onClick={toggleSidebar}
                                >
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
                                    <div className="h-full absolute inset-0 bg-gray-300 opacity-0 hover:opacity-10 transition-opacity duration-200 rounded-md"></div>
                                </button>
                            </li>

                            {isChatting && (
                                <>
                                    <li className="ml-5 relative">
                                        <button className="block relative p-1">
                                            <Star
                                                size={iconSize}
                                                className="text-gray-200 cursor-pointer hover:text-white "
                                            />
                                            <div className="h-full absolute inset-0 bg-gray-300 opacity-0 hover:opacity-10 transition-opacity duration-200 rounded-md"></div>
                                        </button>
                                    </li>

                                    <li className="ml-5 hidden md:block">
                                        <span className="cursor-pointer mr-4 text-transform: capitalize opacity-70">
                                            {theme}
                                        </span>
                                        <span className="opacity-70">/</span>
                                        <span className="cursor-pointer ml-4 text-transform: capitalize">
                                            {subtheme}
                                        </span>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>

                    <div
                        className={`items-center w-1/3 sm:block h-8 transition-transform duration-200 hover:scale-105 ${showInput ? '' : 'hidden'}`}
                    >
                        <InputForm onChange={handleInputChange} />
                    </div>

                    <div className="flex items-center justify-end w-1/5">
                        <ul className="flex list-none m-0 p-0 ml-auto items-center">
                            <li className="mr-4 sm:mr-0">
                                <button
                                    onClick={toggleInput}
                                    className="icon-container block sm:hidden relative p-1"
                                >
                                    <Search
                                        size={iconSize}
                                        className="text-gray-200 cursor-pointer block sm:hidden hover:text-white"
                                    />
                                    <div className="h-full absolute inset-0 bg-gray-300 opacity-0 hover:opacity-10 transition-opacity duration-200 rounded-md"></div>
                                </button>
                            </li>
                            {isAuthorized ? (
                                <>
                                    {isChatting && (
                                        <li className="mr-0 sm:mr-4">
                                            <button className="icon-container hidden sm:block relative p-1">
                                                <History
                                                    size={iconSize}
                                                    className="text-gray-200 cursor-pointer sm:block hidden hover:text-white"
                                                />
                                                <div className="h-full absolute inset-0 bg-gray-300 opacity-0 hover:opacity-10 transition-opacity duration-200 rounded-md"></div>
                                            </button>
                                        </li>
                                    )}
                                    <li className="mr-4">
                                        <button className="icon-container block relative p-1">
                                            <Bell
                                                size={iconSize}
                                                className="text-gray-200 cursor-pointer hover:text-white"
                                            />
                                            <div className="h-full absolute inset-0 bg-gray-300 opacity-0 hover:opacity-10 transition-opacity duration-200 rounded-md"></div>
                                        </button>
                                    </li>

                                    <li>
                                        <Link href="/me">
                                        <button className="icon-container block relative p-1">
                                                <CircleUser
                                                    size={iconSize}
                                                    className="text-gray-200 cursor-pointer hover:text-white"
                                                />
                                            <div
                                                className="h-full absolute inset-0 bg-gray-300 opacity-0 hover:opacity-10 transition-opacity duration-200 rounded-md"></div>
                                        </button>
                                        </Link>
                                    </li>
                                </>
                            ) : (
                                <>
                                <li className="mr-4 hidden md:block">
                                        <Link href="/auth/login">
                                            <button className="bg-[#3d3d3d] rounded-lg px-3 py-1 text-gray-300 transition-all duration-200 transform hover:scale-105 hover:bg-gradient-to-tr hover:text-indigo-50 hover:rounded-md hover:from-[#3d3d3d] hover:via-[#3d3d3d] hover:to-[#363636] whitespace-nowrap">
                                                Sign in
                                            </button>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/auth/reg">
                                            <button className="bg-[#B7B9F7] rounded-lg px-3 py-1 text-[#2E2D2D] transition-all duration-200 transform hover:scale-105 hover:bg-gradient-to-tr hover:text-indigo-50 hover:rounded-md hover:from-[#9D9FEF] hover:via-[#A4A5FF] hover:to-[#8E90F4] whitespace-nowrap">
                                                Sign up
                                            </button>
                                        </Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </header>
            )}
        </>
    )
}

export default SimpleHeader
