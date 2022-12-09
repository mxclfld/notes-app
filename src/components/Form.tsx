import { useAppDispatch, useAppSelector, useForm } from '../app/hooks'
import Container from 'react-bootstrap/Container'
import FormBs from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import { addNote, editNote } from '../features/notesSlice'
import { v4 } from 'uuid'
import { useState } from 'react'
import { BsExclamationCircleFill } from 'react-icons/bs'
import { useNavigate, useParams } from 'react-router-dom'
import { FormValues } from '../app/types'

interface FormProps {
  edit?: boolean
}

export default function Form({ edit = false }: FormProps) {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [warning, setWarning] = useState('')

  const { noteId } = useParams()
  const note = useAppSelector((store) => store.notes.value).find(
    (note) => note.id === noteId
  )

  const initialValue = note
    ? { title: note.title, category: note.category, content: note.content }
    : ({
        title: '',
        category: 'Task',
        content: '',
      } as FormValues)
  const [values, handleChange] = useForm(initialValue)

  const handleAddButtonClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()
    if (values.title && values.category && values.content) {
      edit
        ? dispatch(
            editNote({
              id: noteId as string,
              title: values.title,
              category: values.category,
              content: values.content,
            })
          )
        : dispatch(
            addNote({
              id: v4(),
              title: values.title,
              category: values.category,
              content: values.content,
              archived: false,
              createdAt: new Date().toISOString(),
            })
          )
      navigate('/')
    } else {
      setWarning('Please, provide Title and Content of your note!')

      setTimeout(() => {
        setWarning('')
      }, 3000)
    }
  }

  return (
    <Container>
      {warning ? (
        <Alert className="d-flex align-items-center gap-3">
          <BsExclamationCircleFill size="2em" className="mr-3" />
          {warning}
        </Alert>
      ) : null}
      <FormBs className="container">
        <input
          className="mb-3 form-control"
          name="title"
          value={values.title}
          placeholder="Title..."
          onChange={handleChange}
        />
        <FormBs.Select
          className="mb-3 form-control"
          name="category"
          value={values.category}
          onChange={handleChange}
        >
          <option value="Task">Task</option>
          <option value="Random Thought">Random Thought</option>
          <option value="Idea">Idea</option>
        </FormBs.Select>
        <input
          className="mb-3 form-control"
          name="content"
          value={values.content}
          placeholder="Content..."
          onChange={handleChange}
        />
        <Button variant="primary" onClick={handleAddButtonClick}>
          {edit ? 'Edit' : 'Add'}
        </Button>
      </FormBs>
    </Container>
  )
}
