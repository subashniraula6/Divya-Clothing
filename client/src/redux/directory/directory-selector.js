import { createSelector } from 'reselect'

export const selectDirectory = state => state.directory;

export const selectDirectorySection = createSelector (
    [selectDirectory],
    (directory) => directory.sections
)