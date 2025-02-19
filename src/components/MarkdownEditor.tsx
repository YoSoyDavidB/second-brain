import React, { useState } from 'react';
import SimpleMDE from 'react-simplemde-editor';
import ReactMarkdown from 'react-markdown';
import 'easymde/dist/easymde.min.css';
import './MarkdownEditor.css';

const MarkdownEditor = () => {
  const [value, setValue] = useState('');

  return (
    <div className="markdown-editor-container">
      <SimpleMDE value={value} onChange={setValue} />
      <div className="markdown-preview">
        <ReactMarkdown>{value}</ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownEditor;