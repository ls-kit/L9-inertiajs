import React from 'react'
import Footer from '../Components/Dashboard/Footer'
import Main from '../Components/Dashboard/Main'
import Navbar from '../Components/Dashboard/Navbar'
import Sidebar from '../Components/Dashboard/Sidebar'
import Guest from '../Layouts/Guest'

export default function Home() {
    return (
        <>
            <div id="layout-wrapper">
                <Navbar />
                <Sidebar />
                <div className="main-content">
                    <Main />
                    <Footer />
                </div>
            </div>
        </>
    )
}

Home.layout = (page) => <Guest children={page} title={"Home"} />
