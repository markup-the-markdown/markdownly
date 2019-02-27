import React from 'react';
import marked from 'marked';
import styles from 'github-markdown-css/github-markdown.css';
import { getMarkdown } from '../selectors/document';
import store from '../store';

function Preview() {
  const __html = marked(getMarkdown(store.getState()));
  return <div className={styles['markdown-body']} dangerouslySetInnerHTML={{ __html }}></div>;
}

export default Preview;
