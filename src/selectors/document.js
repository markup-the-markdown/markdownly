export const getMarkdown = state => state.markdown;

export const getFiles = state => state.files;

export const getTitles = state => state.files.map(file => file.title);
