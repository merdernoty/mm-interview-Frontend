'use client'
import React, { useEffect } from 'react'
import ActivityBento from '@/components/profile/activityBento'
import useUser from '@/lib/stores/userStore'
import { useParams } from 'next/navigation'

import ProfileLeftBento from './profileLeftBento'
import CompletedBento from './completedBento'
import FavouriteBento from './favouriteBento'
import PlaylistBento from './playlistBento'
import EnergyBento from './energyBento'

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
        <div className="w-full flex gap-5 mt-5 mb-10">
            <ProfileLeftBento />

            <div className="flex-1 flex flex-col gap-5 h-[120px]">
                <div className="flex-1 flex flex-col gap-5">
                    <div className="flex gap-5 flex-wrap lg:flex-nowrap">
                        <FavouriteBento data={data} />
                        <PlaylistBento data={data} />
                        <EnergyBento />
                    </div>
                </div>
                <ActivityBento />
                <CompletedBento data={data} />
            </div>
        </div>
    )
}

export default Profile
