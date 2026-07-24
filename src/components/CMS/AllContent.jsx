import React from "react";
import Navbar from "../Navbar.jsx";
import Sidebar from "../Sidebar.jsx";
import PageContainer from "../Layout/PageContainer.jsx";
import Header from "../Header.jsx";
import ContentFilter from "./Content/ContentFilter.jsx";
import ContentTable from "./Content/ContentTable.jsx";
import { Link } from "react-router-dom";

const AllContent = () => {
  return (
    <div className="w-screen h-screen bg-[#F2F2F3]">
      <Navbar />
      <Sidebar />

      <PageContainer>
        <Header
          parentTitle="Content"
          childTitle="CMS"
          grandChildTitle="Content"
        />

        <div className="pt-4">
          <ContentFilter />

          <button
            className="inline-block bg-[#6A73FC] hover:bg-[#5961e0] text-white text-sm font-medium px-5 py-2.5 rounded-md mb-5 transition-colors cursor-pointer"
          >
            Add Content
          </button>

          <ContentTable />
        </div>

        <footer className="text-center pt-[4em] pb-[0.5em] text-sm text-gray-500">
          <p>
            Copyright © Designed & Developed by{" "}
            <a className="text-[#6a73fa] cursor-pointer">DexignLab</a> 2023
          </p>
        </footer>
      </PageContainer>
    </div>
  );
};

export default AllContent;
