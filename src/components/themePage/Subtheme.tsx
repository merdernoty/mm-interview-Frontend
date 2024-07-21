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
            difficulty: string;
        }[];
    };
}

const Subtheme: React.FC<SubthemeProps> = ({ subtheme }) => {
    return (
        <div key={subtheme.id} className="flex-1 bg-[#1e1e22] rounded-md mt-[50px]  ">
            <div className="w-full h-[50px] flex items-center justify-between px-8 text-grayViolet rounded-t-md">
                <p>{subtheme.title}</p>
                <button className="flex justify-center items-center transition-colors duration-200 hover:text-[#B197EB] hover:bg-[#2C2C30]">
                    <p className="text-nowrap">shuffle</p>
                    <Shuffle className="stroke-[1.5px] ml-2 w-4 h-4" />

                </button>
            </div>
            <hr className="border-t border-[#363639] mb-2 mx-auto w-[98%]" />
            <div>
                <ul className="m-0 p-4 flex flex-col items-center gap-2">
                    {subtheme.questions.map(question => (
                                 <Question key={question.id} question={question} />
                             ))}
                </ul>
            </div>
        </div>
    );
};


export default Subtheme;

