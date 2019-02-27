import React, { PureComponent } from 'react';
import marked from 'marked';
import styles from 'github-markdown-css/github-markdown.css';
import PropTypes from 'prop-types';

export default class Preview extends PureComponent {
  static propTypes = {
    markdown: PropTypes.string.isRequired
  }; 

  render() {
    const __html = marked(this.props.markdown);
    return <div className={styles['markdown-body']} dangerouslySetInnerHTML={{ __html }}></div>;
  }
}
