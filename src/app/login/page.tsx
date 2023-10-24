"use client";

import React from "react";
import { Button, Col, Row } from "antd";
import loginImage from "../../assets/Mobile login-amico.png";
import Image from "next/image";
import Form from "./../../components/forms/Form";
import FormInput from "@/components/forms/FormInput";
import { SubmitHandler } from "react-hook-form";

type FormValues = {
  id: string;
  password: string;
};

const LoginPage = () => {
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{
        minHeight: "100vh",
      }}>
      <Col sm={12} md={16} lg={10}>
        <Image src={loginImage} width={500} alt="login" />
      </Col>
      <Col sm={12} md={8} lg={8}>
        <h1>Log In</h1>
        <div
          style={{
            margin: "15px 0",
          }}>
          <Form submitHandler={onSubmit}>
            <div>
              <FormInput name="id" type="text" size="large" level="User ID" />
            </div>
            <div style={{
              margin: "15px 0",
            }}>
              <FormInput
                name="password"
                type="password"
                size="large"
                level="Password"
              />
            </div>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default LoginPage;
