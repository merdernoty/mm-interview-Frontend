'use client'
import React from 'react'
import  useSidebar  from '@/lib/stores/sidebarStore';

const SideBar = () => {
    const { isSideBarOpened, toggleSidebar } = useSidebar ();

    return (
        <aside className= {` h-screen border-r shadow-sm border-[#323232] z-40 fixed р-full w-[12%]  transition-all duration-300 ${isSideBarOpened ? 'translate-x-0' : '-translate-x-full'}`}>
            <nav className="sticky flex-col bg-mainBlack  ">
                <div onClick={toggleSidebar}
                    className="p-4 pb-2 flex justify-between items-center">
                    menu
                </div>
                <div className="p-4 pb-2 flex justify-between items-center">
                    about us
                </div>
            </nav>
        </aside>
    )
}

export default SideBar