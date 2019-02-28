import React, { PureComponent } from 'react';
import { updateFiles } from '../actions/document';
import store from '../store';
import CreateFileForm from '../components/CreateFileForm';

export default class CreateFile extends PureComponent {
  state = {
    title: ''
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  };

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
