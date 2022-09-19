import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Link, useNavigate } from "react-router-dom"
import { Divider } from 'antd';
import { Card } from 'antd';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Loading/Loading';
import "./Login.css"

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    const onFinish = async (values) => {
        console.log('Received values of form: ', values);
        await signInWithEmailAndPassword(values.email, values.password)
    };

    if (loading || gLoading) {
        return <Loading />
    }

    let errorMessage;

    if (error || gError) {
        errorMessage = <p style={{ color: '#ff3333' }}>Error: {error?.message}||{gError?.message}</p>
    }

    if (user || gUser) {
        navigate('/dashboard')
    }

    return (
        <div className='login-form' style={{ backgroundColor: '#ececec' }}>

            <div className="login-card">
                <Card
                    title="Login Here"
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
                            name="email"
                            rules={[
                                {
                                    type: 'email',
                                    required: true,
                                    message: 'Please input your valid email!',
                                },
                            ]}
                        >
                            <Input prefix={<MailOutlined />} placeholder="Your Email" />

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
                            <Input.Password
                                prefix={<LockOutlined />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>

                        <Form.Item className='text-left' name="remember" valuePropName="checked">
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item>
                            <Button block type="primary" htmlType="submit">
                                Login
                            </Button>
                            <div className='register-now'>New in this website? <Link to="/register">Register now!</Link></div>
                        </Form.Item>
                    </Form>
                    <div className='text-left'>{errorMessage}</div>
                    <Divider>or</Divider>
                    <Button onClick={() => signInWithGoogle()} type='primary' block>Login with Google</Button>
                </Card>
            </div>
        </div>
    );
};

export default Login;