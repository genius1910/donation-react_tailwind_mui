import Header from "./header";
import { Outlet } from "react-router-dom";

const Index = () => {
  return (
    <div className="">
      <Header />
      <Outlet />
    </div>
  );
};

export default Index;
