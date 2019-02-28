import React from 'react';
import PropTypes from 'prop-types';

function File({ file }) {
  return <p>{file.title}</p>;
}

File.propTypes = {
  file: PropTypes.object.isRequired
};

export default File;
