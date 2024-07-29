'use client'
import client from '@/lib/graphQL/Client/apolloClient'
import useAuth from '@/lib/stores/authStore'
import { ChakraProvider } from '@chakra-ui/react'
import { ApolloProvider } from '@apollo/client'
import React from 'react'

export function Providers({ children }: { children: React.ReactNode }) {
    const { token, isAuthorized, updateAuth } = useAuth()
    React.useEffect(() => {
        if (!isAuthorized) {
            updateAuth()
        } else {
        }
    }, [token, isAuthorized])
    return (
        <ApolloProvider client={client}>
            <ChakraProvider>{children}</ChakraProvider>
        </ApolloProvider>
    )
}
