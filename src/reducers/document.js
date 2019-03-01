import {
  UPDATE_MARKDOWN,
  UPDATE_FILES
} from '../actions/document';

const initialState = {
  title: '',
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
    case UPDATE_TITLE:
      return {
        ...state,
        title: action.payload
      };
    default:
      return state;  
  }
}

