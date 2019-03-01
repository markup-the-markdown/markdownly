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

export const UPDATE_TITLE = 'UPDATE_TITLE';
export const updateTitle = title => ({
  type: UPDATE_TITLE,
  payload: title
});

export const DELETE_FILE = 'DELETE_FILE';
export const deleteFile = ind => ({
  type: DELETE_FILE,
  payload: ind
});

export const UPDATE_FILE_TITLE = 'UPDATE_FILE_TITLE';
export const updateFileTitle = (ind, title) => ({
  type: UPDATE_FILE_TITLE,
  payload: {
    ind, 
    title
  }
}); 
