'use client'

import React, {useEffect, useState} from 'react';

import Themes from "@/components/graphql/test";


export default function Page() {
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {

    }, []);

    return (
        <div>
            <Themes depth={2} />
        </div>
    );
};
