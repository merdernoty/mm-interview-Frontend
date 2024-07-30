import React, { useEffect, useState, useRef } from 'react'

type MessageProps = {
    data: {
        question: string
    }
}

const FirstMessage: React.FC<MessageProps> = ({ data }) => {
    const [displayedText, setDisplayedText] = useState('')
    const indexRef = useRef(0)
    const intervalTime = 50

    useEffect(() => {
        indexRef.current = 0
        setDisplayedText('')

        const updateText = () => {
            if (indexRef.current < data.question.length - 1) {
                setDisplayedText(
                    (prev) => prev + data.question[indexRef.current],
                )
                indexRef.current++
            }
        }
        const intervalId = setInterval(updateText, intervalTime)
        return () => clearInterval(intervalId)
    }, [data.question])

    return (
        <div className="w-6/12 bg-gradient-to-tr rounded-r-[16px] rounded-tl-[24px] rounded-bl-[4px] m-4 mb-4 p-3 text-black from-[#E5ECF6] via-[#D4E0F2] to-[#C1D3ED]">
            <p className="text-gray-400">
                <span>Role:</span> server
            </p>
            <hr />
            <p>{displayedText}</p>
        </div>
    )
}

export default FirstMessage
