import '@mdxeditor/editor/style.css'
import './MXEditor.css'
import { 
    MDXEditor, 
    headingsPlugin,
    quotePlugin,
    listsPlugin,
    thematicBreakPlugin,
    UndoRedo, 
    BoldItalicUnderlineToggles, 
    toolbarPlugin, 
    BlockTypeSelect,
    InsertTable,
    InsertThematicBreak,
    ListsToggle,
    Separator,
    linkPlugin,
    linkDialogPlugin,
    imagePlugin,
    InsertImage,
    tablePlugin,
    AdmonitionDirectiveDescriptor,
    directivesPlugin,
    frontmatterPlugin,
    InsertFrontmatter,
    codeBlockPlugin,
    InsertCodeBlock,
    codeMirrorPlugin
} from '@mdxeditor/editor'


function MXEditor() {

    const markdown = ``

  return <MDXEditor 
   onChange={console.log}
    markdown={markdown}
    plugins={[
        headingsPlugin(),
        quotePlugin(),
        listsPlugin(),
        thematicBreakPlugin(),
        linkPlugin(),
        tablePlugin(),
        frontmatterPlugin(),
        codeBlockPlugin(),
        codeMirrorPlugin({
            codeBlockLanguages: { jsx: 'JavaScript (react)', js: 'JavaScript', css: 'CSS', tsx: 'TypeScript (react)' }
          }),
        directivesPlugin({ directiveDescriptors: [AdmonitionDirectiveDescriptor] }),
        linkDialogPlugin({
            linkAutocompleteSuggestions: ['https://virtuoso.dev', 'https://mdxeditor.dev']
        }),
        imagePlugin({
            imageUploadHandler: () => {
              return Promise.resolve('https://picsum.photos/200/300')
            },
            imageAutocompleteSuggestions: ['https://picsum.photos/200/300', 'https://picsum.photos/200']
          }),
        toolbarPlugin({
            toolbarClassName: 'toolbar',
            toolbarContents: () => (
              <>
                {' '}
                <UndoRedo />
                <BoldItalicUnderlineToggles />
                <BlockTypeSelect/>
                <Separator/>
                <InsertTable/>
                <InsertThematicBreak/>
                <ListsToggle/>
                <InsertImage/>
                <InsertFrontmatter />
                <InsertCodeBlock />
              </>
            )
          })
    ]} 
/>
}

export default MXEditor