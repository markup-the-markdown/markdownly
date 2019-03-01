import { connect } from 'react-redux';
import { getTitle } from '../selectors/document';
import { updateFiles, updateTitle } from '../actions/document';
import store from '../store';
import CreateFileForm from '../components/CreateFileForm';

const mapStateToProps = state => ({
  title: getTitle(state)
});

const mapDispatchToProps = dispatch => ({
  handleChange({ target }) {
    dispatch(updateTitle(target.value));
  },
  handleSubmit(event) {
    event.preventDefault();
    dispatch(updateFiles({ title: getTitle(store.getState()) }));
  }
});

const CreateFileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateFileForm);

export default CreateFileContainer;
