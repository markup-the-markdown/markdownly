import React from 'react';
import PropTypes from 'prop-types';

function File({ title, ind, handleDelete }) {
  return (
    <>
      <p>
        {title}
        <button id={ind} onClick={handleDelete}>Delete</button>
      </p>
    </>
  );
}

File.propTypes = {
  title: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default File;
