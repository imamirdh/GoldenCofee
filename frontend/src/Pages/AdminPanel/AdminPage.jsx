import React, { useContext } from "react";
import Sidebar from "../../Components/AdminPanel/menubar/Sidebar";
import Navbar from "../../Components/AdminPanel/menubar/Navbar";
import MobileMenuSidebar from "../../Components/AdminPanel/menubar/MobileMenuSidebar";
import AppContext from "../../Context/AppContext";
import { Outlet } from "react-router-dom";
export default function AdminPage() {
  const contextData = useContext(AppContext);
  return (
    <div className={contextData.isDark ? "App dark" : "App"}>
      {/* {isMobileSidebar && <MobileMenuSidebar />} */}
      <div dir="rtl">
        <div className="font-Vazir flex h-screen bg-slate-50 dark:bg-zinc-800">
          <Sidebar />
          <div className="w-full lg:w-5/6">
            <Navbar />
            <div className=" h-[90%] overflow-y-auto">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
