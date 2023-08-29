import { Loader } from '@/components/loader';
import useTextStore from '@/lib/text-store';
import { onInput } from '@/lib/utils';
import Editor from '@monaco-editor/react';
import Head from 'next/head';
import { useRef } from 'react';

const App = () => {
  const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    // here is the editor instance
    // you can store it in `useRef` for further usage

    editorRef.current = editor;
  }
  //   global hooks
  const [text] = useTextStore((s) => [s.text]);

  return (
    <div className=' relative'>
      {/* Add your meta tags here */}
      <Head>
        <title>Free online notepad app</title>
        <meta
          name='description'
          content='Free online notepad app. No login required, 100% Free.'
        />
        {/* Other meta tags */}
      </Head>
      {/* <h2 className="block fixed text-2xl text-right text-white z-50 font-mono">
				built by teja
			</h2> */}
      <Editor
        height='100vh'
        onChange={onInput}
        defaultLanguage='Markdown'
        theme='vs-dark'
        value={text}
        onMount={handleEditorDidMount}
        options={{
          scrollBeyondLastLine: false,
          fontSize: '30px',
        }}
        className='absolute top-0 left-0 right-0 bottom-0 rounded'
      />
      <Loader />
    </div>
  );
};

export default App;
