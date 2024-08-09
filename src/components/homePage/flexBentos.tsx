import React from 'react';

const FlexBentos = () => {
    return (
        <div className="flex flex-wrap p-6 min-h-[500px]">
            {/* Левый блок */}
            <div
                className="flex-1 sm:w-1/2 lg:w-1/3 bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Left Block</h2>
                <p>This is the left block with adaptive width.</p>
            </div>

            <div className="flex flex-col flex-1 w-full sm:w-1/2 lg:w-2/3 pl-6 space-y-6">
                {/* Верхний правый блок */}
                <div className="flex-1 bg-gradient-to-r from-green-500 to-teal-500 text-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-4">Right Block 1</h2>
                    <p>This is the first right block with adaptive width.</p>
                </div>

                {/* Нижний правый блок */}
                <div
                    className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-4">Right Block 2</h2>
                    <p>This is the second right block with adaptive width.</p>
                </div>
            </div>

            {/* Новый контейнер для правого блока, чтобы он мог располагаться справа */}
            <div className="w-full lg:w-2/3 flex flex-col lg:pl-6 space-y-6 mt-6 lg:mt-0">
                <div
                    className="flex-1 bg-gradient-to-r from-red-500 to-pink-500 text-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-4">Right Block</h2>
                    <p>This block spans the width of the right side and aligns with the other blocks.</p>
                </div>
            </div>
        </div>
    );
};

export default FlexBentos;