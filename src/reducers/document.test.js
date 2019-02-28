import reducer from './document';

describe('document reducer', () => {
  let state = {};
  beforeEach(() => {
    state = {
      markdown: '# How are you',
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

  // it('handles the update file', () => {
  //   const updatedState = reducer(state, {
  //     type: 'UPDATE_MARKDOWN',
  //     payload: '# You good?'
  //   });

  //   expect(updatedState).toEqual({
  //     ...state,
  //     markdown: '# You good?'
  //   });
  // });
});


