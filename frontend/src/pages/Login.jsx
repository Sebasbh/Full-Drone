import React from 'react';
import { Form, Input, Button } from 'antd';
import '../styles/Login.css';

const Login = () => {
  const onFinish = (values) => {
    console.log('Form values:', values);
    form.resetFields();
    // Aquí puedes realizar la lógica de autenticación con los datos ingresados
    // por el usuario, como enviar una solicitud a un servidor o verificar los datos
    // localmente.
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Form validation failed:', errorInfo);
  };

  const [form] = Form.useForm();

  return (
    <div className="login-container">
      <h2>Login</h2>
      <Form
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="vertical"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            { required: true, message: 'Please enter your username' }
          ]}
        >
          <Input className="login-input" placeholder="Enter your username" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            { required: true, message: 'Please enter your password' }
          ]}
        >
          <Input.Password className="login-input" placeholder="Enter your password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-button" block>Login</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
