import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import RestaurantNavbar from './components/RestaurantNavbar'

// PASSAGGI PER INCORPORARE BOOTSTRAP IN UN'APP VITE
// 1) npm install bootstrap
// 2) npm install react-bootstrap
// 3) import di bootstrap.min.css in App.jsx
// 4) svuota o elimina i file css predefiniti: App.css e index.css
// 5) usa i componenti di react-bootstrap: Container, Row, Col, Button, Card etc.

function App() {
  return (
    <>
      {/* qui importo il componente della mia navbar */}
      <RestaurantNavbar />
      {/* qui inserisco il resto della pagina principale */}
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <h1 className="text-center">PROVA BOOTSTRAP</h1>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
