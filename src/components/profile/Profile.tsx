import React, {useEffect, useState} from 'react'
import useUser from '@/lib/stores/userStore';
import { useParams } from 'next/navigation'
import {Book, Cat, ChevronRight, Github, Lightbulb, ListEnd, Medal, Star, Trophy, Zap} from 'lucide-react'



const Profile = () => {

    const { data, fetchUserDataByToken,fetchUserDataByUsername } = useUser();


    const { username } = useParams<{ username: string }>();


    useEffect(() => {
        const currentPath = window.location.pathname;
        if (currentPath.startsWith('/user')) {
            fetchUserDataByUsername(username);
        }
        else if (currentPath.startsWith('/me')) {
            fetchUserDataByToken()
        }
    }, []);

    const getUserToken = () => {
        let token = '';

        if (typeof window !== 'undefined') {
            const tokenString = localStorage.getItem('token');
            if (tokenString) {
                try {
                    const tokenObject = JSON.parse(tokenString);
                    token = tokenObject?.state?.token || '';
                } catch (error) {
                    console.error('Ошибка при разборе токена из localStorage:', error);
                }
            }
        }

        return token;
    };

    return (
        <>
            {data ? (<>
                <div className="w-full flex gap-5 mt-5 mb-10">
                    <div className="flex-shrink-0">
                        <div className="w-[300px] h-[800px] rounded-md bg-[#1e1e22]">
                            <div className="w-full h-[30%] flex flex-col pt-5 ">
                                <div className="flex justify-center">
                                    <div className="w-[90%] h-[120px] flex justify-between">
                                        <div className="w-[120px] h-full bg-[#c6c7f8] rounded-md">
                                            <img
                                                src="data:image/jpeg;base64,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"
                                                alt="avatar" className="w-full h-full rounded-md"/>
                                        </div>

                                        <div
                                            className="w-[60%] h-[145px] flex flex-col justify-between text-white pl-5">
                                            <div className="pt-2">
                                                <p>Sakura</p>
                                                <p className="text-[#bbbbbc]">yakovenko</p>
                                            </div>
                                            <p className="mb-5 text-[#bbbbbc]">Rank: 52</p>
                                        </div>
                                    </div>
                                </div>


                                <div className="flex  flex-col items-center">
                                    <button
                                        className="w-[90%] h-[32px] rounded-md mt-5 flex justify-center bg-[#35684b] items-center text-gray-100
               transform transition-transform duration-200 hover:bg-[#2d5a40]  hover:scale-[1.05]">
                                        Edit profile
                                    </button>


                                    <div className=" w-[90%] items-center max-w-md h-[40px] flex gap-3 ">


                                        <div className="flex ">
                                            <Github className="size-6 text-[#6B6C7A]"/>
                                            <p className="text-[#6B6C7A]">montle</p>
                                        </div>
                                    </div>
                                </div>
                                <hr className="border-t border-[#363639] mx-auto w-[98%]"/>
                            </div>


                            <div className="w-full pt-1 pb-6 bg-[#1e1e22]">

                                <p className="ml-5">Community Stats</p>
                                <div className="h-full flex w-full">
                                    <div
                                        className=" flex flex-col ml-5 mt-2 gap-3 ">
                                        <p className="text-left text-grayViolet">Favourite theme <span
                                            className="text-[#CBBCF3]"> Spring</span></p>
                                        <p className="text-left text-grayViolet">Reputation <span
                                            className="text-[#CBBCF3]"> 400</span></p>
                                        <p className="text-left text-grayViolet">Solutions <span
                                            className="text-[#CBBCF3]"> 12</span></p>

                                    </div>
                                </div>
                                <hr className="border-t border-[#363639] mt-1 mx-auto w-[98%]"/>
                            </div>

                            <div className="w-full h-1/3 bg-[#1e1e22]">

                                <p className="ml-5 text-white">Achievements</p>
                                <div className="w-full  flex flex-wrap p-5 gap-x-4 gap-y-2">
                                    <Cat className="size-1/5 text-white"/>
                                    <Trophy className="size-1/5 text-white"/>
                                    <Cat className="size-1/5 text-white"/>

                                    <Trophy className="size-1/5 text-white"/>
                                    <Medal className="size-1/5 text-white"/>
                                    <Cat className="size-1/5 text-white"/>


                                    <Medal className="size-1/5 text-white"/>
                                </div>

                            </div>

                        </div>


                    </div>

                    <div className="flex-1 flex flex-col  gap-5">


                        <div className="flex-1 flex flex-col gap-5">
                            <div className="flex gap-5 flex-wrap lg:flex-nowrap">

                                <button
                                    className="h-[120px] w-full lg:w-1/3 bg-[#1e1e22] rounded-md transform transition-transform duration-200 hover:scale-105 active:scale-95 flex flex-col">
                                    <div className="flex h-1/6 gap-4 ml-5 mt-4 items-start">
                                        <Star className="text-[#c6c7f8] fill-current"/>
                                        <p className="text-[#D6C6F8] font-bold">favourite questions</p>
                                    </div>
                                    <div className="mt-4 ml-5">
                                        <p className="text-grayViolet text-left">What is HashMap</p>
                                        <p className="text-grayViolet text-left">Difference between ArrayList and...</p>
                                    </div>
                                    <div className="mt-4 ml-5"></div>
                                </button>

                                <button
                                    className="h-[120px] w-full lg:w-1/3 bg-[#1e1e22] rounded-md transform transition-transform duration-200 hover:scale-105 active:scale-95">
                                    <div className="flex h-1/6 gap-4 ml-5 mt-4">
                                        <ListEnd className="text-[#c6c7f8]"/>
                                        <p className="text-[#D6C6F8] font-bold">playlists</p>
                                    </div>
                                    <div className="mt-4 ml-5">
                                        <p className="text-[#868796] text-left">Java + Spring</p>
                                        <p className="text-[#868796] text-left">Frontend</p>
                                    </div>
                                    <div className="mt-4 ml-5"></div>
                                </button>


                                <div
                                    className="h-[120px] w-full lg:w-1/3 bg-[#1e1e22] rounded-md transform transition-transform duration-200 hover:scale-105">
                                    <div className="flex items-center justify-between h-1/6 gap-5 ml-5 mt-4 ">
                                        <Zap className=" text-[#c6c7f8] fill-current"/>
                                        <div className="w-5/6 h-1 rounded-md bg-[#D6C6F8] mr-12 lg:mr-5"/>
                                    </div>
                                    <div className="flex w-full h-2/3 items-end">
                                        <div className="flex w-full py-2 px-4">
                                            <div className="flex w-full justify-between items-center">
                                                <div className="flex gap-3 lg:flex-nowrap">
                                                    <p>Energy:</p>
                                                    <p className="font-bold text-[#d6c6f8]">Full</p>
                                                </div>
                                                <button className="bg-[#755FBF] px-4 py-1 rounded ">
                                                    <p className="text-[#B197EB] text-nowrap ">premium</p>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div
                            className="w-full h-[300px] bg-[#1e1e22] rounded-md transform transition-transform duration-200 hover:scale-[1.01]">
                            <div className="h-1/6 w-full flex items-center justify-end gap-8 pr-8 text-[#6B6C7A]">
                                <p>
                                    total active days: <span className="text-gray-300">120</span>
                                </p>
                                <p>
                                    max streak: <span className="text-gray-300">5</span>
                                </p>
                            </div>
                            <div className="w-full h-full pb-16 flex items-center px-6">
                                <div className="w-full h-[80%] border-2 border-[#363639] mb-12"></div>
                            </div>
                        </div>

                        <div className="w-full flex-1 bg-[#1e1e22] rounded-md ">
                            <div
                                className="w-full h-[50px] bg-[#1e1e22] flex items-center justify-between px-8 text-grayViolet rounded-md">
                                <p>Completed</p>

                                    <button className="flex transition-colors duration-200 hover:text-[#B197EB] hover:bg-[#1e1e22]">
                                        <p className="text-nowrap">View more</p>
                                        <ChevronRight className=" stroke-[1.5px]"/>
                                    </button>

                            </div>
                            <hr className="border-t border-[#363639] mb-2 mx-auto w-[98%]"/>
                            <div>
                                <ul className="m-0 p-4 flex flex-col items-center gap-2">
                                    <li className="w-full">
                                        <div
                                            className="relative flex items-center justify-between bg-[#2C2C30] rounded-md w-full h-[50px] px-4">
                                            <div className="flex items-center gap-3">
                                                <Star className="text-[#c6c7f8] fill-current"/>
                                                <p className="flex-grow">What is HashMap</p>
                                            </div>
                                            <div className="w-1/4 flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <Book className="size-5"/>
                                                    <p className="mr-4">Answer</p>
                                                </div>
                                                <p className="text-[#9c7eff] font-bold">Hard</p>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="w-full">
                                        <div
                                            className="relative flex items-center justify-between bg-[#2C2C30] rounded-md w-full h-[50px] px-4">
                                            <div className="flex items-center gap-3">
                                                <Star className="text-[#c6c7f8] fill-current"/>
                                                <p className="flex-grow">Difference between ArrayList and LinkedList</p>
                                            </div>
                                            <div className="w-1/4 flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <Book className="size-5"/>
                                                    <p className="mr-4">Answer</p>
                                                </div>
                                                <p className="text-[#CBBCF3] font-bold">Easy</p>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="w-full">
                                        <div
                                            className="relative flex items-center justify-between bg-[#2C2C30] rounded-md w-full h-[50px] px-4">
                                            <div className="flex items-center gap-3">
                                                <Star className="text-[#c6c7f8] fill-current"/>
                                                <p className="flex-grow">Difference between Locks and synchronized
                                                    block</p>
                                            </div>
                                            <div className="w-1/4 flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <Book className="size-5"/>
                                                    <p className="mr-4">Answer</p>
                                                </div>
                                                <p className="text-[#968CD9] font-bold">Medium</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="w-full">
                                        <div
                                            className="relative flex items-center justify-between bg-[#2C2C30] rounded-md w-full h-[50px] px-4">
                                            <div className="flex items-center gap-3">
                                                <Star className="text-[#c6c7f8] fill-current"/>
                                                <p className="flex-grow">Difference between HashMap and Hashtable</p>
                                            </div>
                                            <div className="w-1/4 flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <Book className="size-5"/>
                                                    <p className="mr-4">Answer</p>
                                                </div>
                                                <p className="text-[#9c7eff] font-bold">Hard</p>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="w-full">
                                        <div
                                            className="relative flex items-center justify-between bg-[#2C2C30] rounded-md w-full h-[50px] px-4">
                                            <div className="flex items-center gap-3">
                                                <Star className=""/>
                                                <p className="flex-grow">What is the Singleton Pattern?</p>
                                            </div>
                                            <div className="w-1/4 flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <Book className="size-5"/>
                                                    <p className="mr-4">Answer</p>
                                                </div>
                                                <p className="text-[#968CD9] font-bold">Medium</p>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="w-full">
                                        <div
                                            className="relative flex items-center justify-between bg-[#2C2C30] rounded-md w-full h-[50px] px-4">
                                            <div className="flex items-center gap-3">
                                                <Star className=""/>
                                                <p className="flex-grow">Explain the use of the `volatile` keyword in
                                                    Java</p>
                                            </div>
                                            <div className="w-1/4 flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <Book className="size-5"/>
                                                    <p className="mr-4">Answer</p>
                                                </div>
                                                <p className="text-[#968CD9] font-bold">Medium</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>

                            </div>
                        </div>

                    </div>

                </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </>

    );


};

export default Profile;
