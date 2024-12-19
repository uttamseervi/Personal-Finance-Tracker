import React from 'react';

const Income = () => {
    // Sample transaction data
    const transactions = [
        { id: 1, name: 'Groceries', amount: 50, date: '2024-12-19', action: 'Delete' },
        { id: 2, name: 'Electricity Bill', amount: 120, date: '2024-12-18', action: 'Delete' },
        { id: 3, name: 'Internet Bill', amount: 30, date: '2024-12-17', action: 'Delete' },
        { id: 4, name: 'Dining Out', amount: 40, date: '2024-12-16', action: 'Delete' },
        { id: 5, name: 'Dining Out', amount: 40, date: '2024-12-16', action: 'Delete' },
        { id: 6, name: 'Dining Out', amount: 40, date: '2024-12-16', action: 'Delete' },
        { id: 7, name: 'Dining Out', amount: 40, date: '2024-12-16', action: 'Delete' },
    ];

    return (
        <div className="h-screen">
            <div className="ml-5 mb-5 mt-2">
                <h1 className="font-extrabold text-3xl font-sans text-black mb-2">My Expenses</h1>
                <h1 className="text-xl font-extrabold text-black">Latest Expenses</h1>
            </div>
            <div className="w-[80%] mx-auto rounded-[10px] overflow-hidden border border-gray-300">
                <table className="w-full table-auto">
                    <thead>
                        <tr className="bg-gray-300 ">
                            <th className="px-4 py-2 text-left text-sm font-bold text-gray-600">Name</th>
                            <th className="px-4 py-2 text-left text-sm font-bold text-gray-600">Amount</th>
                            <th className="px-4 py-2 text-left text-sm font-bold text-gray-600">Date</th>
                            <th className="px-4 py-2 text-left text-sm font-bold text-gray-600">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((transaction) => (
                            <tr key={transaction.id} className="bg-neutral-100 ">
                                <td className="px-4 py-2 text-sm text-gray-800">{transaction.name}</td>
                                <td className="px-4 py-2 text-sm text-gray-800">${transaction.amount}</td>
                                <td className="px-4 py-2 text-sm text-gray-800">{transaction.date}</td>
                                <td className="px-4 py-2 text-sm text-gray-800">
                                    <button className="text-red-600 hover:text-red-800">{transaction.action}</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Income;
