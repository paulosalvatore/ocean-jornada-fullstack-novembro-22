import { Route, Routes } from 'react-router-dom'

import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import ReadAll from './components/ReadAll/ReadAll'
import Create from './components/Create/Create'

import './App.css'

function App() {
  return (
    <div className="App">
      <Header />

      <div className="content">
        <Routes>
          <Route path="/" element={<ReadAll />} />

          <Route path="/adicionar" element={<Create />} />

          {/* Exercício: Criar uma rota para o ReadById, integrado com o backend */}
          {/* <Route path="/visualizar/:id" element={<ReadById />} /> */}

          {/* Para pegar o parâmetro de rota no componente, utilizamos (dentro do componente): */}
          {/* const id = props.match.params.id; */}
        </Routes>
      </div>

      <Footer />
    </div>
  )
}

export default App
