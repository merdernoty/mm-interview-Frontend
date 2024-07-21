import React, { useEffect, useState } from 'react';
import { CircleDashed, Book, Star } from 'lucide-react';
import useFavorites from "@/lib/stores/favoritesStore";

interface QuestionProps {
    question: {
        id: number;
        question: string;
        answers: string[];
    };
}

const Question: React.FC<QuestionProps> = ({ question }) => {
    const { addToFav, removeFromFav, favoriteQuestions, fetchFavorites } = useFavorites();
    const [isFavorite, setIsFavorite] = useState<boolean>(false);

    useEffect(() => {
        fetchFavorites();

    }, []);

    useEffect(() => {
        setIsFavorite(favoriteQuestions.some(favQuestion => favQuestion.id === question.id));
    }, [favoriteQuestions, question.id]);

    const handleAddToFav = async () => {
        if (!isFavorite) {
            setIsFavorite(true);
            try {
                await addToFav(question.id);
            } catch (error) {
                console.error('Ошибка при добавлении в избранное:', error);
                setIsFavorite(false);
            }
        }
    };

    const handleRemoveFromFav = async () => {
        if (isFavorite) {
            setIsFavorite(false);
            try {
                await removeFromFav(question.id);
            } catch (error) {
                console.error('Ошибка при удалении из избранного:', error);
                setIsFavorite(true); // Откатываем изменение в случае ошибки
            }
        }
    };

    return (
        <li key={question.id} className="flex items-center justify-between p-4 border-b-2 border-[#2C2C2C]">
            <div className="flex items-center flex-grow w-2/3">
                <CircleDashed className="mr-2" />
                <span>{question.question}</span>
            </div>
            <div className="flex items-center w-1/3 justify-center">
                <Book className="mr-2" />
                <span>answer</span>
            </div>
            <div className="w-1/4 text-right">Easy</div>

            {isFavorite ? (
                <button onClick={handleRemoveFromFav}>
                    <Star className="text-yellow-500" />
                </button>
            ) : (
                <button onClick={handleAddToFav}><Star/></button>
            )}
        </li>
    );
};

export default Question;
