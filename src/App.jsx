import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Notfound from './pages/Notfound'
import { GithubProvider } from './context/github/GithubContext'
import User from './components/users/User'

function App() {
  return (
    <>
    <GithubProvider>
    <div className='flex flex-col justify-between h-screen'>
    <Nav/>
    <main>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/user/:login' element={<User/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/*' element={<Notfound location={location}/>}/>
    </Routes>
    </main>
    <Footer/>
    </div>
    </GithubProvider>
    </>
  )
}

export default App
