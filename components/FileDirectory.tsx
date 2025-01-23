"use client"
import React, { useEffect } from 'react'
import { useFileSystem } from '../app/FileSystemContext'
import {File, Folder} from './file/types'
import {FolderClosed, FolderOpen, NotebookText} from 'lucide-react'


const FileDirectory = ({input, level=0}: {input:(File|Folder)[], level?:number}) => {
    console.log(input)
    const context = useFileSystem();

    return (
        <div>
            {input.map((item) => (
                <div key={item.id} 
                style={{paddingLeft: `${(level * 16)}px`}}> 
                    <span onClick={(e) => {
                        e.stopPropagation();
                        context.setSelected(item);}}
                    className={`z-50 flex font-bold px-1 mx-1 py-0.5 rounded ${item === context.selected ? `bg-blue-400 ` : ""} items-center`}>
                        {item.type === "folder" ? (item === context.selected ? 
                        <FolderOpen className="size-5 m-1"/> : 
                        <FolderClosed className="size-5 m-1"/>): 
                        <NotebookText className="size-5 m-1"/>} 
                        {item.name}
                    </span>
                    
                    {item.type === "folder" && (item.children.length > 0) && <FileDirectory input={item.children} level={level+1}/> }
                </div>
            ))}
        </div>)
}

export default FileDirectory