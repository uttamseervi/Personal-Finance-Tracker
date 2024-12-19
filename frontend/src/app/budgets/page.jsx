import { CreateBudgetButton } from '@/components/global/createBudegetButton';
import React from 'react';

const FullScreenDummy = () => {
    return (
        <div className="w-full h-screen bg-[#FAF7F0] p-4">
            <h1 className='font-bold text-3xl text-black mb-5 font-sans'> My Budgets</h1>
            <div>
                <div id='budgetCard' className='bg-[#d7d1d1] border-2 border-dashed  h-56 w-80 rounded-[20px] md:ml-5 flex items-center justify-center'>
                <CreateBudgetButton/>
                </div>
            </div>

        </div>
    );
};

export default FullScreenDummy;
