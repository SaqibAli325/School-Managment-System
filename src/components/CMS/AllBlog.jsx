import React from "react";
import Navbar from "../Navbar.jsx";
import Sidebar from "../Sidebar.jsx";
import PageContainer from "../Layout/PageContainer.jsx";
import Header from "../Header.jsx";
import BlogFilter from "./Blog/BlogFilter.jsx";
import BlogTable from "./Blog/BlogTable.jsx";
import { Link } from "react-router-dom";

const AllBlog = () => {
  return (
    <div className="w-screen h-screen bg-[#F2F2F3]">
      <Navbar />
      <Sidebar />

      <PageContainer>
        <Header
          parentTitle="Blog"
          childTitle="CMS"
          grandChildTitle="Blog"
        />

        <div className="pt-4">
          <BlogFilter />

          <div className="flex flex-wrap gap-3 mb-5">
            <Link
              to="/cms-add-blog"
              className="inline-block bg-[#6A73FC] hover:bg-[#5961e0] text-white text-sm font-medium px-5 py-2.5 rounded-md transition-colors cursor-pointer"
            >
              Add Blog
            </Link>
            <Link
              to="/cms-blog-category"
              className="inline-block bg-[#6A73FC] hover:bg-[#5961e0] text-white text-sm font-medium px-5 py-2.5 rounded-md transition-colors cursor-pointer"
            >
              Blog Category
            </Link>
            <Link
              to="/cms-blog-category"
              className="inline-block bg-[#6A73FC] hover:bg-[#5961e0] text-white text-sm font-medium px-5 py-2.5 rounded-md transition-colors cursor-pointer"
            >
              Add Blog Category
            </Link>
          </div>

          <BlogTable />
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

export default AllBlog;
