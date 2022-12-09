import Container from 'react-bootstrap/Container'
import { Routes, Route } from 'react-router-dom'
import Navbar from './layout/Navbar'
import ActiveNotes from './pages/ActiveNotes'
import ArchivedNotes from './pages/ArchivedNotes'
import EditNote from './pages/EditNote'
import Stats from './pages/Stats'

function App() {
  return (
    <>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/:noteId" element={<EditNote />}></Route>
          <Route path="/" element={<ActiveNotes />}></Route>
          <Route path="/archived" element={<ArchivedNotes />}></Route>
          <Route path="/stats" element={<Stats />}></Route>
        </Routes>
      </Container>
    </>
  )
}

export default App
