"use client";

import React from "react";
import { Layout } from "antd";
import UMBreadcrumb from "./UMBreadcrumb";

const { Content } = Layout;

const Contents = ({ children }: { children: React.ReactNode }) => {
  return (
    <Content
      style={{
        minHeight: "100vh",
        color: "black",
      }}>
      <UMBreadcrumb
        items={[
          {
            title: "Home",
            href: "/",
          },
          {
            title: "Dashboard",
            href: "/dashboard",
          },
        ]}
      />
      {children}
    </Content>
  );
};

export default Contents;
