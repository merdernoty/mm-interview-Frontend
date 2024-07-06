'use client'

import React from 'react';
import { useParams } from 'next/navigation';
import Container from '@/components/ui/container/Container';
import ThemePage from '@/components/themePage/ThemePage'
import ThemeDetails from '@/components/themePage/ThemeDetails'

export default function Home() {
    const params = useParams();

    return (
        <Container>
            <ThemeDetails></ThemeDetails>
        </Container>
    );
};
