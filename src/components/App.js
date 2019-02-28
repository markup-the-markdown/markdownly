import React from 'react';
import Document from '../containers/markdown/Document';
import Files from '../containers/markdown/Files';
import CreateFile from '../containers/CreateFile';

export default function App() {
  return (
    <>
      <h1>Markdown Editor</h1>
      <CreateFile />
      <Files />
      <Document />
    </>
  );
}
