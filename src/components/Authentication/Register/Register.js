import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';
import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom"
import { Divider } from 'antd';
import { Card } from 'antd';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import Loading from '../../Loading/Loading';


const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const onFinish = async (values) => {
        console.log('Received values of form: ', values);
        await createUserWithEmailAndPassword(values.email, values.password)
        await updateProfile({ displayName: values.name });
    };

    if (loading || updating || gLoading) {
        return <Loading />
    }

    let errorMessage;

    if (error || updateError || gError) {
        errorMessage = <p style={{ color: '#ff3333' }}>Error: {error?.message}||{updateError?.message}||{gError?.message}</p>
    }

    return (
        <div className='login-form' style={{ backgroundColor: '#ececec' }}>

            <div className="login-card">
                <Card
                    title="Signup Here"
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
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Name!',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined />} placeholder="Your Name" />

                        </Form.Item>
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
                                Register
                            </Button>
                            <div className='register-now'>Already have an account? <Link to="/login">Login now!</Link></div>
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

export default Register;