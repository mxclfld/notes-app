import { Note } from '../../app/types'
import TableRow from './TableRow'
import { Table as TableBs } from 'react-bootstrap'

interface TableProps {
  data: Note[]
}

export default function Table({ data }: TableProps) {
  return (
    <TableBs className="table" bgcolor="white" bordered>
      <tbody>
        {data.map((note) => (
          <TableRow key={note.id.toString()} data={note} />
        ))}
      </tbody>
    </TableBs>
  )
}
