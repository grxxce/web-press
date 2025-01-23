"use client"
import { createContext, useContext, useState, } from 'react';
import { File, Folder } from '../components/file/types';

type FileSystemContextType = {
    files: (File|Folder)[];
    setFiles: React.Dispatch<React.SetStateAction<((File|Folder)[])>>;
    selected: File | Folder | null;
    setSelected: React.Dispatch<React.SetStateAction<(File|Folder|null)>>;
}

const FileSystemContext = createContext<FileSystemContextType|undefined>(undefined);

export function FileSystemProvider( { children }: {children: React.ReactNode }) {
    const [files, setFiles] = useState<(File | Folder)[]>([])
    const [selected, setSelected] = useState<File|Folder|null>(null)

    return (
        <FileSystemContext.Provider value={{
            files,
            setFiles,
            selected: selected,
            setSelected: setSelected,
        }}>
            { children }
        </FileSystemContext.Provider>
    )
}

export const useFileSystem = () => {
    const context = useContext(FileSystemContext);
    if (context === undefined) {
        throw new Error("not allowed")
    }
    return (
        context
    )
}