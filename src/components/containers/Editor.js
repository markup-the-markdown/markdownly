import React from 'react';
import PropTypes from 'prop-types';
import styles from './Editor.css';
import { getMarkdown } from '../../selectors/document';
import store from '../../store';

function Editor({ updateMarkdown }) {
  return (
    <textarea className={styles.Editor} value={getMarkdown(store.getState())} onChange={updateMarkdown} />
  );
}

Editor.propTypes = {
  updateMarkdown: PropTypes.func.isRequired
};

export default Editor;
