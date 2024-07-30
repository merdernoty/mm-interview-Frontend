import React from 'react';
import {
    Book,
    ChevronRight,
    Star,

} from 'lucide-react'

const CompletedBento = ({ data }) => {
  return (
    <div className="flex-1 bg-[#1e1e22] rounded-md min-h-[375px]">
      <div className="w-full h-[50px] bg-[#1e1e22] flex items-center justify-between px-8 text-grayViolet rounded-md">
        <p>Completed</p>
        <button className="flex transition-colors duration-200 hover:text-[#B197EB] hover:bg-[#1e1e22]">
          <p className="text-nowrap">View more</p>
          <ChevronRight className="stroke-[1.5px]" />
        </button>
      </div>
      <hr className="border-t border-[#363639] mb-2 mx-auto w-[98%]" />
      <div>
        <ul className="m-0 p-4 flex flex-col items-center gap-2">
          {data &&
            data.info &&
            data.info.favoriteQuestions &&
            data.info.favoriteQuestions.length > 0 ? (
            data.info.favoriteQuestions
              .slice(0, 6)
              .map((question) => (
                <li key={question.id} className="w-full">
                  <button
                    className="relative flex items-center justify-between bg-[#2C2C30] rounded-md w-full h-[50px] px-4 transform transition-transform duration-200 hover:scale-105 focus:outline-none"
                  >
                    <div className="flex items-center gap-3">
                      <Star className="text-[#c6c7f8] fill-current" />
                      <p className="flex-grow">{question.question}</p>
                    </div>
                    <div className="w-1/4 flex items-center justify-between">
                      <button className="flex items-center gap-2 p-2 rounded-md transform transition-colors duration-200 hover:bg-[#4a4a4d] hover:text-gray-200 focus:outline-none">
                        <Book className="size-5" />
                        <p className="mr-4">Answer</p>
                      </button>
                      <p
                        className={`font-bold ${
                          question.difficulty === 'Easy'
                            ? 'text-[#CBBCF3]'
                            : question.difficulty === 'Medium'
                            ? 'text-[#968CD9]'
                            : question.difficulty === 'Hard'
                            ? 'text-[#968CD9]'
                            : 'text-gray-400'
                        }`}
                      >
                        {question.difficulty}
                      </p>
                    </div>
                  </button>
                </li>
              ))
          ) : (
            <li className="w-full">
              <p className="text-center text-gray-500">it`s empty..</p>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default CompletedBento;
