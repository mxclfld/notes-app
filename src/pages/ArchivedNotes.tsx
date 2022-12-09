import { useAppSelector } from '../app/hooks'
import Table from '../components/Table/Table'
import { Note } from '../app/types'
import Container from 'react-bootstrap/Container'

export default function ArchivedNotes() {
  const notes: Note[] = useAppSelector((state) => state.notes.value)
  const archivedNotes: Note[] = notes.filter((note) => note.archived)
  const headers = ['', 'Title', 'Category', 'Content', 'Created At', 'Actions']
  return (
    <Container>
      <h1 className="mb-3">Archived Notes</h1>
      <Table data={archivedNotes} headers={headers} />
    </Container>
  )
}
