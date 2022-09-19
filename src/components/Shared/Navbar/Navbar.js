import { Menu } from 'antd';
import React, { useState } from 'react';
import { Link } from "react-router-dom";

const items = [
    {
        label: (<Link to="/">Home</Link>),
        key: '1',
    },
    {
        label: (<Link to="/dashboard">Dashboard</Link>),
        key: '2',
    },
    {
        label: (<Link to="/register">Get Started</Link>),
        key: '3',
    },
];

const Navbar = () => {
    const [current, setCurrent] = useState('mail');

    const onClick = e => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default Navbar;