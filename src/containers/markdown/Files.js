import { connect } from 'react-redux';
import { getTitles } from '../../selectors/document';
import { deleteFile } from '../../actions/document';
import FilesDisplay from '../../components/FilesDisplay';

const mapStateToProps = state => ({
  titles: getTitles(state)
});

const mapDispatchToProps = dispatch => ({
  handleDelete({ target }) {
    dispatch(deleteFile(target.id));
  }
});

const FilesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilesDisplay);

export default FilesContainer;
