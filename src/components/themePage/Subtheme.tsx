import React from 'react'
import { Shuffle } from 'lucide-react'
import Question from './Question'
import Link from 'next/link'

interface SubthemeProps {
    data: {
        title: string
    };
    subtheme: {
        id: number
        title: string
        questions: {
            id: number
            question: string
            answers: string[]
        }[]
    }
}

const Subtheme: React.FC<SubthemeProps> = ({data, subtheme }) => {
    return (
        <div
            key={subtheme.id}
            className="w-[850px] h-auto bg-[#1A1A1A] rounded-[16px] mt-[50px] border-2 border-[#2C2C2C]"
        >
            <div className="h-[50px] w-full bg-[#2C2C2C] rounded-t-[16px] flex items-center justify-between pl-4 pr-4">
                <div>{subtheme.title}</div>
                <div className="flex items-center">
                    <button>
                        <Shuffle />
                    </button>
                </div>
            </div>
            <hr className="border-t border-[#363639] mb-2 mx-auto w-[98%]" />
            <div>
                <ul>
                    {subtheme.questions.map((question) => (
                        <Link key={question.id}  href={`/chat/${data.title}/${subtheme.title}/${question.question}`}>
                            <Question question={question} />
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Subtheme

