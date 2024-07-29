import React from 'react'

type MessageProps = {
    content: string
    role: 'user' | 'server'
}

const Message: React.FC<MessageProps> = ({ content, role }) => {
    const [displayedText, setDisplayedText] = React.useState('')
    const indexRef = React.useRef(0)
    const intervalTime = 50

    React.useEffect(() => {
        indexRef.current = 0
        setDisplayedText('')

        const updateText = () => {
            if (indexRef.current < content.length - 1) {
                setDisplayedText((prev) => prev + content[indexRef.current])
                indexRef.current++
            }
        }
        const intervalId = setInterval(updateText, intervalTime)
        return () => clearInterval(intervalId)
    }, [content])

    return (
        <div
            className={
                role === 'user' ? 'flex justify-end' : 'flex justify-start'
            }
        >
            <div
                className={`w-6/12 m-4 p-3 text-black ${role === 'user' ? 'bg-gradient-to-tr rounded-l-[16px] rounded-tr-[24px] rounded-br-[4px] from-[#E5ECF6] via-[#D4E0F2] to-[#C1D3ED]' : 'bg-gradient-to-tr rounded-r-[16px] rounded-tl-[24px] rounded-bl-[4px] from-[#E5ECF6] via-[#D4E0F2] to-[#C1D3ED]'}`}
            >
                <p className="text-gray-400">
                    <span>Role:</span> {role}
                </p>
                <hr />
                <p>{displayedText}</p>
            </div>
        </div>
    )
}

export default Message
