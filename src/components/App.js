import React from 'react';
import Document from '../containers/markdown/Document';
import Files from '../containers/markdown/Files';

export default function App() {
  return (
    <>
      <h1>Markdown Editor</h1>
      <Files />
      <Document />
    </>
  );
}
