import React, { useEffect } from 'react'
import useUserData from '@/lib/stores/userDataStore';
import { useParams } from 'next/navigation'


const Profile = () => {

    const { data, fetchUserData } = useUserData();

    const { userId } = useParams<{ userId: string }>();

    useEffect(() => {

        const userIdNum = Number(userId);
        if (!isNaN(userIdNum)) {
            fetchUserData(userIdNum);
        } else {
            console.error(`Invalid userId: ${userId}`);
        }
    }, [userId]);


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
                    {data.favoriteQuestions && (
                        data.favoriteQuestions.map((question) => (
                            <div key={question.id} className="w-64 h-64 bg-[#2C2C2C] rounded-lg p-4 text-center">
                                <h2 className="text-lg font-bold">любимые вопросы:</h2>
                                <p>{question.question}</p>
                            </div>
                        ))
                    )}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Profile;
