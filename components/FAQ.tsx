import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from './Icons';

interface FAQItemProps {
    question: string;
    answer: string;
}

export const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-700 last:border-0">
            <button 
                className="flex justify-between items-center w-full py-6 text-left focus:outline-none group cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-base md:text-lg font-semibold text-white group-hover:text-green-400 transition-colors pr-4">{question}</span>
                {isOpen ? <ChevronUp className="text-green-400 shrink-0" /> : <ChevronDown className="text-gray-400 shrink-0" />}
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
                <p className="text-gray-300 text-sm md:text-base">{answer}</p>
            </div>
        </div>
    );
};