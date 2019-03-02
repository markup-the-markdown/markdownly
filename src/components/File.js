import React from 'react';
import PropTypes from 'prop-types';

function File({ title, ind, handleDelete, handleEdit }) {
  return (
    <>
      <p>
        {title}<br />
        <label>
          Edit title:
          <input type='text' id={ind} value={title} onChange={handleEdit}/>
        </label><br />
        <button id={ind} onClick={handleDelete}>Delete File</button>
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
