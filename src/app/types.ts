export interface Note {
  id: number
  title: string
  category: 'Task' | 'Random Thought' | 'Idea'
  content: string
  archived: boolean
  createdAt: string
}

export interface NoteState {
  value: Note[]
}
