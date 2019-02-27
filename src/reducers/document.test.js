import reducer from './document';

describe('document reducer', () => {
  it('handles the update markdown', () => {
    const state = {
      markdown: '# How are you'
    };

    const updatedState = reducer(state, {
      type: 'UPDATE_MARKDOWN',
      payload: { markdown: '# You good?' }
    });

    expect(updatedState).toEqual({
      markdown: '# You good?'
    });
  });
});


