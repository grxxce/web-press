"use client"
import React from 'react'
import TextEditor from '../components/TextEditor'
import FileDirectory from '../components/FileDirectory'
import ActionButtons from '../components/ActionButtons'
import { useFileSystem } from './FileSystemContext'

export default function Home() {
    const context = useFileSystem()
  return (
    <div>
        <nav>
            <div className='flex justify-between border-b-2 border-secondary'>
               <div>
                    Navigation
               </div>
               <div>
                    Login
               </div>
            </div>
        </nav>
          <main className="flex h-screen">
            <div className="grid grid-cols-[200px_1fr] divide-x-2 divide-secondary">
                <div className="h-full">
                    <div className="flex justify-center">
                        <ActionButtons />
                    </div>
                    <div className="h-full z-0" onClick={()=>{console.log("clicking null");context.setSelected(null)}}>
                        <FileDirectory input={context.files} />
                    </div>

                </div>
                <div className="h-full">
                    <TextEditor />
                </div>
            </div>
          </main>
    </div>
  );
}
