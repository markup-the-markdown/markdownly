import React from 'react';
import PropTypes from 'prop-types';

function CreateFileForm({ handleSubmit, title, handleChange }) {
  return (
    <form onSubmit={handleSubmit}>
      <label> 
        Title: 
        <input type="text" name="title" value={title} onChange={handleChange} />
      </label>
      <button type="submit">Create File</button>
    </form>
  );
}

CreateFileForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default CreateFileForm;
