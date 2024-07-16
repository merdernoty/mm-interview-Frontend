'use client'

import React, {useEffect, useState} from 'react';


export default function Page() {
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        // Проверка, что код выполняется на клиенте
        if (typeof window !== 'undefined') {
            const storedToken = localStorage.getItem('token');
            setToken(storedToken);
        }
    }, []);

    return (
        <div>
            {token ? <p>Токен: {token}</p> : <p>Токен не найден</p>}
        </div>
    );
};
