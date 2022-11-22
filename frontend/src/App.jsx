import { Route, Routes } from 'react-router-dom'

import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import ReadAll from './components/ReadAll/ReadAll'

import './App.css'

function App() {
  return (
    <div className="App">
      <Header />

      <div className="content">
        <Routes>
          <Route path="/" element={<ReadAll />} />
        </Routes>
      </div>

      <Footer />
    </div>
  )
}

export default App
