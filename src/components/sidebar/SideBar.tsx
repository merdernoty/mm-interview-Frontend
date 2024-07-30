'use client'
import React from 'react'
import useSidebar from '@/lib/stores/sidebarStore'
import { Book, GraduationCap, MessageSquareText, Dot } from 'lucide-react'
import Link from 'next/link'
const SideBar = () => {
    const { isSideBarOpened, toggleSidebar } = useSidebar() // eslint-disable-line @typescript-eslint/no-unused-vars
    const iconSize = 22
    return (
        <aside
            className={`h-screen border-r shadow-sm border-[#323232] z-40 fixed top-0 left-0 w-[250px] transition-all duration-300 ${isSideBarOpened ? 'translate-x-0' : '-translate-x-full'}`}
        >
            <nav className="h-full sticky flex flex-col bg-mainBlack">
                <div className="p-2 flex items-center justify-center px-4">
                    <button>
                        <Link href="/">
                            <div className="flex items-center">
                                <img
                                    src={
                                        'https://i.pinimg.com/564x/4b/4a/4c/4b4a4c78ccae2a9de6d54d1922e53083.jpg'
                                    }
                                />
                            </div>
                        </Link>
                    </button>
                    <div className="ml-2 text-white">
                        <Link href="/">question bank</Link>
                    </div>
                </div>
                <div className="mt-4 px-5">
                    <ul className="space-y-4 text-gray-300">
                        <li className="flex items-center justify-between px-2">
                            <div className="flex items-center cursor-pointer hover:text-white">
                                <Book size={iconSize} className="mr-2" />
                                <span>Difficulty</span>
                            </div>
                        </li>
                        <li className="flex items-center justify-between px-2 ">
                            <div className="flex items-center  cursor-pointer hover:text-white">
                                <GraduationCap
                                    size={iconSize}
                                    className="mr-2"
                                />
                                <span>Answer</span>
                            </div>
                        </li>
                        <li className="flex items-center justify-between px-2 ">
                            <div className="flex items-center  cursor-pointer hover:text-white">
                                <MessageSquareText
                                    size={iconSize}
                                    className="mr-2"
                                />
                                <span>Comments</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="flex-1 flex flex-col">
                    <h1 className="text-gray-400 text-center mt-4">
                        Questions
                    </h1>
                    <ul className="p-2 pb-4 text-gray-300 text-sm">
                        <li className="flex items-center justify-between p-2 pb-4">
                            <div className="flex items-center hover:text-white">
                                <Dot className="mr-2" />
                                <span className="cursor-pointer ">
                                    First question
                                </span>
                            </div>
                        </li>
                        <li className="flex items-center justify-between p-2 pb-4">
                            <div className="flex items-center hover:text-white">
                                <Dot className="mr-2" />
                                <span className="cursor-pointer ">
                                    Second looong question
                                </span>
                            </div>
                        </li>
                        <li className="flex items-center justify-between p-2 pb-4">
                            <div className="flex items-center hover:text-white">
                                <Dot className="mr-2" />
                                <span className="cursor-pointer ">
                                    Third looong question
                                </span>
                            </div>
                        </li>
                        <li className="flex items-center justify-between p-2 pb-4">
                            <div className="flex items-center hover:text-white">
                                <Dot className="mr-2" />
                                <span className="cursor-pointer ">
                                    Fourth veryyyyy looong question
                                </span>
                            </div>
                        </li>
                        <li className="flex items-center justify-between p-2 pb-4">
                            <div className="flex items-center  hover:text-white">
                                <Dot className="mr-2" />
                                <span className="cursor-pointer">
                                    Fifth looong question
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </aside>
    )
}

export default SideBar
