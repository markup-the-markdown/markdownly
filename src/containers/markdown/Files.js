import React, { PureComponent } from 'react';
import store from '../../store';
import { getFiles } from '../../selectors/document';
import FilesDisplay from '../../components/FilesDisplay';

export default class Files extends PureComponent {
  state = {
    files: [],
    selectedFile: 0
  };

  componentDidMount() {
    this.updateFiles();
    this.unsubscribe = store.subscribe(this.updateFiles);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  updateFiles = () =>  this.setState({ files: getFiles(store.getState()) });

  render() {
    const { files } = this.state;

    return <FilesDisplay
      files={files}
    />;
  }
}
