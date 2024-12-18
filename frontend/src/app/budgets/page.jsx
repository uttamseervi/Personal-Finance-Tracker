import React from 'react';

const FullScreenDummy = () => {
    return (
        <div className="w-full h-screen bg-gray-800 flex items-center justify-center">
            <div className="text-center text-white">
                <h1 className="text-4xl font-bold">Welcome to Full-Screen Dummy Component</h1>
                <p className="mt-4 text-xl">This is a placeholder component that covers the entire screen.</p>
            </div>
        </div>
    );
};

export default FullScreenDummy;
