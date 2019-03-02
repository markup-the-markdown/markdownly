import React from 'react';
import PropTypes from 'prop-types';
import File from './File';

function FilesDisplay({ titles, handleDelete, handleEdit }) {
  const filesList = titles.map((title, ind) => {
    return <li key={ind}>
      <File 
        title={title}
        ind={ind}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </li>;
  });

  return (
    <ul>
      {filesList}
    </ul>
  );
}

FilesDisplay.propTypes = {
  titles: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired
};

export default FilesDisplay;
