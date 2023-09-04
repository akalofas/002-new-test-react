import './css/App.css'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'

import Navbar from './pages/navbar/Navbar.jsx'
import Pageheader from './pages/header/PageHeader'
import Content from './pages/content/Content'
import Pagefooter from './pages/footer/PageFooter'
import Custinfo from './pages/content/subpages/custinfo'
import Itemlist from './pages/content/subpages/itemlist'
import Custblnc from './pages/content/subpages/custblnc'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Pageheader />
      <Content />
      <Pagefooter />   
      <Routes>
          <Route path='/' element = {<Content />}/>
          <Route path='/Customers' element = {<Custinfo />}/>
          <Route path='/Balance' element = {<Custblnc />}/>
          <Route path='/ProductList' element = {<Itemlist />}/>
          <Route path='*' element = {<Content />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
