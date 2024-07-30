import React from 'react';

const ActivityBento = () => {
  return (
    <div className="w-full h-[300px] bg-[#1e1e22] rounded-md transform transition-transform duration-200 hover:scale-[1.01]">
      <div className="h-1/6 w-full flex items-center justify-end gap-8 pr-8 text-[#6B6C7A]">
        <p>
          total active days:{' '}
          <span className="text-gray-300">120</span>
        </p>
        <p>
          max streak:{' '}
          <span className="text-gray-300">5</span>
        </p>
      </div>
      <div className="w-full h-[240px] flex items-center py-4 px-6">
        <div className="w-full h-full border-2 border-[#363639]"></div>
      </div>
    </div>
  );
};

export default ActivityBento;
