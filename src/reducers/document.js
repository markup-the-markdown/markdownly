import {
  UPDATE_MARKDOWN
} from '../actions/document';

const initialState = {
  markdown: '# Hi there'
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_MARKDOWN:
      return {
        markdown: action.payload.markdown
      };
    default:
      
      return state;  
  }
}

