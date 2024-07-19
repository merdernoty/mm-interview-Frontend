import React, { useEffect } from 'react';
import useThemeList from '@/lib/stores/themeListStore';
import Link from "next/link";

const HomePage = () => {
    const { data, fetchThemes } = useThemeList();

    useEffect(() => {
        fetchThemes();
    }, [fetchThemes]);

    return (
        <div className="container mx-auto py-6">
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {data && data.map((item, index) => (
                    <div key={index} className="relative bg-[#18181b] shadow-md rounded-md p-4 hover:shadow-lg">
                        <div className="absolute inset-0 bg-noise-light opacity-20 rounded-md"></div>
                        <div className="relative z-10">
                            <Link href={`/theme/${item.title}`} >
                                <button >
                                    <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
                                    <p className="text-gray-600">{item.description}</p>
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );


};

export default HomePage;
