import React from 'react'
// import FindCoder from './components/FindCoder'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Explore from './components/Explore'
import Hire from './components/Hire'
import Dev from './components/Dev'
import Challanges from './components/Challanges'
import Home from './CURD/Home'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Createuser from "./CURD/Createuser"
import Users from "./CURD/Users"
import EditPage from './CURD/EditPage'

export const App = () => {
  return (
    <div>
      {/* <BrowserRouter>
         <FindCoder/>
         <Routes>
           <Route element={<Explore/>} path='/explore'/>
           <Route element={<Hire/>} path='/hire'/>
           <Route element={<Dev/>} path='/dev'/>
           <Route element={<Challanges/>} path='/challange'/>
         </Routes>
      </BrowserRouter> */}

      <BrowserRouter>
        <Home />
        <Routes>
          <Route element={<Createuser />} path='/' />
          <Route element={<Users />} path='/users' />
          {/* <Route element={<EditPage/>} path='/edit/:id' /> */}
          <Route element={<EditPage/>} path='/edit/:id'/>
        </Routes>
      </BrowserRouter>

    </div>
  )
}
export default App
