import { BrowserRouter } from 'react-router-dom'
import './styles/App.css'
import Pokemons from './Pokemons'
import Navbar from './Components/Navbar'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Pokemons />
      </BrowserRouter>
    </>
  )
}

export default App
