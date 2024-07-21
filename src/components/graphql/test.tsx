import React from 'react';
import { useQuery, gql } from '@apollo/client';

// Определите запрос GraphQL с переменной depth
const GET_THEMES = gql`
    query GetThemes($depth: Int!) {
        themes(depth: $depth) {
            ... on Theme {
                description
                image
                award {
                    title
                    image
                    description
                }
            }
        }
    }
`;

// Определите интерфейсы для данных и переменных запроса
interface Award {
    title: string;
    image: string;
    description: string;
}

interface Theme {
    description: string;
    image: string;
    award: Award;
}

interface ThemesData {
    themes: Theme[];
}

interface ThemesVars {
    depth: number;
}

// Компонент Themes, который принимает пропс depth
const Themes: React.FC<{ depth: number }> = ({ depth }) => {
    // Выполните запрос, передавая переменную depth
    const { loading, error, data } = useQuery<ThemesData, ThemesVars>(GET_THEMES, {
        variables: { depth },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h1>Themes</h1>
            <ul>
                {data?.themes.map((theme, index) => (
                    <li key={index}>
                        <h2>Description: {theme.description}</h2>
                        <img src={theme.image} alt="Theme" />
                        <div>
                            <h3>Award Title: {theme.award.title}</h3>
                            <img src={theme.award.image} alt="Award" />
                            <p>Award Description: {theme.award.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Themes;
