import { Head, usePage } from '@inertiajs/inertia-react'
import React from 'react'
import toast, { Toaster } from 'react-hot-toast'
import Footer from '../Components/Dashboard/Footer';
import Navbar from '../Components/Dashboard/Navbar';


export default function Default({ children, title }) {
    const { flash } = usePage().props;

    flash.type && toast[flash.type](flash.message)

    return (
        <div id="layout-wrapper">
            <div className="min-height-300 bg-primary position-absolute w-100"></div>
            <Head title={title} />
            <Navbar />
            <Sidebar />
            <main class="main-content">
                {children}
                <Footer />
            </main>
        </div>
    )
}
