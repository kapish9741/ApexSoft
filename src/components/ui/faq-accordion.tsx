"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";


interface FAQProps {
    items: {
        question: string;
        answer: string;
    }[];
}

export const FAQAccordion = ({ items }: FAQProps) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="w-full max-w-7xl mx-auto py-12 px-4">
            <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                {/* Left side - Heading */}
                <div className="md:w-1/3 lg:w-2/5">
                    <motion.h1
                        className="text-4xl font-semibold bg-gradient-to-br from-neutral-500 via-neutral-300 to-neutral-700 bg-clip-text text-transparent"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}>
                        Frequently Asked Questions
                    </motion.h1>
                </div>

                {/* Right side - Accordion */}
                <div className="md:w-2/3 lg:w-3/5">
                    <div className="flex flex-col gap-3 md:gap-4">
                        {items.map((item, i) => (
                            <AccordionItem
                                key={i}
                                question={item.question}
                                answer={item.answer}
                                index={i}
                                isOpen={activeIndex === i}
                                onToggle={() => handleToggle(i)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

interface AccordionItemProps {
    question: string;
    answer: string;
    index: number;
    isOpen: boolean;
    onToggle: () => void;
}

const AccordionItem = ({ question, answer, index, isOpen, onToggle }: AccordionItemProps) => {
    const [rotation, setRotation] = useState(90);

    const prevIsOpenRef = React.useRef(isOpen);

    React.useEffect(() => {
        if (prevIsOpenRef.current !== isOpen) {
            setRotation(prevRotation => prevRotation + 90);
            prevIsOpenRef.current = isOpen;
        }
    }, [isOpen]);

    const handleToggle = () => {
        onToggle();
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="border-b border-neutral-800 last:border-b-0"
        >
            <button
                onClick={handleToggle}
                className="flex w-full items-center gap-4 py-6 text-left"
            >
                {/* Plus/Minus icon at the beginning */}
                <div className="relative w-6 h-6 flex-shrink-0 flex items-center justify-center">
                    {/* Horizontal bar */}
                    <motion.div
                        className="absolute bg-[#2b7fff] rounded-sm"
                        style={{
                            height: "2px",
                            width: "16px"
                        }}
                    />

                    {/* Vertical bar */}
                    <motion.div
                        className="absolute bg-[#2b7fff] rounded-sm"
                        animate={{ rotate: rotation }}
                        transition={{
                            duration: 0.3,
                            ease: "easeInOut"
                        }}
                        style={{
                            height: "2px",
                            width: "16px"
                        }}
                    />
                </div>

                <span className="text-lg font-medium text-neutral-100">{question}</span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="pb-6 pl-16 text-sm text-neutral-400 leading-relaxed">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};
