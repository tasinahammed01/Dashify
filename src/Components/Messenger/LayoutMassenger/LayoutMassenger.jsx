import React from 'react';
import SideBar from '../sideBar/sideBar';
import ChatWindow from '../ChatWindow/ChatWindow';

const LayoutMassenger = () => {
    return (
        <div className='flex h-screen'>
            <SideBar></SideBar>
            <ChatWindow></ChatWindow>
        </div>
    );
};

export default LayoutMassenger;