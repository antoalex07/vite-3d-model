import './App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {

  return (
    <div className='app'>
      {/* <Header/> */}
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </div>  
  )
}

export default App