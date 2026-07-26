import React, { useState } from "react";
import Navbar from "../Navbar.jsx";
import Sidebar from "../Sidebar.jsx";
import PageContainer from "../Layout/PageContainer.jsx";
import Header from "../Header.jsx";
import { Link } from "react-router-dom";
import ContentEditorForm from "./Content/ContentEditorForm.jsx";
import AccordionCard from "./Content/AccordionCard.jsx";
import PublishBox from "./Content/PublishBox.jsx";
import FeaturedImageBox from "./Content/FeaturedImageBox.jsx";

const AddContent = () => {
  const [title, setTitle] = useState("");
  const [customFields, setCustomFields] = useState([]);
  const [fieldTitle, setFieldTitle] = useState("");
  const [fieldValue, setFieldValue] = useState("");
  const [allowComments, setAllowComments] = useState(false);
  const [slug, setSlug] = useState("");

  const handleAddCustomField = () => {
    if (!fieldTitle.trim()) return;
    setCustomFields([...customFields, { title: fieldTitle, value: fieldValue }]);
    setFieldTitle("");
    setFieldValue("");
  };

  const inputClass =
    "w-full border border-gray-200 rounded-md px-3 py-2.5 text-sm text-gray-600 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6A73FC]/30";
  const labelClass = "block text-sm font-medium text-gray-700 mb-2";

  return (
    <div className="w-screen h-screen bg-[#F2F2F3]">
      <Navbar />
      <Sidebar />

      <PageContainer>
        <Header parentTitle="Add Content" childTitle="CMS" grandChildTitle="Add Content" />

        <div className="pt-4">
          <div className="flex flex-wrap gap-3 mb-5">
            <Link
              to="/cms-content"
              className="inline-block bg-[#6A73FC] hover:bg-[#5961e0] text-white text-sm font-medium px-5 py-2.5 rounded-md transition-colors cursor-pointer"
            >
              Content List
            </Link>
            <button className="inline-block bg-[#6A73FC] hover:bg-[#5961e0] text-white text-sm font-medium px-5 py-2.5 rounded-md transition-colors cursor-pointer">
              Screen Option
            </button>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 items-start">
            {/* Left column */}
            <div className="xl:col-span-2">
              <ContentEditorForm title={title} onTitleChange={setTitle} />

              <AccordionCard title="Custom Fields">
                <p className="text-sm font-medium text-gray-700 mb-3">Add New Custom Field:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className={labelClass}>Title</label>
                    <input
                      type="text"
                      placeholder="Title"
                      value={fieldTitle}
                      onChange={(e) => setFieldTitle(e.target.value)}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Value</label>
                    <textarea
                      rows={1}
                      value={fieldValue}
                      onChange={(e) => setFieldValue(e.target.value)}
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                </div>
                <button
                  onClick={handleAddCustomField}
                  className="bg-[#6A73FC] hover:bg-[#5961e0] text-white text-sm font-medium px-4 py-2.5 rounded-md transition-colors cursor-pointer mb-4"
                >
                  Add Custom Field
                </button>
                <p className="text-xs text-gray-400">
                  Custom fields can be used to extra metadata to a post that you can use in your theme.
                </p>

                {customFields.length > 0 && (
                  <div className="mt-4 flex flex-col gap-2">
                    {customFields.map((f, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between border border-gray-100 rounded-md px-3 py-2 text-sm text-gray-600"
                      >
                        <span className="font-medium">{f.title}</span>
                        <span className="text-gray-400">{f.value || "—"}</span>
                      </div>
                    ))}
                  </div>
                )}
              </AccordionCard>

              <AccordionCard title="Discussion">
                <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={allowComments}
                    onChange={(e) => setAllowComments(e.target.checked)}
                    className="w-4 h-4 accent-[#6A73FC] cursor-pointer"
                  />
                  Allow comments.
                </label>
              </AccordionCard>

              <AccordionCard title="Slug">
                <label className={labelClass}>Slug</label>
                <input
                  type="text"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  className={inputClass}
                />
              </AccordionCard>

              <AccordionCard title="Author">
                <label className={labelClass}>User</label>
                <select className={`${inputClass} cursor-pointer`} defaultValue="admin@gmail.com">
                  <option value="admin@gmail.com">admin@gmail.com</option>
                </select>
              </AccordionCard>

              <AccordionCard title="Seo">
                <div className="mb-4">
                  <label className={labelClass}>Page Title</label>
                  <input type="text" placeholder="Page title" className={inputClass} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Keywords</label>
                    <input type="text" placeholder="Enter meta Keywords" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Descriptions</label>
                    <textarea
                      rows={1}
                      placeholder="Enter meta Keywords"
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                </div>
              </AccordionCard>
            </div>

            {/* Right column */}
            <div className="xl:col-span-1">
              <PublishBox />

              <AccordionCard title="Page Attributes">
                <label className={labelClass}>Title</label>
                <select className={`${inputClass} cursor-pointer`} defaultValue="">
                  <option value="">(No Parent)</option>
                </select>
              </AccordionCard>

              <AccordionCard title="Page Type">
                <label className={labelClass}>Content Type</label>
                <select className={`${inputClass} cursor-pointer`} defaultValue="page">
                  <option value="page">Page</option>
                  <option value="post">Post</option>
                </select>
              </AccordionCard>

              <FeaturedImageBox />
            </div>
          </div>
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

export default AddContent;
