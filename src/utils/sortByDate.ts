import { Note } from '../app/types'

export default function sortByDate(array: Note[]): Note[] {
  array.sort((a: Note, b: Note) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  })
  return array
}
