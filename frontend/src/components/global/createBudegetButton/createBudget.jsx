"use client";
import React, { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';

const CreateBudget = () => {
    const [emoji, setEmoji] = useState('😁');
    const [openEmojiPicker, setOpenEmojiPicker] = useState(false);

    const handleEmojiClick = (emoji) => {
        setEmoji(emoji);
        setOpenEmojiPicker(false);
    };

    return (
        <div>
            <h4 className="text-lg md:text-2xl text-neutral-600  font-bold text-center mb-8">
                Create a new Budget
            </h4>
            <div className="flex flex-col justify-center items-center space-y-4">
                <div className="mt-5">
                    <button
                        variant="outline"
                        className=" bg-white p-2 text-2xl rounded-[20%]"
                        onClick={() => setOpenEmojiPicker(!openEmojiPicker)}
                    >
                        {emoji}
                    </button>

                    {openEmojiPicker && (
                        <div className="absolute z-20 h-full top-4 left-9">
                            <EmojiPicker
                                onEmojiClick={(e) => handleEmojiClick(e.emoji)}
                                allowExpandReactions={true}
                            />
                        </div>
                    )}

                    <div className="mt-2 ">
                        <h2 className="text-black font-medium my-1">Budget Name</h2>
                        <input
                            placeholder="e.g. Home Decor"
                            className='lg:w-[800px] rounded-[30px]'
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mt-2">
                        <h2 className="text-black font-medium my-1">Budget Amount</h2>
                        <input
                            type="number"
                            placeholder="e.g. 5000$"
                            className='lg:w-[800px] rounded-[30px]'
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </div>
                    <button className='bg-[#231f1f] w-full mt-5 p-3 rounded-[30px] text-white'>Create Budget</button>

                </div>
            </div>
        </div >
    );
};

export default CreateBudget;
