import React, { PureComponent } from 'react';
import File from '../../components/File';
import store from '../../store';
import { getFiles } from '../../selectors/document';
import { updateSelectedFile } from '../../actions/document';

export default class Files extends PureComponent {
  state = {
    files: [],
    selectedFile: 0
  };

  componentDidMount() {
    this.setState({ files: getFiles(store.getState()) });
    this.unsubscribe = store.subscribe(() => {
      this.setState({ files: getFiles(store.getState()) });
      console.log('state from store', store.getState());
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  updateSelectedFile = ({ target }) => {
    store.dispatch(updateSelectedFile(target.id));
  };

  render() {
    const { files } = this.state;

    const filesList = files.map(file => {
      return <li key={file.id}>
        <File file={file}/>
        <button id={file.id} onClick={this.updateSelectedFile}>Edit</button>
      </li>;
    });

    return (
      <ul>
        {filesList}
      </ul>
    );
  }
}
