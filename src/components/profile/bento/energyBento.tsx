import React from 'react';
import {

    Zap,
} from 'lucide-react'

const EnergyBento = () => {
  return (
    <div className="h-[120px] w-full lg:w-1/3 bg-[#1e1e22] rounded-md transform transition-transform duration-200 hover:scale-105">
      <div className="flex items-center justify-between h-1/6 gap-5 ml-5 mt-4">
        <Zap className="text-[#c6c7f8] fill-current" />
        <div className="w-5/6 h-1 rounded-md bg-[#D6C6F8] mr-12 lg:mr-5" />
      </div>
      <div className="flex w-full h-2/3 items-end">
        <div className="flex w-full py-2 px-4">
          <div className="flex w-full justify-between items-center">
            <div className="flex gap-3 lg:flex-nowrap">
              <p>Energy:</p>
              <p className="font-bold text-[#d6c6f8]">Full</p>
            </div>
            <button className="bg-[#755FBF] px-4 py-1 rounded">
              <p className="text-[#B197EB] text-nowrap">premium</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnergyBento;
