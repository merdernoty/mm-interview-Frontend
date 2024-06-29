import React from 'react'

function Message({ data }: { data: any }) {
    if (!data || !data.choices || !Array.isArray(data.choices)) {
        return null
    }

    return (
        <div>
            {data.choices.map((choice: any, index: number) => (
                <div
                    className="w-6/12 bg-gradient-to-tr rounded-r-[16px] rounded-tl-[24px] rounded-bl-[4px]  m-4 p-3 text-black  from-[#E5ECF6] via-[#D4E0F2] to-[#C1D3ED]"
                    key={index}
                >
                    <p className='text-gray-400'>
                        <span>Role:</span> {choice.message.role}
                    </p>
                    <hr></hr>
                    <p>{choice.message.content}</p>
                </div>
            ))}
        </div>
    )
}

export default Message
