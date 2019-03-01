import React from 'react';
import { connect } from 'react-redux';
import { getTitles } from '../../selectors/document';
import FilesDisplay from '../../components/FilesDisplay';

function Files({ titles }) {
  return (
    <FilesDisplay
      titles={titles}
    />
  );
}
  
const mapStateToProps = (state) => ({
  titles: getTitles(state)
});

const mapDispatchToProps = dispatch => ({
  
})
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

    return 
  }
}
