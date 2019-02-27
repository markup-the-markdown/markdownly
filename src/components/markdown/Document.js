import React, { PureComponent } from 'react';
import store from '../../store';
import Preview from './Preview';
import Editor from './Editor';
import styles from './Document.css';
import { updateMarkdown } from '../../selectors/document';

export default class Document extends PureComponent {
  state = {
    markdown: '# Hi there'
  };

  updateMarkdown = ({ target }) => {
    // this.setState({ markdown: target.value });
    store.dispatch(updateMarkdown(target.value));
  };

  render() {
    const { markdown } = this.state;
    return (
      <>
        <div className={styles.Document}>
          <Editor markdown={markdown} updateMarkdown={this.updateMarkdown} />
          <Preview markdown={markdown} />
        </div>
      </>
    );
  }
}
