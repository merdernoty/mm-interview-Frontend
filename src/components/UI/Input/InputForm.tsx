import React, { useState, ChangeEvent } from 'react';
import { Search } from 'lucide-react';

interface InputFormProps {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputForm: React.FC<InputFormProps> = ({ onChange }) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <div className={`relative ${isFocused ? 'input-focused' : ''}`}>
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                <Search size={20} className="text-gray-400" />
            </div>
            <input
                type="text"
                id="search"
                name="search"
                className="pl-10 pr-2 w-full border-none rounded-md bg-[#323232] text-[#a8b0ba] text-sm leading-6 outline-none h-8 focus:bg-[#323232] focus:text-[#a8b0ba]"
                placeholder="Search..."
                onChange={onChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            <style jsx>{`
                .input-focused {
                    transform: scale(1.01); /* Увеличение масштаба при фокусе */
                    transition: transform 0.2s ease-in-out;
                }
            `}</style>
        </div>
    );
};

export default InputForm;
