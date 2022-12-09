import { Note, StatsRow } from '../../app/types'
import TableCell from './TableCell'
import Button from 'react-bootstrap/Button'
import { useAppDispatch } from '../../app/hooks'
import { archiveNote, deleteNote } from '../../features/notesSlice'
import { dateFormatter } from '../../utils/dateFormatter'
import { useNavigate } from 'react-router-dom'
import { FaLightbulb, FaTrash } from 'react-icons/fa'
import { BsCart, BsFillPencilFill, BsArchiveFill } from 'react-icons/bs'
import { TfiThought } from 'react-icons/tfi'
import { isNote } from '../../utils/isNote'

interface TableRowProps {
  data: Note | StatsRow
}

export default function TableRow({ data }: TableRowProps): JSX.Element {
  const MAX_CONTENT_LENGTH = 50

  const entries = Object.entries(data)
  const dispatch = useAppDispatch()

  const navigate = useNavigate()
  const handleClick = (id: string) => {
    navigate(`/${id}`)
  }

  const icons = {
    'Task': <BsCart size="1.4em" />,
    'Random Thought': <TfiThought size="1.4em" />,
    'Idea': <FaLightbulb size="1.4em" />,
  }

  const actionIconsSize = '1.2em'

  return (
    <tr>
      <TableCell
        className="text-center align-middle"
        value={icons[data.category]}
      />
      {entries.map(([key, value]) => {
        if (key === 'id' || (isNote(data) && key === 'archived')) return null
        if (key === 'createdAt') value = dateFormatter(value)
        if (key === 'content' && value.length >= MAX_CONTENT_LENGTH)
          value = value.slice(0, MAX_CONTENT_LENGTH) + '...'
        return <TableCell className="align-middle" key={key} value={value} />
      })}
      {isNote(data) ? (
        <td className="">
          <Button
            className="me-1"
            variant="primary"
            size="sm"
            onClick={(e) => dispatch(archiveNote(data.id))}
          >
            <BsArchiveFill size={actionIconsSize} />
          </Button>
          {data.archived ? null : (
            <>
              <Button
                className="me-1"
                variant="warning"
                size="sm"
                onClick={() => handleClick(data.id)}
              >
                <BsFillPencilFill size={actionIconsSize} />
              </Button>
              <Button
                variant="danger"
                size="sm"
                onClick={() => dispatch(deleteNote(data.id))}
              >
                <FaTrash size={actionIconsSize} />
              </Button>
            </>
          )}
        </td>
      ) : null}
    </tr>
  )
}
