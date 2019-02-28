import React from 'react';
import PropTypes from 'prop-types';

function CreateFileForm({ handleSubmit, title }) {
  return (
    <form onSubmit={handleSubmit}>
      <p>Title: </p>
      <input type="text" name="title" value={title} />
      <button type="submit">Create File</button>
    </form>
  );
}

CreateFileForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

export default CreateFileForm;
