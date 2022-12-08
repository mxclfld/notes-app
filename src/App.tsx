import Container from 'react-bootstrap/Container'
import { Routes, Route } from 'react-router-dom'
import Navbar from './layout/Navbar'
import ActiveNotes from './pages/ActiveNotes'
import ArchivedNotes from './pages/ArchivedNotes'

function App() {
  return (
    <>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<ActiveNotes />}></Route>
          <Route path="/archived" element={<ArchivedNotes />}></Route>
        </Routes>
      </Container>
    </>
  )
}

export default App
