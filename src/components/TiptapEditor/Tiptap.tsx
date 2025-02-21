import CharacterCount from '@tiptap/extension-character-count'
import Highlight from '@tiptap/extension-highlight'
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'
import { BubbleMenu, EditorContent, FloatingMenu, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import { all, createLowlight } from 'lowlight'
import css from 'highlight.js/lib/languages/css'
import js from 'highlight.js/lib/languages/javascript'
import ts from 'highlight.js/lib/languages/typescript'
import html from 'highlight.js/lib/languages/xml'
import sql from 'highlight.js/lib/languages/sql'
import Placeholder from '@tiptap/extension-placeholder'
import BulletList from '@tiptap/extension-bullet-list'
import OrderedList from '@tiptap/extension-ordered-list'
import ListItem from '@tiptap/extension-list-item'
import Underline from '@tiptap/extension-underline'
import Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
import './styles.css'
import MenuItems from './MenuItems'
import FloatingMenuItems from './FloatingMenuItems'

const lowlight = createLowlight(all)

// This is only an example, all supported languages are already loaded above
// but you can also register only specific languages to reduce bundle-size
lowlight.register('html', html)
lowlight.register('css', css)
lowlight.register('js', js)
lowlight.register('ts', ts)
lowlight.register('sql', sql)

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure(),
      Highlight,
      TaskList,
      TaskItem,
      BulletList,
      OrderedList,
      ListItem,
      Underline,
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
      Placeholder.configure({
        placeholder: 'Log entry title …'
      }),
      CharacterCount.configure({
        limit: 10000,
      }),
      CodeBlockLowlight.configure({
        lowlight,
      }),
    ],
  })
  return (
    <div className="editor bg-black text-white h-96">
      {editor && <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
      <MenuItems editor={editor} />
      </BubbleMenu>}
      {editor && <FloatingMenu editor={editor} tippyOptions={{ duration: 100 }}>
        <FloatingMenuItems editor={editor} />
      </FloatingMenu>}
      <EditorContent editor={editor} className='pl-10'/>
    </div>
  )
}

export default Tiptap