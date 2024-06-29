import React, { useState, ChangeEvent } from 'react';
import { Search } from 'lucide-react';

interface InputFormProps {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputForm: React.FC<InputFormProps> = ({ onChange }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [inputText, setInputText] = useState('');

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value);
        onChange(event);
    };

    return (
        <div className={`relative ${isFocused ? 'input-focused' : ''}`}>

            <input
                type="text"
                id="search"
                name="search"
                className="pl-8 pr-2 w-full border-none rounded-md bg-[#323232] text-[#a8b0ba] text-sm leading-6 outline-none h-8 hover:scale-105 transition-transform duration-200"
                placeholder="Search..."
                value={inputText}
                onChange={handleInputChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            {inputText === '' && (
                <Search
                    size={20}
                    className="absolute left-1.5 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                />
            )}

            <style jsx>{`
                .input-focused {
                    transform: scale(1.01);
                    transition: transform 0.2s ease-in-out;
                }

                input:hover {
                    transform: scale(1.05);
                }
            `}</style>
        </div>
    );
};

export default InputForm;
