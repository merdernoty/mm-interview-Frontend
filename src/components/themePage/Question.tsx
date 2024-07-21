import React, { useState, useEffect } from 'react';
import { CircleDashed, Book, Star } from 'lucide-react';
import useFavorites from '@/lib/stores/favoritesStore';

interface QuestionProps {
    question: {
        id: number;
        question: string;
        answers: string[];
        difficulty: string;
    };
}

const Question: React.FC<QuestionProps> = ({ question }) => {
    const { addToFav, removeFromFav, favoriteQuestions, fetchFavorites } = useFavorites();
    const [isFavorite, setIsFavorite] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        fetchFavorites();
    }, [fetchFavorites]);

    useEffect(() => {
        setIsFavorite(favoriteQuestions.some(favQuestion => favQuestion.id === question.id));
    }, [favoriteQuestions, question.id]);

    const handleAddToFav = async () => {
        if (!isFavorite) {
            setIsLoading(true);
            try {
                await addToFav(question.id);
                setIsFavorite(true);
            } catch (error) {
                console.error('Ошибка при добавлении в избранное:', error);
                setIsFavorite(false);
            } finally {
                setIsLoading(false);
            }
        }
    };

    const handleRemoveFromFav = async () => {
        if (isFavorite) {
            setIsLoading(true);
            try {
                await removeFromFav(question.id);
                setIsFavorite(false);
            } catch (error) {
                console.error('Ошибка при удалении из избранного:', error);
                setIsFavorite(true); // Откатываем изменение в случае ошибки
            } finally {
                setIsLoading(false);
            }
        }
    };

    return (
        <>

            <li key={question.id} className="w-full">
                <button
                    className="relative flex items-center justify-between bg-[#2C2C30] rounded-md w-full h-[50px] px-4
                            "
                >
                    <div className="flex items-center gap-3">
                        <button
                            onClick={isFavorite ? handleRemoveFromFav : handleAddToFav}
                            disabled={isLoading} // Деактивировать кнопку, когда идет загрузка
                            className=''
                        >
                            <Star className={`w-6 h-6  ${isLoading ? 'text-gray-400' : isFavorite ? 'fill-current text-[#c6c7f8]' : 'text-gray-500'}`}/>
                        </button>
                        <p className="flex-grow">{question.question}</p>
                    </div>
                    <div className="w-1/4 flex items-center justify-between">
                        <button
                            className="flex items-center gap-2 p-2 rounded-md transform transition-colors duration-200 hover:bg-[#4a4a4d] hover:text-gray-200 focus:outline-none"
                        >
                            <Book className="size-5"/>
                            <p className="mr-4">Answer</p>
                        </button>
                        <p className={`font-bold ${
                            question.difficulty === 'Easy' ? 'text-[#CBBCF3]' :
                                question.difficulty === 'Medium' ? 'text-[#968CD9]' :
                                    question.difficulty === 'Hard' ? 'text-[#968CD9]' :
                                        'text-gray-400'
                        }`}>
                            {question.difficulty}
                        </p>
                    </div>
                </button>
            </li>
        </>
    );
};

export default Question;

