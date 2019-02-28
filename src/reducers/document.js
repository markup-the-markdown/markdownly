import {
  UPDATE_MARKDOWN,
  UPDATE_FILES,
  UPDATE_SELECTED_FILE
} from '../actions/document';

const initialState = {
  markdown: '# Hi there',
  selectedFile: 0,
  files: [
    {
      id: 0,
      title: 'a'
    },
    {
      id: 1,
      title: 'b'
    },
    {
      id: 2,
      title: 'c'
    }
  ]
};

export default function reducer(state = initialState, action) {
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
    case UPDATE_SELECTED_FILE:
      return {
        ...state,
        selectedFile: action.payload
      };
    default:
      return state;  
  }
}

