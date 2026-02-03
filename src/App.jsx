import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import RestaurantNavbar from './components/RestaurantNavbar'
import Home from './components/Home'

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
      <RestaurantNavbar title="Ristorante a caso" />
      {/* qui inserisco il resto della pagina principale */}
      <Home />
    </>
  )
}

export default App
