import { useAppSelector } from '../app/hooks'
import Container from 'react-bootstrap/Container'
import Form from '../components/Form'
import Table from '../components/Table/Table'
import { Note } from '../app/types'

export default function ActiveNotes() {
  const notes = useAppSelector((store) => store.notes.value)
  const activeNotes: Note[] = notes.filter((note) => !note.archived)
  const headers = ['', 'Title', 'Category', 'Content', 'Created At', 'Actions']
  return (
    <div>
      <Container className="mb-3">
        <Form />
      </Container>
      <Container>
        <h1 className="mb-3">Active Notes</h1>
        <Table data={activeNotes} headers={headers} />
      </Container>
    </div>
  )
}
