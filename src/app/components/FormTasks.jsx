"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'

function FormTasks() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const router = useRouter()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/tasks/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title,
        description
      })
    })
    const data = await res.json()
    console.log(data)
    router.refresh()
  }

  return (
    <div className="bg-slate-200 p-7 h-fit">
      <form onSubmit={handleSubmit}>
        <h2 className="text-blue-500">Add Tasks</h2>
        <label htmlFor="title" className="text-xs text-slate-500">Title:</label>
        <input type="text" name="title" className="text-slate-900 bg-slate-500 rounded-md p-2 mb-2 block w-full"
          onChange={(e) => setTitle(e.target.value)} />
        <label htmlFor="description" className="text-xs text-slate-500">Description:</label>
        <textarea name="description" className="text-slate-900 bg-slate-500 rounded-md p-2 mb-2 block w-full"
          onChange={(e) => setDescription(e.target.value)}></textarea>
        <button className="bg-blue-500 text-white p-2 rounded-md w-full block">Save</button>
      </form>
    </div>

  )
}

export default FormTasks