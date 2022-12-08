import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import notes from '../data/notes.json'
import { EditedNote, Note, NoteState } from '../app/types'

const initialState: NoteState = {
  value: notes as Note[],
}

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      state.value.push(action.payload)
    },
    editNote: (state, action: PayloadAction<EditedNote>) => {
      const myNote = state.value.find((note) => note.id === action.payload.id)!
      const index = state.value.indexOf(myNote)
      state.value[index] = {
        ...state.value[index],
        title: action.payload.title,
        category: action.payload.category,
        content: action.payload.content,
      }
    },
    archiveNote: (state, action: PayloadAction<string>) => {
      const myNote = state.value.find((note) => note.id === action.payload)
      myNote!.archived = !myNote!.archived
    },
    deleteNote: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter((note) => note.id === action.payload)
    },
  },
})

export const { addNote, editNote, archiveNote, deleteNote } = notesSlice.actions
export default notesSlice.reducer
