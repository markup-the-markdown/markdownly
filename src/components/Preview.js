import React from 'react';
import marked from 'marked';
import styles from 'github-markdown-css/github-markdown.css';
import PropTypes from 'prop-types';

function Preview({ markdown }) {
  const __html = marked(markdown);
  return <div className={styles['markdown-body']} dangerouslySetInnerHTML={{ __html }}></div>;
}

Preview.propTypes = {
  markdown: PropTypes.string.isRequired
};

export default Preview;
