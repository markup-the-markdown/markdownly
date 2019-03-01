import { connect } from 'react-redux';
import React from 'react';
import Preview from '../../components/Preview';
import Editor from '../../components/Editor';
import PropTypes from 'prop-types';
import styles from './Document.css';
import { updateMarkdown } from '../../actions/document';
import { getMarkdown } from '../../selectors/document';

function Document({ markdown, updateMarkdown }) {
  return (
    <>
      <div className={styles.Document}>
        <Editor markdown={markdown} updateMarkdown={updateMarkdown} />
        <Preview markdown={markdown} />
      </div>
      </>
  );
}

Document.propTypes = {
  markdown: PropTypes.string.isRequired,
  updateMarkdown: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  markdown: getMarkdown(state)
});

const mapDispatchToProps = dispatch => ({
  updateMarkdown({ target }) {
    dispatch(updateMarkdown(target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Document);
