import React, { useEffect } from 'react';
import { useParams } from 'next/navigation';
import useThemeData from '@/lib/stores/themeDataStore';
import Subtheme from './Subtheme';
import {Trophy,Database,Leaf}  from 'lucide-react';

const ThemeDetails = () => {
    const { data, fetchThemeData } = useThemeData();
    const { themeTitle } = useParams<{ themeTitle: string }>();

    useEffect(() => {
        fetchThemeData(themeTitle);
    }, []);

    return (
        <>
            {data && (
                <>
                    <h1 className="text-2xl font-bold mb-4">{data.title} </h1>
                    <div className="flex">

                        <div className="flex-grow mr-8">
                            {data.subthemes.map(subtheme => (
                                <Subtheme key={subtheme.id} subtheme={subtheme} />
                            ))}
                        </div>


                        <div className="w-1/3 mt-12">
                            <ul>
                                <li>
                                    <h2 className="text-xl font-semibold mb-2 ">Description</h2>
                                    <p>{data.description}</p>
                                </li>
                                <li className="text-xl font-semibold mt-32 ">
                                    <h2 className="text-xl font-semibold mb-2 ">Award</h2>
                                    {data.award.image}
                                </li>
                                <li className="mt-20">
                                    <h2 className="text-xl font-semibold">Related</h2>
                                    <ul className="mt-2 space-y-2">
                                        <li className="flex items-center">
                                            <Database size={25} className="mr-2" />
                                            <p className="text-lg">database</p>
                                        </li>
                                        <li className="flex items-center">
                                            <Leaf size={25} className="mr-2" />
                                            <p className="text-lg">spring</p>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default ThemeDetails;
