import { Outlet } from "react-router-dom";

const DashboardPageLayout = () => {
  return (
      <>
        <div>
            <h1>Dashboard</h1>
        </div>
        <Outlet />
      </>
  );
};

export default DashboardPageLayout;