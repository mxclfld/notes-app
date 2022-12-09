import { Note, StatsRow } from '../../app/types'
import TableRow from './TableRow'
import { Table as TableBs } from 'react-bootstrap'

interface TableProps {
  data: Note[] | StatsRow[]
  headers: string[]
}

export default function Table({ data, headers }: TableProps) {
  return (
    <TableBs className="table" bgcolor="white" hover>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th className="ps-2" key={index}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((note, index) => (
          <TableRow key={index} data={note} />
        ))}
      </tbody>
    </TableBs>
  )
}
