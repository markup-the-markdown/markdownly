import { connect } from 'react-redux';
import { getTitles } from '../../selectors/document';
import FilesDisplay from '../../components/FilesDisplay';

const mapStateToProps = (state) => ({
  titles: getTitles(state)
});

const FilesContainer = connect(mapStateToProps)(FilesDisplay);

export default FilesContainer;
