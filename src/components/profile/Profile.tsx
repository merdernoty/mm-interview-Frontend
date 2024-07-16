import React, {useEffect, useState} from 'react'
import useUserData from '@/lib/stores/userDataStore';
import { useParams } from 'next/navigation'


const Profile = () => {

    const { data, fetchUserDataByToken,fetchUserDataByUsername } = useUserData();
    const [token, setToken] = useState<string>("");

    const { username } = useParams<{ username: string }>();


    useEffect(() => {
        const currentPath = window.location.pathname;
        if (currentPath.startsWith('/user')) {
            fetchUserDataByUsername(username);
        }
        else if (currentPath.startsWith('/me')) {
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
        }
    }, [username]);


    return (
        <div>
            {data ? (
                <div className="flex justify-around">
                    <div className="w-64 h-64 bg-[#2C2C2C] rounded-lg p-4 text-center">
                        <h2 className="text-lg font-bold">ник:</h2>
                        <p>{data.username}</p>
                    </div>
                    <div className="w-64 h-64 bg-[#2C2C2C] rounded-lg p-4 text-center">
                        <h2 className="text-lg font-bold">почта:</h2>
                        <p>{data.email}</p>
                    </div>
                    {data.info.favoriteQuestions && (
                        data.info.favoriteQuestions.map((question) => (
                            <div key={question.id} className="w-64 h-64 bg-[#2C2C2C] rounded-lg p-4 text-center">
                                <h2 className="text-lg font-bold">любимые вопросы:</h2>
                                <p>{question.question}</p>
                            </div>
                        ))
                    )}

                    {data.info.rewards && (
                        data.info.rewards.map((question) => (
                            <div key={question.id} className="w-64 h-64 bg-[#2C2C2C] rounded-lg p-4 text-center">
                                <h2 className="text-lg font-bold">награда:</h2>
                                <p>{question.title}</p>
                                <p>{question.description}</p>

                            </div>
                        ))
                    )}

                    {data.info.completedQuestions && (
                        data.info.completedQuestions.map((question) => (
                            <div key={question.id} className="w-64 h-64 bg-[#2C2C2C] rounded-lg p-4 text-center">
                                <h2 className="text-lg font-bold">награды:</h2>
                                <p>{question.question}</p>
                            </div>
                        ))
                    )}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
};

export default Profile;
