import { 
  updateMarkdown,
  updateFiles,
  updateTitle,
  deleteFile,
  updateFileTitle
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

  it('returns action for DELETE_FILE', () => {
    const deleted = deleteFile(0);
    expect(deleted).toEqual({
      type: 'DELETE_FILE',
      payload: 0
    });
  });

  it('returns action for UPDATE_FILE_TITLE', () => {
    const updatedFile = updateFileTitle(0, 'new filename');
    expect(updatedFile).toEqual({
      type: 'UPDATE_FILE_TITLE',
      payload: {
        ind: 0,
        title: 'new filename'
      }
    });
  });
}); 
