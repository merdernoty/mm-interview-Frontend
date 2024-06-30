import React from 'react'

type MessageProps = {
    data: any
    content: string
}

const Message: React.FC<MessageProps> = ({ data, content }) => {
    return (
        <div>
            <div className="flex justify-end">
                <div className="w-6/12 bg-gradient-to-tr rounded-l-[16px] rounded-tr-[24px] rounded-br-[4px]  m-4 p-3 text-black  from-[#E5ECF6] via-[#D4E0F2] to-[#C1D3ED]">
                    <p className="text-gray-400">
                        <span>Роль:</span> user
                    </p>
                    <hr></hr>
                    <p>{content}</p>
                </div>
            </div>

            {data.choices.map((choice: any, index: number) => (
                <div
                    className="w-6/12 bg-gradient-to-tr  rounded-r-[16px] rounded-tl-[24px] rounded-bl-[4px] m-4 mb-24 p-3 text-black  from-[#E5ECF6] via-[#D4E0F2] to-[#C1D3ED]"
                    key={index}
                >
                    <p className="text-gray-400">
                        <span>Роль:</span> {choice.message.role}
                    </p>
                    <hr></hr>
                    <p>{choice.message.content}</p>
                </div>
            ))}
        </div>
    )
}

export default Message
