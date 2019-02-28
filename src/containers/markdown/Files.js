import React, { PureComponent } from 'react';
import File from '../../components/File';
import store from '../../store';
import { getFiles } from '../../selectors/document';
import PropTypes from 'prop-types';

export default class Files extends PureComponent {
  state = {
    files: [],
    selectedFile: ''
  };

  static propTypes = {
    handleEdit: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({ files: getFiles(store.getState()) });
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  updateSelectedFile = ({ target }) => {
    store.dispatch(update)
  }

  render() {
    const { files } = this.state;

    const filesList = files.map(file => {
      return <li key={file.id}>
        <File title={file.title}/>
        <button id={file.id} onClick={this.updateSelectedFile}></button>
      </li>;
    });

    return (
      <ul>
        {filesList}
      </ul>
    );
  }
}
