import { Breadcrumb } from "antd";
import Link from "next/link";
import React from "react";
import { HomeOutlined } from "@ant-design/icons";

const UMBreadcrumb = ({
  items,
}: {
  items: { title: string; href: string }[];
}) => {
  const breadcrumbItems = [
    {
      title: (
        <Link href="/">
          <HomeOutlined />
        </Link>
      ),
    },
    ...items.map((item) => {
      return {
        title: item.href ? (
          <Link href={item.href}>{item.title}</Link>
        ) : (
          <span>{item.title}</span>
        ),
      };
    }),
  ];

  return <Breadcrumb items={breadcrumbItems} />;
};

export default UMBreadcrumb;
