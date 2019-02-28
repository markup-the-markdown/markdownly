export const UPDATE_MARKDOWN = 'UPDATE_MARKDOWN';
export const updateMarkdown = markdown => ({
  type: UPDATE_MARKDOWN,
  payload: markdown
});

export const UPDATE_FILES = 'UPDATE_FILES';
export const updateFiles = file => ({
  type: UPDATE_FILES,
  payload: file
});

export const UPDATE_SELECTED_FILE = 'UPDATE_SELECTED_FILE';
export const updateSelectedFile = selected => ({
  type: UPDATE_SELECTED_FILE,
  payload: selected
});
