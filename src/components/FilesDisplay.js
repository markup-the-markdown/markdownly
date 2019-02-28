import React from 'react';
import PropTypes from 'prop-types';
import File from './File';

function FilesDisplay({ files }) {
  const filesList = files.map(file => {
    return <li key={file.id}>
      <File title={file.title}/>
    </li>;
  });

  return (
    <ul>
      {filesList}
    </ul>
  );
}

FilesDisplay.propTypes = {
  files: PropTypes.array.isRequired
};

export default FilesDisplay;
