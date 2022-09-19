import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom"
import './Login.css'

const Login = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <div className='login-form'>
            <Form
                className='form-style'
                name="normal_login"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Username!',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined />} placeholder="Username" />

                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    {/* <a className="login-form-forgot" href="">
                        Forgot password
                    </a> */}
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    New in this website? <Link to="/">register now!</Link>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Login;