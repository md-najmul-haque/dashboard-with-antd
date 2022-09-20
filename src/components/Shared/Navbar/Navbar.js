import { Menu } from 'antd';
import Search from 'antd/lib/input/Search';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png"
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { UserOutlined, BellOutlined } from '@ant-design/icons';
import './Navbar.css'

const Navbar = () => {
    const [current, setCurrent] = useState('mail');
    const [user, loading, error] = useAuthState(auth);

    const onSearch = (value) => console.log(value);

    // const items = [
    //     {
    //         label: (<img
    //             src={logo}
    //             style={{
    //                 width: 100,
    //             }}
    //             alt=''
    //         />),
    //         Key: '1'
    //     }, {
    //         label: (<Search
    //             placeholder="input search text"
    //             onSearch={onSearch}
    //             style={{
    //                 width: 200,
    //                 marginTop: 5
    //             }}
    //         />),
    //         Key: '2'
    //     },
    //     {
    //         label: (user ? <> <BellOutlined />  </> : ''),
    //         key: '3',
    //     },
    //     {
    //         label: (user ? <> <UserOutlined /> <span>{user?.displayName}</span> </> : <Link to="/register">Get Started</Link>),
    //         key: '4',
    //     }
    // ];

    const onClick = e => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return (
        <>
            <header className='header-area'>
                <div className='logo'>
                    <img src={logo} alt="logo" />
                </div>
                <div className='search-bar'>
                    <Search
                        placeholder="input search text"
                        onSearch={onSearch}
                        style={{
                            width: 300,
                            marginTop: 5
                        }}
                    />
                </div>
                <div className='header-right'>
                    <BellOutlined />
                    <span className='display-user'>{user ? <> <UserOutlined /> <span>{user?.displayName}</span> </> : <Link to="/register">Get Started</Link>}</span>
                </div>
            </header>
        </>
    );
};

export default Navbar;