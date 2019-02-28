import { 
  updateMarkdown,
  updateFiles,
  updateSelectedFile
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

  it('returns action for UPDATE_SELECTED_FILE', () => {
    const updated = updateSelectedFile(2);
    expect(updated).toEqual({
      type: 'UPDATE_SELECTED_FILE',
      payload: 2
    });
  });
}); 
