import { useAppSelector } from '../app/hooks'
import Container from 'react-bootstrap/Container'
import Form from '../components/Form'
import Table from '../components/Table/Table'
import { Note } from '../app/types'

export default function ActiveNotes() {
  const notes = useAppSelector((store) => store.notes.value)
  const activeNotes: Note[] = notes.filter((note) => !note.archived)
  return (
    <div>
      <Container className="mb-3">
        <Form />
      </Container>
      <Container>
        <Table data={activeNotes} />
      </Container>
    </div>
  )
}
