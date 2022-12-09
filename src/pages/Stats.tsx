import { useAppSelector } from '../app/hooks'
import Table from '../components/Table/Table'
import { Note, StatsRow } from '../app/types'
import Container from 'react-bootstrap/Container'

export default function Stats() {
  const notes: Note[] = useAppSelector((state) => state.notes.value)

  const notesCategories = ['Task', 'Random Thought', 'Idea']
  const stats: StatsRow[] = notesCategories.map((category) => {
    const notesByCategory = notes.filter((note) => note.category === category)
    const archived = notesByCategory.filter((note) => note.archived).length
    const active = notesByCategory.length - archived
    return {
      category,
      active,
      archived,
    } as StatsRow
  })

  const headers = ['', 'Note Category', 'Active', 'Archived']
  return (
    <Container>
      <h1 className="mb-3">Stats</h1>
      <Table data={stats} headers={headers} />
    </Container>
  )
}
