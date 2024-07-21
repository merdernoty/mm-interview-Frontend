'use client'
import { ApolloProvider } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react'
import React from "react";
import client from "@/lib/graphQL/Client/apolloClient";

export function Providers({ children }: { children: React.ReactNode }) {
    return   <ApolloProvider client={client}><ChakraProvider>{children}</ChakraProvider></ApolloProvider>
}
