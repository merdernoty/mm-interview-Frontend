'use client'
import React, {useEffect, useState} from 'react'
import useUserData from '@/lib/stores/userDataStore';
import { useParams } from 'next/navigation'


const Profile = () => {

    const { data, fetchUserDataByToken } = useUserData();

    const [token, setToken] = useState<string>("");
    const { username } = useParams<{ username: string }>();




    useEffect(() => {
        if (typeof window !== 'undefined') {
            const tokenString = localStorage.getItem('token');
            if (tokenString) {
                try {
                    const tokenObject = JSON.parse(tokenString);
                    const token = tokenObject?.state?.token || '';
                    setToken(token);
                    if (token) {
                        fetchUserDataByToken(token);
                    }
                } catch (error) {
                    console.error('Ошибка при разборе токена из localStorage:', error);
                    setToken('');
                }
            } else {
                setToken('');
            }
        }
    }, [fetchUserDataByToken, setToken]);

    return (
        <div>
            {token}
            {data ? (<>
                    <p>{data.username}</p>
                    <p>{data.email}</p>
                </>


            ) : (
                <p>Loading...</p>
            )}
        </div>
    );

};

export default Profile;
