import React, { useRef } from 'react';
import Editor, { Monaco } from '@monaco-editor/react';

const App = () => {
	const editorRef = useRef(null);

	function handleEditorDidMount(editor, monaco) {
		// here is the editor instance
		// you can store it in `useRef` for further usage
		console.log('hhh', editor, monaco);
		editorRef.current = editor;
	}

	return (
		<div className="p-4 bg-gray-50">
			<h2 className="text-4xl text-center font-mono">Simple Notepad</h2>
			<Editor
				height="90vh"
				defaultLanguage="javascript"
				theme="vs-dark"
				defaultValue="// some comment"
				onMount={handleEditorDidMount}
				className="border border-gray-300 rounded"
			/>
		</div>
	);
};

export default App;
