import React, { useRef, useState } from "react";

const ContentEditorForm = ({ title, onTitleChange }) => {
  const editorRef = useRef(null);
  const [activeFormats, setActiveFormats] = useState({});

  const tbBtn =
    "flex items-center justify-center min-w-8 h-8 px-2 rounded text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-800 transition-colors cursor-pointer select-none border border-transparent";
  const tbBtnActive = "bg-gray-200 text-gray-900 border-gray-200";

  function updateActive() {
    setActiveFormats({
      bold: document.queryCommandState("bold"),
      italic: document.queryCommandState("italic"),
      ul: document.queryCommandState("insertUnorderedList"),
      ol: document.queryCommandState("insertOrderedList"),
    });
  }

  function execCmd(cmd, val = null) {
    editorRef.current?.focus();
    if (cmd === "link") {
      const url = prompt("Enter URL:");
      if (url) document.execCommand("createLink", false, url);
    } else if (cmd === "table") {
      document.execCommand(
        "insertHTML",
        false,
        `<table border="1" style="border-collapse:collapse;width:100%;font-size:13px">
          <tr><td style="padding:6px">Cell 1</td><td style="padding:6px">Cell 2</td></tr>
          <tr><td style="padding:6px">Cell 3</td><td style="padding:6px">Cell 4</td></tr>
        </table><p></p>`
      );
    } else if (cmd === "media") {
      const url = prompt("Enter media URL:");
      if (url)
        document.execCommand(
          "insertHTML",
          false,
          `<a href="${url}" target="_blank" style="color:#6A73FC">${url}</a>`
        );
    } else if (cmd === "img") {
      const url = prompt("Enter image URL:");
      if (url) document.execCommand("insertImage", false, url);
    } else if (val) {
      document.execCommand(cmd, false, val);
    } else {
      document.execCommand(cmd, false, null);
    }
    updateActive();
  }

  function handleHeading(e) {
    const val = e.target.value;
    if (!val) return;
    editorRef.current?.focus();
    document.execCommand("formatBlock", false, val);
  }

  const rowOneButtons = [
    { cmd: "bold", label: <b>B</b>, id: "bold" },
    { cmd: "italic", label: <i className="font-serif">I</i>, id: "italic" },
    { cmd: "link", label: "🔗", id: "link" },
    { cmd: "insertUnorderedList", label: "☰", id: "ul" },
    { cmd: "insertOrderedList", label: "⒈", id: "ol" },
    { cmd: "indent", label: "⇥", id: "indent" },
    { cmd: "outdent", label: "⇤", id: "outdent" },
    { cmd: "formatBlock", val: "blockquote", label: "❝", id: "quote" },
    { cmd: "table", label: "⊞", id: "table" },
    { cmd: "media", label: "▶", id: "media" },
  ];

  const rowTwoButtons = [
    { cmd: "undo", label: "↩", id: "undo" },
    { cmd: "redo", label: "↪", id: "redo" },
    { cmd: "img", label: "🖼", id: "img" },
  ];

  return (
    <div className="bg-white rounded shadow-sm p-5 mb-5">
      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => onTitleChange && onTitleChange(e.target.value)}
          className="w-full border border-gray-200 rounded-md px-3 py-2.5 text-sm text-gray-600 bg-[#F5F5F5] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6A73FC]/30"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
        <div className="border border-gray-200 rounded-md overflow-hidden">
          <div className="flex items-center gap-1 px-2 py-1.5 border-b border-gray-200 bg-white flex-wrap">
            <select
              onChange={handleHeading}
              defaultValue="p"
              className="text-sm text-gray-600 border border-gray-200 rounded px-2 py-1.5 outline-none cursor-pointer hover:bg-gray-50 mr-1"
            >
              <option value="p">Paragraph</option>
              <option value="h1">Heading 1</option>
              <option value="h2">Heading 2</option>
              <option value="h3">Heading 3</option>
            </select>

            <div className="w-px h-5 bg-gray-200 mx-1" />

            {rowOneButtons.map(({ cmd, label, id, val }) => (
              <button
                key={id}
                type="button"
                onMouseDown={(e) => {
                  e.preventDefault();
                  execCmd(cmd, val);
                }}
                className={`${tbBtn} ${activeFormats[id] ? tbBtnActive : ""}`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1 px-2 py-1.5 border-b border-gray-200 bg-white flex-wrap">
            {rowTwoButtons.map(({ cmd, label, id, val }) => (
              <button
                key={id}
                type="button"
                onMouseDown={(e) => {
                  e.preventDefault();
                  execCmd(cmd, val);
                }}
                className={tbBtn}
              >
                {label}
              </button>
            ))}
          </div>

          <style>{`.content-rich-editor h1{font-size:1.5rem !important}
.content-rich-editor h2{font-size:1.25rem !important}
.content-rich-editor h3{font-size:1.125rem !important}
.content-rich-editor p{font-size:0.875rem !important}
.content-rich-editor blockquote{border-left:3px solid #6A73FC;padding-left:0.75rem;color:#737B8B}`}</style>

          <div
            ref={editorRef}
            contentEditable
            suppressContentEditableWarning
            onKeyUp={updateActive}
            onMouseUp={updateActive}
            data-placeholder="Write content here..."
            className="content-rich-editor bg-[#F5F5F5] min-h-[280px] px-4 py-3 text-sm text-gray-800 outline-none leading-relaxed empty:before:content-[attr(data-placeholder)] empty:before:text-gray-400"
          />
        </div>
      </div>
    </div>
  );
};

export default ContentEditorForm;
