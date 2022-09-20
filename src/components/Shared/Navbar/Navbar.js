import { Menu } from 'antd';
import Search from 'antd/lib/input/Search';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png"


const onSearch = (value) => console.log(value);

const items = [
    {
        label: (<img
            src={logo}
            style={{
                width: 100,
            }}
            alt=''
        />),
        Key: '0'
    }, {
        label: (<Search
            placeholder="input search text"
            onSearch={onSearch}
            style={{
                width: 200,
                marginTop: 5
            }}
        />),
        Key: '1'
    },
    {
        label: (<Link to="/">Home</Link>),
        key: '2',
    },
    {
        label: (<Link to="/dashboard">Dashboard</Link>),
        key: '3',
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