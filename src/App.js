import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Create from './pages/Create'
import Update from './pages/Update'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/create`} element={<Create />} />
        <Route path={`/update`} element={<Update />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App