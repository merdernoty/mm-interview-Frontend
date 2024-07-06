'use client'

import React from 'react';
import { useParams } from 'next/navigation';
import Chat from '@/components/chat/chat';
import Container from '@/components/ui/container/Container';

export default function Home() {
    const params = useParams();

    return (
        <Container>
            <Chat></Chat>
        </Container>
    );
};
