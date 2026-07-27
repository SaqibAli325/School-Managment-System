import React, { useState } from "react";
import Navbar from "../Navbar.jsx";
import Sidebar from "../Sidebar.jsx";
import PageContainer from "../Layout/PageContainer.jsx";
import Header from "../Header.jsx";
import AddBlogCategoryForm from "./BlogCategory/AddBlogCategoryForm.jsx";
import BlogCategoryList from "./BlogCategory/BlogCategoryList.jsx";

const defaultData = [
  { name: "Beauty" },
  { name: "Fashion" },
  { name: "Lifestyle" },
  { name: "Food" },
  { name: "Beauty" },
  { name: "Fashion" },
  { name: "Lifestyle" },
  { name: "Food" },
  { name: "Lifestyle" },
  { name: "Food" },
  { name: "Fashion" },
  { name: "Lifestyle" },
];

const BlogCategory = () => {
  const [categories, setCategories] = useState(defaultData);

  const handleSave = (category) => {
    setCategories((prev) => [...prev, { name: category.name }]);
  };

  const handleDelete = (item, index) => {
    setCategories((prev) => prev.filter((_, i) => i !== index));
  };

  const handleUp = (item, index) => {
    if (index === 0) return;
    setCategories((prev) => {
      const next = [...prev];
      [next[index - 1], next[index]] = [next[index], next[index - 1]];
      return next;
    });
  };

  const handleDown = (item, index) => {
    setCategories((prev) => {
      if (index === prev.length - 1) return prev;
      const next = [...prev];
      [next[index + 1], next[index]] = [next[index], next[index + 1]];
      return next;
    });
  };

  return (
    <div className="w-screen h-screen bg-[#F2F2F3]">
      <Navbar />
      <Sidebar />

      <PageContainer>
        <Header
          parentTitle="Blog Category"
          childTitle="CMS"
          grandChildTitle="Blog Category"
        />

        <div className="pt-4 grid grid-cols-[1fr_2fr] gap-5 items-start">
          <AddBlogCategoryForm onSave={handleSave} />
          <BlogCategoryList
            data={categories}
            onDelete={handleDelete}
            onUp={handleUp}
            onDown={handleDown}
          />
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

export default BlogCategory;
