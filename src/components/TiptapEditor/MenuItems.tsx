import { Bold, Code, Highlighter, Italic, Strikethrough } from "lucide-react";

import { Editor } from "@tiptap/core";

const MenuItems = ({ editor }: { editor: Editor }) => {
  return (
    <div className="bubble-menu-container">
      <div
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? "is-active" : "menu-item"}
      >
        <Bold className="h-3 w-3" />
      </div>
      <div
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive("italic") ? "is-active" : "menu-item"}
      >
        <Italic className="h-3 w-3" />
      </div>
      <div
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={editor.isActive("strike") ? "is-active" : "menu-item"}
      >
        <Strikethrough className="h-3 w-3" />
      </div>
      <div
        onClick={() => editor.chain().focus().toggleCode().run()}
        className={editor.isActive("code") ? "is-active" : "menu-item"}
      >
        <Code className="h-3 w-3" />
      </div>
      <div
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        className={editor.isActive("highlight") ? "is-active" : "menu-item"}
      >
        <Highlighter className="h-3 w-3" />
      </div>
      
    </div>
  );
};

export default MenuItems;
