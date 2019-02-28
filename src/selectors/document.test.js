import { 
  getMarkdown,
  getFiles
} from './document';

describe('selector test', () => {
  const state = {
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
  it('returns markdown', () => {
    const markdown = getMarkdown(state);
    expect(markdown).toEqual('# How are you');
  });

  it('returns list of files', () => {
    const files = getFiles(state);
    expect(files).toEqual([
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
    ]);
  });
});
