'use client'
import { useEffect, useState } from 'react'
import { marked } from 'marked'
import 'github-markdown-css/github-markdown.css'
import './markdown.scss'

export default function Privacy() {
    const [markdown, setMarkdown] = useState('')
    useEffect(() => {
        fetch('/Knock_Privacy_CN.md').then(m => m.text())
            .then((m: string) => {
                setMarkdown(marked.parse(m))
            })
    }, [])

    return <main className='markdown-body' dangerouslySetInnerHTML={{ __html: markdown }}>
    </main>
}