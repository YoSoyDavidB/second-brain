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
import './styles.css'
import MenuItems from './MenuItems'

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
      <div className="button-group">
          <button
            onClick={() => editor?.chain().focus().toggleBulletList().run()}
            className={editor?.isActive('bulletList') ? 'is-active' : ''}
          >
            Toggle bullet list
          </button>
          <button
            onClick={() => editor?.chain().focus().splitListItem('listItem').run()}
            disabled={!editor?.can().splitListItem('listItem')}
          >
            Split list item
          </button>
          <button
            onClick={() => editor?.chain().focus().sinkListItem('listItem').run()}
            disabled={!editor?.can().sinkListItem('listItem')}
          >
            Sink list item
          </button>
          
        </div>
      {editor && <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
      <MenuItems editor={editor} />
      </BubbleMenu>}
      {editor && <FloatingMenu editor={editor} tippyOptions={{ duration: 100 }}>
        <div data-testid="floating-menu" className="floating-menu">
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
          >
            H1
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
          >
            H2
          </button>
          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={editor.isActive('bulletList') ? 'is-active' : ''}
          >
            Bullet list
          </button>
          <button
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={editor.isActive('orderedList') ? 'is-active' : ''}
          >
            Toggle ordered list
          </button>
        </div>
      </FloatingMenu>}
      <EditorContent editor={editor} className='pl-10'/>
    </div>
  )
}

export default Tiptap