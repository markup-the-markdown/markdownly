import React from 'react';
import PropTypes from 'prop-types';
import File from './File';

function FilesDisplay({ files, handleClick }) {
  const filesList = files.map(file => {
    return <li key={file.id}>
      <File title={file.title}/>
      <button id={file.id} onClick={handleClick}>Edit</button>
    </li>;
  });

  return (
    <ul>
      {filesList}
    </ul>
  );
}

FilesDisplay.propTypes = {
  files: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default FilesDisplay;
