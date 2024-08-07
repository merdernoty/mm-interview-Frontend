import React from 'react'
import { Cat, Github, Medal, Trophy } from 'lucide-react'
import Image from 'next/image'


interface ProfileLeftBentoProps {
    username: string;
    email: string;
}

const ProfileLeftBento: React.FC<ProfileLeftBentoProps> = ({ username, email }) => {
    return (
        <div className="flex-shrink-0">
            <div className="w-[300px] h-[800px] rounded-md bg-[#1e1e22]">
                <div className="w-full h-[30%] flex flex-col pt-5 ">
                    <div className="flex justify-center">
                        <div className="w-[90%] h-[120px] flex justify-between">
                            <div className="w-[120px] h-full bg-[#c6c7f8] rounded-md">
                                <Image
                                    src="/avatarka.jpeg"
                                    alt="avatar"
                                    width={120}
                                    height={120}
                                    className="w-full h-full object-cover rounded-md"
                                />
                            </div>

                            <div className="w-[60%] h-[145px] flex flex-col justify-between text-white pl-5">
                                <div className="pt-2">
                                    <p>{username}</p>
                                    <p className="text-[#bbbbbc]">
                                        {email}
                                    </p>
                                </div>
                                <p className="mb-5 text-[#bbbbbc]">Rank: 52</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex  flex-col items-center">
                        <button
                            className="w-[90%] h-[32px] rounded-md mt-5 flex justify-center bg-[#35684b] items-center text-gray-100
               transform transition-transform duration-200 hover:bg-[#2d5a40]  hover:scale-[1.05]"
                        >
                            Edit profile
                        </button>

                        <div className=" w-[90%] items-center max-w-md h-[40px] flex gap-3 ">
                            <div className="flex ">
                                <Github className="size-6 text-[#6B6C7A]" />
                                <p className="text-[#6B6C7A]">{username}</p>
                            </div>
                        </div>
                    </div>
                    <hr className="border-t border-[#363639] mx-auto w-[98%]" />
                </div>

                <div className="w-full pt-1 pb-6 bg-[#1e1e22]">
                    <p className="ml-5">Community Stats</p>
                    <div className="h-full flex w-full">
                        <div className=" flex flex-col ml-5 mt-2 gap-3 ">
                            <p className="text-left text-grayViolet">
                                Favourite theme{' '}
                                <span className="text-[#CBBCF3]"> Spring</span>
                            </p>
                            <p className="text-left text-grayViolet">
                                Reputation{' '}
                                <span className="text-[#CBBCF3]"> 400</span>
                            </p>
                            <p className="text-left text-grayViolet">
                                Solutions{' '}
                                <span className="text-[#CBBCF3]"> 12</span>
                            </p>
                        </div>
                    </div>
                    <hr className="border-t border-[#363639] mt-1 mx-auto w-[98%]" />
                </div>

                <div className="w-full h-1/3 bg-[#1e1e22]">
                    <p className="ml-5 text-white">Achievements</p>
                    <div className="w-full  flex flex-wrap p-5 gap-x-4 gap-y-2">
                        <Cat className="size-1/5 text-white" />
                        <Trophy className="size-1/5 text-white" />
                        <Cat className="size-1/5 text-white" />
                        <Trophy className="size-1/5 text-white" />
                        <Medal className="size-1/5 text-white" />
                        <Cat className="size-1/5 text-white" />
                        <Medal className="size-1/5 text-white" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileLeftBento
