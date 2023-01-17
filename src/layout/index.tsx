import React, { useEffect } from 'react'
import { Outlet, useNavigate } from "react-router-dom";
import Header from '~/components/header';

function Layout() {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/home')
  }, [])
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default Layout
