import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminNavbar from '../components/AdminNavbar'

function DashboardLayout() {
  return (
    <div>
        {/* <Navbar /> */}
        <AdminNavbar/>

        <div className='p-6'>
                <h1 className='text-2xl mb-4'>Dashboard</h1>
                <Outlet />
        </div>

    </div>
  )
}

export default DashboardLayout