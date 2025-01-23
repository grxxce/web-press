export type File = {
    id: string,
    name: string,
    parent: null | Folder,
    type: 'file',
    contentId: string 
}

export type FileContent = {
    id: string, 
    content: string,
    lastModified: Date,
    fileId: string
}

export type Folder = {
    id: string,
    name: string,
    children:(File | Folder)[],
    type: 'folder'
}