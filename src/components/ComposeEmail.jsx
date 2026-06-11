import { useState, useRef } from "react";

export default function ComposeEmail() {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [fileName, setFileName] = useState("No file chosen");
  const [toast, setToast] = useState("");
  const [activeFormats, setActiveFormats] = useState({ bold: false, italic: false });
  const editorRef = useRef(null);
  const fileRef = useRef(null);

function handleHeading(e) {
  const val = e.target.value;
  if (!val) return;

  const editor = editorRef.current;
  editor.focus(); // pehle focus do

  // agar editor bilkul empty hai to ek empty node banao
  if (!editor.innerText.trim()) {
    const tempNode = document.createElement("br");
    editor.appendChild(tempNode);

    const range = document.createRange();
    const sel = window.getSelection();
    range.setStart(editor, 0);
    range.collapse(true);
    sel.removeAllRanges();
    sel.addRange(range); // cursor set karo
  }

  document.execCommand("formatBlock", false, val === "p" ? "p" : val);
  e.target.value = "";
}

  function showToast(msg) {
    setToast(msg);
    setTimeout(() => setToast(""), 2800);
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
    } else if (cmd === "img") {
      const url = prompt("Enter image URL:");
      if (url) document.execCommand("insertImage", false, url);
    } else if (cmd === "media") {
      const url = prompt("Enter media URL:");
      if (url)
        document.execCommand(
          "insertHTML",
          false,
          `<a href="${url}" target="_blank" style="color:#5046e4">${url}</a>`
        );
    } else if (val) {
      document.execCommand(cmd, false, val);
    } else {
      document.execCommand(cmd, false, null);
    }
    updateActive();
  }

  function updateActive() {
    setActiveFormats({
      bold: document.queryCommandState("bold"),
      italic: document.queryCommandState("italic"),
      ul: document.queryCommandState("insertUnorderedList"),
      ol: document.queryCommandState("insertOrderedList"),
    });
  }

  // function handleHeading(e) {
  //   const val = e.target.value;
  //   if (val) {
  //     document.execCommand("formatBlock", false, val === "p" ? "p" : val);
  //     editorRef.current?.focus();
  //   }
  //   e.target.value = "";
  // }

  function handleFile(e) {
    setFileName(e.target.files[0]?.name || "No file chosen");
  }

  function handleSend() {
    const body = editorRef.current?.innerText?.trim();
    if (!to.trim()) return showToast("⚠ Please enter a recipient.");
    if (!body) return showToast("⚠ Message body is empty.");
    const attach = fileName !== "No file chosen" ? ` + attachment: ${fileName}` : "";
    showToast(`✓ Sent to ${to}${attach}`);
    setTo("");
    setSubject("");
    setFileName("No file chosen");
    editorRef.current.innerHTML = "";
    if (fileRef.current) fileRef.current.value = "";
  }

  const tbBtn =
    "flex items-center justify-center px-2 py-1 rounded text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-800 transition-colors cursor-pointer select-none";
  const tbBtnActive = "bg-gray-200 text-gray-900";

  const toolbarButtons = [
    { cmd: "bold", label: <b>B</b>, id: "bold" },
    { cmd: "italic", label: <i className="font-serif italic">I</i>, id: "italic" },
    { cmd: "link", label: "🔗", id: "link" },
    { cmd: "insertUnorderedList", label: "≡", id: "ul" },
    { cmd: "insertOrderedList", label: "⒈", id: "ol" },
    { cmd: "indent", label: "→|", id: "indent" },
  ];

  const toolbarButtons2 = [
    { cmd: "outdent", label: "|←", id: "outdent" },
    { cmd: "formatBlock", val: "blockquote", label: '❝', id: "quote" },
    { cmd: "table", label: "⊞", id: "table" },
    { cmd: "media", label: "▶", id: "media" },
    { cmd: "undo", label: "↩", id: "undo" },
    { cmd: "redo", label: "↪", id: "redo" },
    { cmd: "img", label: "🖼", id: "img" },
  ];

  return (
    <div className="h-full flex items-center justify-center p-4">
      {/* Toast */}
      {toast && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-sm px-5 py-2.5 rounded-lg z-50 shadow-lg transition-all">
          {toast}
        </div>
      )}

      <div className="w-full h-full bg-white border border-gray-200 rounded overflow-hidden shadow-sm p-4">
        {/* To */}
        <div className="flex items-center border-b border-gray-200 rounded-lg overflow-hidden border my-2">
          <span className="text-sm text-gray-500 font-medium px-4 py-2.5 border-r border-gray-200 min-w-16 bg-[#F5F5F5] flex justify-center items-center">
            To
          </span>
          <input
            className="flex-1 px-3 py-2.5 text-sm outline-none bg-transparent text-gray-800 placeholder-gray-400"
            placeholder="Username"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
        </div>

        {/* Subject */}
        <div className="flex items-center border-b border-gray-200 rounded-lg overflow-hidden border my-2">
          <span className="text-sm text-gray-500 font-medium px-4 py-2.5 border-r border-gray-200 min-w-16 bg-[#F5F5F5] flex justify-center items-center">
            Subject
          </span>
          <input
            className="flex-1 px-3 py-2.5 text-sm outline-none bg-transparent text-gray-800 placeholder-gray-400"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>

