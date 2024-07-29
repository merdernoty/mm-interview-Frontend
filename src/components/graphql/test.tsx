import React from 'react';
import { useGetThemesQuery } from '@/generated/types';

const Themes: React.FC = () => {
    const { loading, error, data } = useGetThemesQuery();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h1>Themes</h1>
            <ul>
                {data?.themes.map((theme, index) => {
                    if (theme.__typename !== 'Theme') return null;
                    return (
                        <li key={index}>
                            <h2>Description: {theme.description}</h2>
                            <img src={theme.image} alt="Theme" />

                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Themes;
