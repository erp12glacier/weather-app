import React from 'react'
import { Outlet } from 'react-router'
import { Navbar } from '../Navigations/Navbar'
import Footer from '../Navigations/Footer'
export const MainLayout = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                <Footer/>
            </footer>
        </>
    )
}
