import { 
  updateMarkdown,
  updateFiles,
  updateTitle
} from './document';

describe('action test', () => {
  it('returns action for UPDATE_MARKDOWN', () => {
    const updated = updateMarkdown('# How are you');
    expect(updated).toEqual({
      type: 'UPDATE_MARKDOWN',
      payload: '# How are you'
    });
  });

  it('returns action for UPDATE_FILES', () => {
    const file = {
      id: 5,
      title: 'z'
    };
    const updated = updateFiles(file);
    expect(updated).toEqual({
      type: 'UPDATE_FILES',
      payload: file
    });
  });

  it('returns action for UPDATE_TITLE', () => {
    const updated = updateTitle('Phile 2');
    expect(updated).toEqual({
      type: 'UPDATE_TITLE',
      payload: 'Phile 2'
    });
  });
}); 
