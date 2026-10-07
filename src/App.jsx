
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Content from './components/Content.jsx'
import { Nav, Navbar, Container } from 'react-bootstrap'
import Read from './Read.jsx'
import Create from './components/Create.jsx'



function App() {
  return (
    <div>
   <BrowserRouter>
        <Navbar bg="primary" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<Content></Content>}></Route>
          <Route path="/read" element={<Read></Read>}></Route>
          <Route path="/create" element={<Create></Create>}></Route>
        </Routes>
  </BrowserRouter>
    </div>
  )
}

export default App