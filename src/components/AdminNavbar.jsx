import React, { useState } from 'react'

const AdminNavbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className=''>
            {/* Hamburger Icon (appears only on mobile) */}
            <button
                onClick={toggleSidebar}
                className="lg:hidden p-2 bg-blue-600 text-white absolute top-4 left-4 z-50">
                ☰ {/* Hamburger icon */}
            </button>

            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-green-600 text-white transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
                style={{ transition: 'transform 0.3s ease-in-out', zIndex: 100 }}
            >
                <ul className="flex flex-col p-4 space-y-4">
                    <li><a href="/dashboard" className="hover:text-gray-300">Dashboard</a></li>
                    <li><a href="/dashboard/profile" className="hover:text-gray-300">Manage Users</a></li>
                    <li><a href="/dashboard/setting" className="hover:text-gray-300">Settings</a></li>
                    <li><a href="/dashboard/overview" className="hover:text-gray-300">Overview</a></li>
                </ul>
            </div>

            {/* Main content area */}
            <div className={`lg:ml-64 p-4`}>
                {/* Add your admin content here */}
                Hockey Puck
            </div>

        </div>
    )
}

export default AdminNavbar
