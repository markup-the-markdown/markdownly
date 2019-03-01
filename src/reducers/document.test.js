import reducer from './document';

describe('document reducer', () => {
  let state = {};
  beforeEach(() => {
    state = {
      markdown: '# How are you',
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
  });

  it('handles the update markdown', () => {
    const updatedState = reducer(state, {
      type: 'UPDATE_MARKDOWN',
      payload: '# You good?'
    });

    expect(updatedState).toEqual({
      ...state,
      markdown: '# You good?'
    });
  });

  it('handles the update file', () => {
    const updatedState = reducer(state, {
      type: 'UPDATE_FILES',
      payload: {
        title: 'z'
      }
    });

    expect(updatedState).toEqual({
      ...state,
      files: [
        ...state.files,
        {
          title: 'z'
        }
      ]
    });
  });

  it('updates title', () => {
    const updateTitle = reducer(state, {
      type: 'UPDATE_TITLE',
      payload: 'Phile 1'
    });

    expect(updateTitle).toEqual({
      ...state,
      title: 'Phile 1'
    });
  });

  it('deletes file', () => {
    const updatedFile = reducer(state, {
      type: 'DELETE_FILE',
      payload: 0
    });

    expect(updatedFile).toEqual({
      ...state,
      files: [
        {
          title: 'b'
        },
        {
          title: 'c'
        }
      ]
    });
  });
});


