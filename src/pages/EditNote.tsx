/*TODO:
 * function takes noteid from url
 * has Form with edit=true
 */

import Container from 'react-bootstrap/Container'
import Form from '../components/Form'

export default function EditNote() {
  return (
    <Container className="mb-3">
      <h1 className="mb-3">Edit Note</h1>
      <Form edit={true} />
    </Container>
  )
}
