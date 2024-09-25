import React, { useState } from "react";
import Switch from "react-switch";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import adminbg2 from "./data/adminbg2.webp";

const AdminPage = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative flex flex-col h-screen overflow-visible">
   
      {/* <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${adminbg2})`,
          filter: 'blur(2px)',
          minHeight: '350vh',
          zIndex: -5,
        }}
      /> */}
      

      <div className="absolute inset-0 " style={{ zIndex: -1 }} />

      <div className="flex flex-col flex-1 z-10 relative ">
     
        <Header className="bg-cyan-700 text-zinc-900 p-4 shadow-md " />

    
        <div className="flex items-center justify-center m-4 lg:hidden">
          <label className="mr-2 text-cyan-500">Toggle Sidebar</label>
          <Switch
            onChange={toggleSidebar}
            checked={isSidebarOpen}
            offColor="#f1f5f9"
            onColor="#06b6d4"
            uncheckedIcon={false}
            checkedIcon={false}
          />
        </div>

   
        <div className="flex flex-1 flex-col lg:flex-row">
    
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            className={`bg-zinc-800 text-cyan-50 p-4 shadow-lg fixed top-0 left-0 h-full transition-transform duration-300 ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } lg:relative lg:translate-x-0`}
          />
       
          <main
            className={`flex-1 p-4 overflow-auto transition-all duration-300 ${
              isSidebarOpen ? "ml-0" : "lg:ml-[16rem]"
            }`}
          >
            <div className="table-container w-full">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
