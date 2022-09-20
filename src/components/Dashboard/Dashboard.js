import { LaptopOutlined, NotificationOutlined, UserOutlined, HomeOutlined, MenuOutlined, AimOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'
import DashboardContent from './DashboardContent';

const { Content, Sider } = Layout;

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
    const key = String(index + 1);
    return {
        key: `sub${key}`,
        icon: React.createElement(icon),
        label: `subnav ${key}`,
        children: new Array(4).fill(null).map((_, j) => {
            const subKey = index * 4 + j + 1;
            return {
                key: subKey,
                label: `option${subKey}`,
            };
        }),
    };
});

const Dashboard = () => {
    const items1 = [
        {
            label: 'Dashboard',
            icon: <HomeOutlined />,
            Key: '1'
        }, {
            label: 'Maps',
            icon: <AimOutlined />,
            Key: '2'
        },
        {
            label: 'Menu',
            icon: <MenuOutlined />,
            key: '3',
        },
        {
            label: <Link to="/register">Menu</Link>,
            icon: <MenuOutlined />,
            key: '4',
        }
    ]

    const items2 = [
        {
            label: 'Dashboard',
            icon: <HomeOutlined />,
            Key: '11'
        }, {
            label: 'Maps',
            icon: <AimOutlined />,
            Key: '12'
        },
        {
            label: 'Menu',
            icon: <MenuOutlined />,
            key: '13',
        },
        {
            label: <Link to="/register">Menu</Link>,
            icon: <MenuOutlined />,
            key: '14',
        }
    ]

    return (

        <Layout
            className="site-layout-background"
            style={{
                padding: '24px 0',
            }}
        >
            <Sider className="site-layout-background side-bar">
                <p className='dashboard-menu-header'>Menu</p>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    items={items1}
                />

                <p className='dashboard-menu-header'>Others</p>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['11']}
                    defaultOpenKeys={['sub11']}
                    items={items2}
                />
            </Sider>
            <Content
                style={{
                    padding: '0 24px',
                    minHeight: 280,
                }}
            >
                <DashboardContent />
            </Content>
        </Layout>

    )
};

export default Dashboard;