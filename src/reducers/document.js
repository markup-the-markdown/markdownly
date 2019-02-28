import {
  UPDATE_MARKDOWN,
  UPDATE_FILES
} from '../actions/document';

const initialState = {
  markdown: '# Hi there',
  selectedFile: '',
  files: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_MARKDOWN:
      return {
        ...state,
        markdown: action.payload.markdown
      };
    case UPDATE_FILES:
      return { 
        ...state,
        files: [
          ...state.files,
          action.payload
        ]
      };
    default:
      return state;  
  }
}

