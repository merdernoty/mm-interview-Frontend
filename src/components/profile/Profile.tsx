'use client'

import React, { useEffect } from 'react'
import { useParams } from 'next/navigation'
import ActivityBento from '@/components/profile/bento/activityBento'
import useUser from '@/lib/stores/userStore'
import ProfileLeftBento from './bento/profileLeftBento'
import CompletedBento from './bento/completedBento'
import FavouriteBento from './bento/favouriteBento'
import PlaylistBento from './bento/playlistBento'
import EnergyBento from './bento/energyBento'

const Profile: React.FC = () => {
    const { data, fetchUserDataByToken, fetchUserDataByUsername } = useUser()
    const params = useParams()
    const { username } = params

    useEffect(() => {
        const currentPath = window.location.pathname
        if (currentPath.startsWith('/user') && username[0]) {
            fetchUserDataByUsername(username[0])
        } else if (currentPath.startsWith('/me')) {
            fetchUserDataByToken()
        }
    }, [username, fetchUserDataByUsername, fetchUserDataByToken])

    return (
        <div className="w-full flex gap-5 mt-5 mb-10">
            <ProfileLeftBento
                username={data?.username || ''}
                email={data?.email || ''}
            />

            <div className="flex-1 flex flex-col gap-5 h-[120px]">
                <div className="flex-1 flex flex-col gap-5">
                    <div className="flex gap-5 flex-wrap lg:flex-nowrap">
                        <FavouriteBento
                            favourite={data?.info?.favoriteQuestions || []}
                        />
                        <PlaylistBento
                            playlists={data?.info?.favoriteQuestions || []}
                        />
                        <EnergyBento />
                    </div>
                </div>
                <ActivityBento />
                <CompletedBento
                    questions={data?.info?.favoriteQuestions || []}
                />
            </div>
        </div>
    )
}

export default Profile
