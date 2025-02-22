import "@mdxeditor/editor/style.css";
import "./MXEditor.css";
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
  codeMirrorPlugin,
  diffSourcePlugin,
  markdownShortcutPlugin,
} from "@mdxeditor/editor";

function MXEditor() {
  const markdown = `> This is a quote
  # Heading 1
  `;

  return (
    <MDXEditor
      onChange={console.log}
      markdown={markdown}
      className="dark-editor"
      contentEditableClassName="editor-content"
      plugins={[
        /*headingsPlugin(),
        quotePlugin(),
        listsPlugin(),
        thematicBreakPlugin(),
        linkPlugin(),
        tablePlugin(),
        frontmatterPlugin(),
        codeBlockPlugin(),
        codeMirrorPlugin({
          codeBlockLanguages: {
            jsx: "JavaScript (react)",
            js: "JavaScript",
            css: "CSS",
            tsx: "TypeScript (react)",
          },
        }),
        directivesPlugin({
          directiveDescriptors: [AdmonitionDirectiveDescriptor],
        }),
        linkDialogPlugin({
          linkAutocompleteSuggestions: [
            "https://virtuoso.dev",
            "https://mdxeditor.dev",
          ],
        }),
        imagePlugin({
          imageUploadHandler: () => {
            return Promise.resolve("https://picsum.photos/200/300");
          },
          imageAutocompleteSuggestions: [
            "https://picsum.photos/200/300",
            "https://picsum.photos/200",
          ],
        }),*/
        listsPlugin(),
        quotePlugin(),
        headingsPlugin(),
        linkPlugin(),
        linkDialogPlugin(),
        imagePlugin(),
        tablePlugin(),
        thematicBreakPlugin(),
        frontmatterPlugin(),
        codeBlockPlugin({ defaultCodeBlockLanguage: 'txt' }),
        codeMirrorPlugin({ codeBlockLanguages: { js: 'JavaScript', css: 'CSS', txt: 'text', tsx: 'TypeScript', sql: 'sql' } }),
        directivesPlugin({ directiveDescriptors: [AdmonitionDirectiveDescriptor] }),
        diffSourcePlugin({ viewMode: 'rich-text', diffMarkdown: 'boo' }),
        markdownShortcutPlugin(),
        toolbarPlugin({
          toolbarClassName: "toolbar",
          toolbarContents: () => (
            <>
              {" "}
              <UndoRedo />
              <BoldItalicUnderlineToggles />
              <BlockTypeSelect />
              <InsertTable />
              <InsertThematicBreak />
              <Separator />
              <ListsToggle />
              <Separator />
              <InsertImage />
              <InsertFrontmatter />
              <InsertCodeBlock />
            </>
          ),
        }),
      ]}
    />
  );
}

export default MXEditor;
