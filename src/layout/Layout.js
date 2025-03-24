import React from 'react';
import { Outlet} from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductList from "../pages/ProductList";

function Layout(props) {
    return (
        <>
            <Navbar />
            {/* Outlet : là où s'affichent les pages enfants*/}
            <Outlet />
            <Footer />
        </>
    );
}

export default Layout;