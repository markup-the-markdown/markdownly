import React, { PureComponent } from 'react';
import { updateFiles, updateTitle } from '../actions/document';
import { getTitle } from '../selectors/document';
import store from '../store';
import CreateFileForm from '../components/CreateFileForm';

export default class CreateFile extends PureComponent {
  state = {
    title: ''
  };

  componentDidMount() {
    this.unsubscribe = store.subscribe(this.updateTitle);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleChange = ({ target }) => {
    store.dispatch(updateTitle(target.value));
  };

  updateTitle = () => this.setState({ title: getTitle(store.getState()) });

  handleSubmit = event => {
    event.preventDefault();
    const newFile = {
      title: this.state.title
    };
    store.dispatch(updateFiles(newFile));
  };

  render() {
    return (
      <CreateFileForm 
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        title={this.state.title}
      />
    );
  }
}
