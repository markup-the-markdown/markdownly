import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './Editor.css';

export default class Editor extends PureComponent {
  static propTypes = {
    updateMarkdown: PropTypes.func.isRequired,
    markdown: PropTypes.string.isRequired
  }; 

  render() {
    const { markdown, updateMarkdown } = this.props;
    return (
      <textarea className={styles.Editor} value={markdown} onChange={updateMarkdown} />
    );
  }
}
