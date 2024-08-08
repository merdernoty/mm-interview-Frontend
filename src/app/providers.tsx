'use client'
import useAuth from '@/lib/stores/authStore'
import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'

export function Providers({ children }: { children: React.ReactNode }) {
    const { token, isAuthorized, updateAuth } = useAuth()
    React.useEffect(() => {
        if (!isAuthorized) {
            updateAuth()
        }
    }, [token, isAuthorized])
    return <ChakraProvider>{children}</ChakraProvider>
}
