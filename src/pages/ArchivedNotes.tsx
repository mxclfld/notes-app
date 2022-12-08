import { useAppSelector } from '../app/hooks'
import Table from '../components/Table/Table'
import { Note } from '../app/types'

export default function ArchivedNotes() {
  const notes: Note[] = useAppSelector((state) => state.notes.value)
  const archivedNotes: Note[] = notes.filter((note) => note.archived)
  return (
    <div>
      <h1>Archived Notes</h1>
      <Table data={archivedNotes} />
    </div>
  )
}
