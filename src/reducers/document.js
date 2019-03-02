/* eslint-disable no-case-declarations */
import {
  UPDATE_MARKDOWN,
  UPDATE_FILES,
  UPDATE_TITLE,
  DELETE_FILE,
  UPDATE_FILE_TITLE
} from '../actions/document';

const initialState = {
  title: '',
  markdown: '# Hi there',
  selectedFile: 0,
  files: [
    {
      title: 'a'
    },
    {
      title: 'b'
    },
    {
      title: 'c'
    }
  ]
};

export default function reducer(state = initialState, action) {
  const copy = state.files.slice();
  switch(action.type) {
    case UPDATE_MARKDOWN:
      return {
        ...state,
        markdown: action.payload
      };
    case UPDATE_FILES:
      return { 
        ...state,
        files: [
          ...state.files,
          action.payload
        ]
      };
    case UPDATE_TITLE:
      return {
        ...state,
        title: action.payload
      };
    case DELETE_FILE:
      copy.splice(action.payload, 1);
      return {
        ...state,
        files: copy
      };
    case UPDATE_FILE_TITLE:
      const file = state.files[action.payload.ind];
      file.title = action.payload.title;
      copy.splice(action.payload.ind, 1, file);
      return {
        ...state,
        files: copy      
      };
    default:
      return state;  
  }
}

