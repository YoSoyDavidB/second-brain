import { Heading1, Heading2, Heading3, List, ListOrdered, MessageSquareQuote, Table } from "lucide-react";

import { Editor } from "@tiptap/core";

const FloatingMenuItems = ({ editor }: { editor: Editor }) => {
  return (
    <div className="floating-menu">
      <div
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive("heading", { level: 1 }) ? "is-active" : "menu-item"}
      >
        <Heading1 className="h-4 w-4" />
      </div>
      <div
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive("heading", { level: 2 }) ? "is-active" : "menu-item"}
      >
        <Heading2 className="h-4 w-4" />
      </div>
      <div
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor.isActive("heading", { level: 3 }) ? "is-active" : "menu-item"}
      >
        <Heading3 className="h-4 w-4" />
      </div>
      <hr className="my-2" />
      <div
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive("bulletList") ? "is-active" : "menu-item"}
      >
        <List className="h-4 w-4" />
      </div>
      <div
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive("orderedList") ? "is-active" : "menu-item"}
      >
        <ListOrdered className="h-4 w-4" />
      </div>
      <div
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive("blockquote") ? "is-active" : "menu-item"}
      >
        <MessageSquareQuote className="h-4 w-4" />
      </div>
      <div
        onClick={() => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()}
        className={editor.isActive("table") ? "is-active" : "menu-item"}
      >
        <Table className="h-4 w-4" />
        </div>
    </div>
  );
};

export default FloatingMenuItems;