<div className="bg-[#F5F5F5] rounded">


        <div className="flex items-center gap-1 px-2 py-1.5 border-b border-gray-200 flex-wrap">
          <select
            className="text-sm text-gray-500 border-none outline-none bg-transparent cursor-pointer px-1 py-1 rounded hover:bg-gray-100"
            onChange={handleHeading}
            defaultValue=""
          >
            <option value="" disabled>Choose heading</option>
            <option value="h1">Heading 1</option>
            <option value="h2">Heading 2</option>
            <option value="h3">Heading 3</option>
            <option value="p">Paragraph</option>
          </select>

          <div className="w-px h-4 bg-gray-200 mx-1" />

          {toolbarButtons.map(({ cmd, label, id, val }) => (
            <button
              key={id}
              onMouseDown={(e) => { e.preventDefault(); execCmd(cmd, val); }}
              className={`${tbBtn} ${activeFormats[id] ? tbBtnActive : ""}`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Toolbar Row 2 */}
        <div className="flex items-center gap-1 px-2 py-1.5 border-b border-gray-200 flex-wrap">
          {toolbarButtons2.map(({ cmd, label, id, val }) => (
            <button
              key={id}
              onMouseDown={(e) => { e.preventDefault(); execCmd(cmd, val); }}
              className={tbBtn}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Editor */}
        <style>{`.rich-editor h1{font-size:1.5rem !important}
.rich-editor h2{font-size:1.25rem !important}
.rich-editor h3{font-size:1.125rem !important}
.rich-editor p{font-size:0.875rem !important}
.rich-editor blockquote{font-size:0.95rem !important}`}</style>
        <div
          ref={editorRef}
          contentEditable
          suppressContentEditableWarning
          onKeyUp={updateActive}
          onMouseUp={updateActive}
          data-placeholder="Write your message..."
          className="rich-editor min-h-40 px-4 py-3 text-sm text-gray-800 outline-none leading-relaxed empty:before:content-[attr(data-placeholder)] empty:before:text-gray-400"
        />

        {/* Powered by */}
        <div className="text-right text-[10px] text-gray-400 px-3 pb-1 border-t border-gray-100">
          POWERED BY ✦ RichEditor
        </div>

</div>
        {/* Footer */}
        <div className="flex items-center justify-between  py-3 border-t border-gray-200 gap-3">
          <div className="flex items-center gap-2">
            <label
              htmlFor="file-upload"
              className="text-sm px-3 py-1.5 rounded-md border border-gray-300 cursor-pointer text-gray-600 hover:bg-gray-50 transition-colors"
            >
              Choose File
            </label>
            <input
              id="file-upload"
              type="file"
              className="hidden"
              ref={fileRef}
              onChange={handleFile}
            />
            <span className="text-xs text-gray-400 max-w-32.5 truncate">{fileName}</span>
          </div>

          <button
            onClick={handleSend}
            className="bg-[#6A73FA] cursor-pointer hover:bg-indigo-700 active:scale-95 text-white text-sm font-medium px-5 py-2 rounded transition-all"
          >
            Send
          </button>
        </div>

        {/* Toolbar Row 1 */}
      </div>
    </div>
  );
}
