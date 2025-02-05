
import { Route,Routes } from 'react-router'
import './App.css'
import Home from './componet/home'
import AddBook from './componet/AddBook'
import Header from './componet/Header'
import EditBook from './componet/EditBook'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/AddBook' element={<AddBook/>}/>
        <Route path='/edit/:id' element={<EditBook/>}/>
      </Routes>
    </>
  )
}

export default App
