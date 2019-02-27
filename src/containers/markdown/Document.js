import React, { PureComponent } from 'react';
import store from '../../store';
import Preview from '../Preview';
import Editor from '../Editor';
import styles from './Document.css';
import { updateMarkdown } from '../../actions/document';
import { getMarkdown } from '../../selectors/document';

export default class Document extends PureComponent {
  state = {
    markdown: '# Hi there'
  };

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({ markdown: getMarkdown(store.getState()) });
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  updateMarkdown = ({ target }) => {
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
