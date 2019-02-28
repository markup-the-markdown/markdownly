import React from 'react';
import PropTypes from 'prop-types';

function File({ title }) {
  return <p>{title}</p>;
}

File.propTypes = {
  title: PropTypes.string.isRequired
};

export default File;
