import React from 'react'
import './style.Login.css';
import Luke from '../../assets/luke.jpg';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined, } from '@ant-design/icons';





const Login = () => {


    const onFinish = (values) => {
        console.log('Received values:', values);
        // Handle login logic here, e.g., make an API request
    };




    return (
        <div className='login-container'>
            <div className='container'>
                <div className='container-header'>
                    <h2><i></i> Tocly</h2>
                    <p className='container-header-txt'>User Experience & Interface Design Strategy Saas Solution</p>
                </div>

                <div className='login-form-container'>
                    <div className='side-image'>
                        <img className='side-image-display' src={Luke} alt="" />
                    </div>


                    <div className="login-form">
                        <div className='login-form-header'>
                            <h1>Welcome Back !</h1>
                            <p className='login-form-paragraph'>Sign in to continue to Tocly.</p>
                        </div>
                        <Form
                            name="normal_login"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                        >
                            <Form.Item
                                name="username"
                                rules={[{ required: true, message: 'Please input your Username!' }]}>
                                <Input
                                    prefix={<UserOutlined className="site-form-item-icon" />}
                                    placeholder="Enter username"
                                    className='Username'
                                />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: 'Please input your Password!' }]}
                            >
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Enter password"
                                    className='password'
                                />
                            </Form.Item>
                            <Form.Item>
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox className='checkbox'>Remember me</Checkbox>
                                </Form.Item>

                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Sign in
                                </Button>

                            </Form.Item>
                        </Form>
                        <div>
                            <p className='login-form-footer'>Sign in with</p>
                            <div className="login-form-social">
                                <Button className="social-button facebook" icon={<i className="fab fa-facebook-f"></i>} />
                                <Button className="social-button google" icon={<i className="fab fa-google"></i>} />
                                <Button className="social-button github" icon={<i className="fab fa-github"></i>} />
                                <Button className="social-button twitter" icon={<i className="fab fa-twitter"></i>} />
                            </div>

                            <h3> Don't have an account? <a href="/">Register</a></h3>
                        </div>

                    </div>

                </div>


            </div>

        </div>
    )
}

export default Login
