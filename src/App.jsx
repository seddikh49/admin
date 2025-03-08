import React, { useState } from 'react'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import {Routes, Route} from 'react-router-dom'
import Add from './pages/Add'
import Orders from './pages/Orders'
import List from './pages/List'
import Login from './components/Login'
import { ToastContainer} from 'react-toastify';

export const backEndUrl = import.meta.env.VITE_BACK_END_URL


const App = () => {
  const [token, setToken] = useState('');

  return (
    <div className='bg-gray-50 min-h-screen'>
    <ToastContainer/>
    {token === "" ? <Login setToken={setToken}/>
    :(
      <>
    <NavBar/>
    <hr className='opacity-20 text-gray-600' />
  
    <div className='flex w-full'>
      <SideBar/>
      <div className='w-[70%]'>
        <Routes>
          <Route path='/add' element={<Add/>} />
          <Route path='/orders' element={<Orders/>} />
          <Route path='/list' element={<List/>} />
        </Routes>

      </div>
    </div>
    </>
    )
    }
    </div>
  )
}

export default App
