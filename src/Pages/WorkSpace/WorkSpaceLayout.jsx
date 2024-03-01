import { Outlet, useNavigate } from "react-router-dom";
import WorkSpaceTopNav from "./WorkSpaceTopNav";
import WorkSpaceSideNav from "./WorkSpaceSideNav";
import { useEffect } from "react";

export default function WorkSpaceLayout() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/home");
    }
  }, []);
  return (
    <div className="w-full flex relative ">
      <WorkSpaceSideNav />
      <div className="flex flex-col w-full">
        <WorkSpaceTopNav />

        <Outlet />
      </div>
    </div>
  );
}
