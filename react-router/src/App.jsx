import './App.css'
import Header from "./components/header"
import Home from "./components/home"
import Footer from './components/footer'
import About from './components/about'
import Contact from './components/contact'
import { Outlet } from 'react-router-dom'
function App() {

  return (
    <>
    
    <Header></Header>
      <Outlet/>
    <Footer></Footer>
    </>
  )
}

export default App
