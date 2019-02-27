import {
  UPDATE_MARKDOWN
} from '../actions/document';

const initialState = {
  markdown: '# Hi there'
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_MARKDOWN:
      return { ...action.payload };
    default:
      return state;  
  }
}

