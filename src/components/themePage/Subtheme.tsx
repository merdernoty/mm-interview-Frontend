import React from 'react';
import { Shuffle } from 'lucide-react';
import Question from './Question';

interface SubthemeProps {
    subtheme: {
        id: number;
        title: string;
        questions: {
            id: number;
            question: string;
            answers: string[];
        }[];
    };
}

const Subtheme: React.FC<SubthemeProps> = ({ subtheme }) => {
    return (
        <div key={subtheme.id} className="w-[850px] h-auto bg-[#1A1A1A] rounded-[16px] mt-[50px] border-2 border-[#2C2C2C]">
            <div className="h-[50px] w-full bg-[#2C2C2C] rounded-t-[16px] flex items-center justify-between pl-4 pr-4">
                <div>{subtheme.title}</div>
                <div className="flex items-center">
                    <button>
                        <Shuffle />
                    </button>
                </div>
            </div>
            <div>
                <ul>
                    {subtheme.questions.map(question => (
                        <Question key={question.id} question={question} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Subtheme;
