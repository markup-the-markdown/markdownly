import React, { PureComponent } from 'react';
import store from '../../store';
import { getFiles } from '../../selectors/document';
import { updateSelectedFile } from '../../actions/document';
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

  updateSelectedFile = ({ target }) => {
    store.dispatch(updateSelectedFile(target.id));
  };

  render() {
    const { files } = this.state;

    return <FilesDisplay
      files={files}
      handleClick={this.updateSelectedFile}
    />;
  }
}
