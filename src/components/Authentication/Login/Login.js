import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom"
import './Login.css'
import { Divider } from 'antd';
import { Card } from 'antd';

const Login = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <div className='login-form' style={{ backgroundColor: '#ececec' }}>

            <div className="login-card">
                <Card
                    title="Please Login"
                    bordered={false}
                    style={{
                        width: 400,
                        textAlign: 'center',
                    }}
                >
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

                        <Form.Item className='remember-me' name="remember" valuePropName="checked">
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item>
                            <Button block type="primary" htmlType="submit">
                                Log in
                            </Button>
                            <div className='register-now'>New in this website? <Link to="/">register now!</Link></div>
                            <Divider>or</Divider>
                            <Button type='primary' block>Login with Google</Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>


        </div>
    );
};

export default Login;