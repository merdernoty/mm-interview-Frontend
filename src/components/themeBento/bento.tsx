'use client'
import React from 'react'
import BentoBlock from './ui/bentoComponents'
import useThemeData from '@/lib/stores/themeDataStore'
import SpinnerUI from '../ui/spinner/spinner'

interface Theme {
    type: 'one-one' | 'one-two'
    image: string
    title: string
}

const BentoGrid: React.FC = () => {
    const { data, isLoading, fetchAllTheme } = useThemeData()

    React.useEffect(() => {
        fetchAllTheme()
    }, [fetchAllTheme])
    if (isLoading) return <SpinnerUI />

    const renderBlocks = () => {
        if (Array.isArray(data)) {
            return data.map((block: Theme, index: number) => {
                const isOneTwo = block.type === 'one-two'
                const blockClass = isOneTwo
                    ? 'col-span-2 row-span-1'
                    : 'col-span-1 row-span-1'

                return (
                    <div key={index} className={blockClass}>
                        <BentoBlock
                            imageSrc={block.image}
                            title={block.title}
                            className={`w-full h-full ${isOneTwo ? 'max-w-[480px] max-h-[230px]' : 'max-w-[230px] max-h-[230px]'}`}
                        />
                    </div>
                )
            })
        } else {
            return <p>Data is not in expected format.</p>
        }
    }

    return (
        <div className="h-screen p-6 text-slate-800 dark:text-slate-100">
            <div className="flex h-1/5 flex-col items-center justify-center gap-4 text-center">
                <h3 className="md:text-3xl font-semibold">
                    Our Software Topics
                </h3>
            </div>
            <div className="grid h-2/3 w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-6 grid-rows-3 gap-4 text-slate-400/0 xl:text-slate-400">
                {renderBlocks()}
            </div>
        </div>
    )
}

export default BentoGrid
