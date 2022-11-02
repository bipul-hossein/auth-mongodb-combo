import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../Pages/Share/Footer';
import Navbar from '../Pages/Share/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;