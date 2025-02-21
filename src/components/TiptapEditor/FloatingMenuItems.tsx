import { Heading1, Heading2, Heading3, List, ListOrdered, MessageSquareQuote, Table } from "lucide-react";

import { Editor } from "@tiptap/core";

const FloatingMenuItems = ({ editor }: { editor: Editor }) => {
  return (
    <div className="floating-menu">
      Format
      <div
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive("heading", { level: 1 }) ? "is-active" : ""}
      >
        <Heading1 className="h-4 w-4" />
      </div>
      <div
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive("heading", { level: 2 }) ? "is-active" : ""}
      >
        <Heading2 className="h-4 w-4" />
      </div>
      <div
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor.isActive("heading", { level: 3 }) ? "is-active" : ""}
      >
        <Heading3 className="h-4 w-4" />
      </div>
      <hr className="my-2" />
      Order
      <div
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive("bulletList") ? "is-active" : ""}
      >
        <List className="h-4 w-4" />
      </div>
      <div
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive("orderedList") ? "is-active" : ""}
      >
        <ListOrdered className="h-4 w-4" />
      </div>
      <div
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive("blockquote") ? "is-active" : ""}
      >
        <MessageSquareQuote className="h-4 w-4" />
      </div>
      Insert
      <div
        onClick={() => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()}
      >
        <Table className="h-4 w-4" />
        </div>
    </div>
  );
};

export default FloatingMenuItems;
