import { 
  getMarkdown,
  getFiles,
  getTitles,
  getTitle
} from './document';

describe('selector test', () => {
  const state = {
    title: 'File 1',
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

  it('returns list of titles', () => {
    const titles = getTitles(state);
    expect(titles).toEqual([
      'a',
      'b',
      'c'
    ]);
  });

  it('returns title', () => {
    const title = getTitle(state);
    expect(title).toEqual('File 1');
  });
});
