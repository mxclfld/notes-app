import { ChangeEvent } from 'react'

export interface Note {
  id: string
  title: string
  category: 'Task' | 'Random Thought' | 'Idea'
  content: string
  archived: boolean
  createdAt: string
}

export interface NoteState {
  value: Note[]
}
