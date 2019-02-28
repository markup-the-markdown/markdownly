import { updateMarkdown } from './document';

describe('action test', () => {
  it('returns action', () => {
    const updated = updateMarkdown('# How are you');
    expect(updated).toEqual({
      type: 'UPDATE_MARKDOWN',
      payload: '# How are you'
    });
  });
}); 
