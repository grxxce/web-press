"use client"
import React, { useState, useEffect }from 'react'
import TextEditor from '../components/TextEditor'
import FileDirectory from '../components/FileDirectory'
import ActionButtons from '../components/ActionButtons'
import { useFileSystem } from './FileSystemContext'
import { useRouter } from 'next/navigation'
import { createClient } from '../utils/supabase/client'
import Link from 'next/link'

export default function Home() {
    const context = useFileSystem()
    const supabase = createClient()
    const [session, setSession] = useState(null)
    const [username, setUsername] = useState(null)
    const router = useRouter()

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
            if (session?.user?.id) {
                fetchUsername(session.user.id)
            }
        })

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
            if (session?.user?.id) {
                fetchUsername(session.user.id)
            }
        })

        return () => subscription.unsubscribe()
    }, [])

    const fetchUsername = async (userId: string) => {
        const { data, error } = await supabase
            .from('profiles')  // replace with your table name
            .select('username')
            .eq('id', userId)
            .single()
        
        if (data) setUsername(data.username)
    }

  return (
    <div>
        <nav>
            <div className='flex justify-between border-b-2 border-secondary p-2'>
               <div className="flex flex-row w-full">
                     Navigation
               </div>
               <div className="flex flex-row w-full justify-end">
                    {session ? (
                        <div className="flex gap-2 italic bold">
                            <Link href="/account">Welcome, {username || session.user.email}</Link>
                        </div>
                    ) : (
                        <Link href="/login">
                            Login
                        </Link>
                    )}
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
