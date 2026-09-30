
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Content from './components/Content.jsx'
import { Nav, Navbar, Container } from 'react-bootstrap'



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
          <Route path="/read" element={<Header></Header>}></Route>
          <Route path="/create" element={<Content></Content>}></Route>
        </Routes>
  </BrowserRouter>
    </div>
  )
}

export default App