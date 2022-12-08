import { Note } from '../../app/types'
import TableCell from './TableCell'
import Button from 'react-bootstrap/Button'
import { useAppDispatch } from '../../app/hooks'
import { archiveNote, deleteNote } from '../../features/notesSlice'
import { dateFormatter } from '../../utils/dateFormatter'
import { useNavigate } from 'react-router-dom'

interface TableRowProps {
  data: Note
}

export default function TableRow({ data }: TableRowProps): JSX.Element {
  const MAX_CONTENT_LENGTH = 50

  const entries = Object.entries(data)
  const dispatch = useAppDispatch()

  const navigate = useNavigate()
  const handleClick = (id: string) => {
    navigate(`/${id}`)
  }

  return (
    <tr>
      {entries.map(([key, value]) => {
        if (key === 'id' || key === 'archived') return null
        if (key === 'createdAt') value = dateFormatter(value)
        if (key === 'content' && value.length >= MAX_CONTENT_LENGTH)
          value = value.slice(0, MAX_CONTENT_LENGTH) + '...'
        return <TableCell key={key} text={value.toString()} />
      })}
      <td className="d-flex gap-1">
        <Button
          variant="primary"
          size="sm"
          onClick={(e) => dispatch(archiveNote(data.id))}
        >
          {data.archived ? 'Unarchive' : 'Archive'}
        </Button>
        {data.archived ? null : (
          <>
            <Button
              variant="warning"
              size="sm"
              onClick={(e) => handleClick(data.id)}
            >
              Edit
            </Button>
            <Button
              variant="danger"
              size="sm"
              onClick={(e) => dispatch(deleteNote(data.id))}
            >
              Delete
            </Button>
          </>
        )}
      </td>
    </tr>
  )
}
