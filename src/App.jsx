import './App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Sample from './pages/Sample'

function App() {

  return (
    <div className='app'>
      {/* <Header/> */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/saple' element={<Sample/>} />
      </Routes>
    </div>  
  )
}

export default App