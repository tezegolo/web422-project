import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './page'
import Myhome from './myhome/page'
import Profile from './profile/page'
import Categories from './categories/page'
import Favorites from './favorites/page'
import Login from './auth/login'
import Signup from './auth/signup'

const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/myhome" element={<Myhome />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/signup" element={<Signup />} />
    </Routes>
  )
}

export default Layout
