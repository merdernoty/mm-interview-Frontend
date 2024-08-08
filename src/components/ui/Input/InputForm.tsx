import React, { useState, ChangeEvent } from 'react'

interface InputFormProps {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const InputForm: React.FC<InputFormProps> = ({ onChange }) => {
    const [isFocused, setIsFocused] = useState(false)
    const [inputText, setInputText] = useState('')

    const handleFocus = () => {
        setIsFocused(true)
    }

    const handleBlur = () => {
        setIsFocused(false)
    }

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value)
        onChange(event)
    }

    return (
        <>
            <input
                type="text"
                id="search"
                name="search"
                className={`pl-8 pr-2 h-full w-full border-none rounded-md bg-[#323232] text-[#a8b0ba] text-sm leading-6 outline-none transition-transform duration-200 ${isFocused || inputText ? 'transform scale-105' : ''} `}
                placeholder="Search for questions and themes"
                value={inputText}
                onChange={handleInputChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            <style jsx>{`
                input::placeholder {
                    text-align: left;
                    opacity: 60%;
                }
            `}</style>
        </>
    )
}

export default InputForm
