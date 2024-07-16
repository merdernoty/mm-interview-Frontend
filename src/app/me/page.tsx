'use client'
import React, {useEffect, useState} from 'react'
import useUserData from '@/lib/stores/userDataStore';
import Container from "@/components/ui/container/Container";
import Profile from "@/components/profile/Profile";



const Page = () => {

    // const { data, fetchUserDataByToken } = useUserData();
    //
    // const [token, setToken] = useState<string>("");
    //
    // useEffect(() => {
    //     if (typeof window !== 'undefined') {
    //         const tokenString = localStorage.getItem('token');
    //         if (tokenString) {
    //             try {
    //                 const tokenObject = JSON.parse(tokenString);
    //                 const token = tokenObject?.state?.token || '';
    //                 setToken(token);
    //                 if (token) {
    //                     fetchUserDataByToken(token);
    //                 }
    //             } catch (error) {
    //                 console.error('Ошибка при разборе токена из localStorage:', error);
    //                 setToken('');
    //             }
    //         } else {
    //             setToken('');
    //         }
    //     }
    // }, [fetchUserDataByToken, setToken]);

    return (
        <Container>
            <Profile/>
        </Container>
    );

};

export default Page;
