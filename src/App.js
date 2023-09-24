import './App.css';
import { Navbar } from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { About } from './pages/about'
import { EVmodels } from './pages/EVmodels'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Admin } from './pages/admin'
import { useEffect, useState, createContext } from 'react'
import { auth } from './config/firebase';


export const AppContext = createContext();

function App() {
  const [userData, setUserData] = useState([])


  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUserData(user)
    })
  })

  return (
    <AppContext.Provider value={{ userData, setUserData }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/EVmodels' element={<EVmodels />} />
          <Route path='/aboutus' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/admin' element={<Admin />} />
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;