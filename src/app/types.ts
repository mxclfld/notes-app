import { ChangeEvent } from 'react'

export interface EditedNote {
  id: string
  title: string
  category: 'Task' | 'Random Thought' | 'Idea'
  content: string
}

export interface Note extends EditedNote {
  archived: boolean
  createdAt: string
}

export interface NoteState {
  value: Note[]
}

export interface StatsRow {
  category: 'Task' | 'Random Thought' | 'Idea'
  active: number
  archived: number
}

export interface FormValues {
  title: string
  category: 'Task' | 'Random Thought' | 'Idea'
  content: string
}

export type FormReturn =
  | [
      FormValues,
      (
        e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
      ) => void
    ]
