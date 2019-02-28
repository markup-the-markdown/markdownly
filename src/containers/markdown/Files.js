import React, { PureComponent } from 'react';
import store from '../../store';
import { getTitles } from '../../selectors/document';
import FilesDisplay from '../../components/FilesDisplay';

export default class Files extends PureComponent {
  state = {
    titles: [],
    selectedFile: 0
  };

  componentDidMount() {
    this.updateFiles();
    this.unsubscribe = store.subscribe(this.updateFiles);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  updateFiles = () =>  this.setState({ titles: getTitles(store.getState()) });

  render() {
    const { titles } = this.state;

    return <FilesDisplay
      titles={titles}
    />;
  }
}
