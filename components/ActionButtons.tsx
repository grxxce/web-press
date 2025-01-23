import React from 'react';
import Button from './ui/Button';
import { Plus, FolderPlus, ArrowUpNarrowWide, Search } from 'lucide-react';
import { useFileSystem } from '../app/FileSystemContext'
import {v4 as uuidv4 } from 'uuid';
import { stringify } from 'querystring';
import { File, Folder } from './file/types'

const ActionButtons = () => {
    const context = useFileSystem()

    function addFile() {
        console.log("adding file:", context.selected)
        const current = context.selected

        const newFile: File = {
            id: uuidv4(),
            name: "Untitled",
            type: "file",
            contentId: uuidv4(),
            parent: null
        }
        
        // append to root bc nothing selected or root file selected
        if (!current || current.type === 'file' && !current.parent) {
            context.setFiles(prev => [...prev, newFile]);
        }

        else {
            // file with parent
            if (current.type === 'file') {
                newFile.parent = current.parent
                current.parent.children = [...current.parent.children, newFile]
                
            }
            // folder
            else {
                newFile.parent = current
                current.children = [...current.children, newFile]
            }
            context.setFiles(prev => [...prev])
        }
    }   

    function addFolder() {
        console.log("adding folder")
        const current = context.selected

        const newFolder : Folder = {
            id: uuidv4(),
            name: "Untitled",
            type: "folder",
            children: []

        }

        if (!current || current.type === 'file' && !current.parent) {
            context.setFiles(prev => [...prev, newFolder])
        }

        else {
            if (current.type === 'file') {
                current.parent.children = [...current.parent.children, newFolder]
            }
            else {
                current.children = [...current.children, newFolder]
            }
            context.setFiles(prev=>[...prev])
        }
    }
    
    return (
        <div className="flex justify-between">
            <Button variant="secondary" size="sm" onClick={addFile}>
                <Plus className='mr-2 size-5'/>
            </Button>

            <Button variant="secondary" size="sm" onClick={addFolder}>
                <FolderPlus className='mr-2 size-5'/>
            </Button>

            <Button variant="secondary" size="sm">
                <ArrowUpNarrowWide className='mr-2 size-5'/>
            </Button>
            <Button variant="secondary" size="sm">
                <Search className='mr-2 size-5'/>
            </Button>
        </div>
    )
}

export default ActionButtons