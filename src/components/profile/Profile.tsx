'use client'
import React, { useEffect, useState } from 'react'
import ActivityBento from '@/components/profile/activityBento'
import useUser from '@/lib/stores/userStore'
import { useParams } from 'next/navigation'
import {
    Book,
    ChevronRight,
    ListEnd,
    Zap,
} from 'lucide-react'
import ProfileLeftBento from './profileLeftBento'
import CompletedBento from './completedBento'
import FavouriteBento from './favouriteBento'

const Profile = () => {
    const { data, fetchUserDataByToken, fetchUserDataByUsername } = useUser()
    const { username } = useParams<{ username: string }>()

    useEffect(() => {
        const currentPath = window.location.pathname
        if (currentPath.startsWith('/user') && username) {
            fetchUserDataByUsername(username)
        } else if (currentPath.startsWith('/me')) {
            fetchUserDataByToken()
        }
    }, [username, fetchUserDataByUsername, fetchUserDataByToken])

    return (
        <>
            {!data ? (
                <>
                    <div className="w-full flex gap-5 mt-5 mb-10">
                        <ProfileLeftBento />

                        <div className="flex-1 flex flex-col gap-5 h-[120px]">
                            <div className="flex-1 flex flex-col gap-5 ">
                                <div className="flex gap-5 flex-wrap lg:flex-nowrap">
                                    <FavouriteBento data ={data}/>
                                    <button className="h-[120px] w-full lg:w-1/3 bg-[#1e1e22] rounded-md transform transition-transform duration-200 hover:scale-105 active:scale-95 flex flex-col">
                                        <div className="flex h-1/6 gap-4 ml-5 mt-4 items-start">
                                            <ListEnd className="text-[#c6c7f8] " />
                                            <p className="text-[#D6C6F8] font-bold">
                                                playlists
                                            </p>
                                        </div>

                                        <div className="mt-4 ml-5">
                                            {data &&
                                            data.info &&
                                            data.info.favoriteQuestions &&
                                            data.info.favoriteQuestions.length >
                                                0 ? (
                                                <>
                                                    {data.info
                                                        .favoriteQuestions[0] && (
                                                        <p className="text-grayViolet text-left truncate max-w-[200px]">
                                                            {
                                                                data.info
                                                                    .favoriteQuestions[0]
                                                                    .question
                                                            }
                                                        </p>
                                                    )}
                                                    {data.info
                                                        .favoriteQuestions[1] && (
                                                        <p className="text-grayViolet text-left truncate max-w-[150px]">
                                                            {
                                                                data.info
                                                                    .favoriteQuestions[1]
                                                                    .question
                                                            }
                                                        </p>
                                                    )}
                                                </>
                                            ) : (
                                                <p className="text-grayViolet text-left">
                                                    Empty
                                                </p>
                                            )}
                                        </div>
                                        <div className="mt-4 ml-5"></div>
                                    </button>

                                    <div className="h-[120px] w-full lg:w-1/3 bg-[#1e1e22] rounded-md transform transition-transform duration-200 hover:scale-105">
                                        <div className="flex items-center justify-between h-1/6 gap-5 ml-5 mt-4 ">
                                            <Zap className=" text-[#c6c7f8] fill-current" />
                                            <div className="w-5/6 h-1 rounded-md bg-[#D6C6F8] mr-12 lg:mr-5" />
                                        </div>
                                        <div className="flex w-full h-2/3 items-end">
                                            <div className="flex w-full py-2 px-4">
                                                <div className="flex w-full justify-between items-center">
                                                    <div className="flex gap-3 lg:flex-nowrap">
                                                        <p>Energy:</p>
                                                        <p className="font-bold text-[#d6c6f8]">
                                                            Full
                                                        </p>
                                                    </div>
                                                    <button className="bg-[#755FBF] px-4 py-1 rounded ">
                                                        <p className="text-[#B197EB] text-nowrap ">
                                                            premium
                                                        </p>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <ActivityBento/>
                            <CompletedBento data={data} />
                        </div>
                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </>
    )
}

export default Profile
