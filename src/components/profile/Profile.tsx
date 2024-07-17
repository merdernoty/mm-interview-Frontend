import React, {useEffect, useState} from 'react'
import useUser from '@/lib/stores/userStore';
import { useParams } from 'next/navigation'


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
                    <div className="w-64 h-64 bg-[#2C2C2C] rounded-lg p-4 text-center">
                        <h2 className="text-lg font-bold">Любимые вопросы:</h2>
                        {data.info.favoriteQuestions && data.info.favoriteQuestions.length > 0 ? (
                            <div>
                                {data.info.favoriteQuestions.map((question, index) => (
                                    <p key={index}>{question.question}</p>

                                ))}
                            </div>
                        ) : (
                            <p>Нет избранных вопросов</p>
                        )}
                    </div>
                    <div className="w-64 h-64 bg-[#2C2C2C] rounded-lg p-4 text-center">
                        <h2 className="text-lg font-bold">пройденные вопросы:</h2>
                        {data.info.completedQuestions && data.info.completedQuestions.length > 0 ? (
                            <div>
                                {data.info.completedQuestions.map((question, index) => (
                                    <p key={index}>{question.question}</p>
                                ))}
                            </div>
                        ) : (
                            <p>Нет пройденных вопросов</p>
                        )}
                    </div>
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
