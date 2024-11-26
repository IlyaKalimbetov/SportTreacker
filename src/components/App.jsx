import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginForm from './pages/LoginForm';
import RegForm from './pages/RegForm';
import NavBar from './ui/Navbar';
import HomePage from './pages/HomePage';
import MainPage from './pages/MainPage';


export default function App({ user, allPosts }) {
  return (
    <>
      <NavBar user={user} />
      <Routes>
        <Route path="/" element={<MainPage user={user} />} />
        <Route path="/main" element={<HomePage allPosts={allPosts} />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/registration" element={<RegForm />} />
      </Routes>
    </>
  )
}
