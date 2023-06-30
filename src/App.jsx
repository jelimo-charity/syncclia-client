
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import Actions from './pages/Actions'
import BlogList from './pages/BlogList'
import AboutUs from './pages/AboutUs'
import Header from './components/Header'
import Register from './pages/Register'
import { useContext } from 'react'
import { Context } from './context/userContext/Context'



function App() {
  const {user} = useContext(Context)
  console.log(user)

  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element = { <Home />} />
      <Route path='/actions' element = { user ? <Actions /> : <Home />} />
      <Route path='/blogs' element = { <BlogList />} />
      <Route path='/about' element = { <AboutUs />} />
      <Route path='/notfound' element = { <NotFound />} />
      <Route path='/register' element = { <Register />} />

    </Routes>
    </BrowserRouter>
    
   
    </>
  )
}

export default App
