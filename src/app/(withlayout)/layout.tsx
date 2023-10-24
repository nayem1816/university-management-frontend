import Sidebar from "@/components/ui/Sidebar";
import { Layout } from "antd";
import Contents from "./../../components/ui/Content";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout>
      <Sidebar />
      <Contents>{children}</Contents>
    </Layout>
  );
};

export default DashboardLayout;
