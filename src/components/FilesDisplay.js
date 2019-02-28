import React from 'react';
import PropTypes from 'prop-types';
import File from './File';

function FilesDisplay({ titles }) {
  const filesList = titles.map((title, ind) => {
    return <li key={ind}>
      <File title={title}/>
    </li>;
  });

  return (
    <ul>
      {filesList}
    </ul>
  );
}

FilesDisplay.propTypes = {
  titles: PropTypes.array.isRequired
};

export default FilesDisplay;
