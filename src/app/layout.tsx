import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import SimpleHeader from '@/components/header/SimpleHeader'
import SideBar from '@/components/sidebar/SideBar'
import PreFooter from "@/components/ui/footer/PreFooter";
import React from "react";




const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={ inter.className}>
                <Providers>
                    <SideBar></SideBar>
                    <SimpleHeader></SimpleHeader>
                    {children}
                    <PreFooter>

                    </PreFooter>
                </Providers>

            </body>
        </html>
    )
}
