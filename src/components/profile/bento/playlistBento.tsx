import React from 'react'
import { ListEnd } from 'lucide-react'
import { Question } from '@/lib/stores/userStore'

interface PlaylistBentoProps {
    playlists: Question[]
}
const PlaylistBento: React.FC<PlaylistBentoProps> = ({ playlists }) => {
    return (
        <button className="h-[120px] w-full lg:w-1/3 bg-[#1e1e22] rounded-md transform transition-transform duration-200 hover:scale-105 active:scale-95 flex flex-col">
            <div className="flex h-1/6 gap-4 ml-5 mt-4 items-start">
                <ListEnd className="text-[#c6c7f8]" />
                <p className="text-[#D6C6F8] font-bold">playlists</p>
            </div>

            <div className="mt-4 ml-5">
                {playlists.length > 0 ? (
                    <>
                        {playlists[0] && (
                            <p className="text-grayViolet text-left truncate max-w-[200px]">
                                {playlists[0].question}
                            </p>
                        )}
                        {playlists[1] && (
                            <p className="text-grayViolet text-left truncate max-w-[150px]">
                                {playlists[1].question}
                            </p>
                        )}
                    </>
                ) : (
                    <p className="text-grayViolet text-left">Empty</p>
                )}
            </div>
            <div className="mt-4 ml-5"></div>
        </button>
    )
}

export default PlaylistBento
