import React, { useRef } from 'react';
import Editor, { Monaco } from '@monaco-editor/react';

const App = () => {
	const editorRef = useRef(null);

	function handleEditorDidMount(editor, monaco) {
		// here is the editor instance
		// you can store it in `useRef` for further usage

		editorRef.current = editor;
	}

	return (
		<div className=" relative">
			{/* <h2 className="block fixed text-2xl text-right text-white z-50 font-mono">
				built by teja
			</h2> */}
			<Editor
				height="100vh"
				defaultLanguage="Markdown"
				theme="vs-dark"
				defaultValue="// some comment"
				onMount={handleEditorDidMount}
				options={{
					scrollBeyondLastLine: false,
					fontSize: '30px',
				}}
				className="absolute top-0 left-0 right-0 bottom-0 rounded"
			/>
		</div>
	);
};

export default App;
