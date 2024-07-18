import React from 'react';
import { CircleDashed, Book, Star } from 'lucide-react';
import useUser from "@/lib/stores/userStore";

interface QuestionProps {
    question: {
        id: number;
        question: string;
        answers: string[];
    };
}

const Question: React.FC<QuestionProps> = ({ question }) => {
    const { addToFav } = useUser();

    const handleAddToFav = () => {
        addToFav(question.id);
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
            <button className="px-4" onClick={handleAddToFav}>
               добавить в избранное
            </button>
        </li>
    );
};

export default Question;
