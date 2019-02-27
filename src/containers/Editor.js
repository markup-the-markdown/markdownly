import React from 'react';
import PropTypes from 'prop-types';
import styles from './Editor.css';

function Editor({ updateMarkdown, markdown }) {
  return (
    <textarea className={styles.Editor} value={markdown} onChange={updateMarkdown} />
  );
}

Editor.propTypes = {
  updateMarkdown: PropTypes.func.isRequired,
  markdown: PropTypes.string.isRequired
};

export default Editor;
