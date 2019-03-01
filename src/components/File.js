import React from 'react';
import PropTypes from 'prop-types';

function File({ title, ind, handleDelete, handleEdit }) {
  return (
    <>
      <p>
        {title}
        <button id={ind} onClick={handleEdit}>Edit</button>
        <button id={ind} onClick={handleDelete}>Delete</button>
      </p>
    </>
  );
}

File.propTypes = {
  title: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  ind: PropTypes.number.isRequired
};

export default File;
