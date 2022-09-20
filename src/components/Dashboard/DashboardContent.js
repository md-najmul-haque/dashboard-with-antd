import React from 'react';
import { Route, Routes } from 'react-router';
import DashboardMainContain from './DashboardMainContain';
import Map from './Map';

const DashboardContent = () => {
    return (
        <div>
            <Routes>
                <Route path="/dashboard" element={<DashboardMainContain />} />
                <Route path="/" element={<Map />} />
                <Route path="/menu" element={<div>Menu</div>} />
                <Route path="/menu" element={<div>Menu</div>} />
            </Routes>
        </div>
    );
};

export default DashboardContent;