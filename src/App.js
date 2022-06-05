import React from "react";
import { Route, Routes,Link, BrowserRouter } from "react-router-dom";
import './App.css'

import Logged from "./Logged";
import Landing from './Landing'

// import png
// import p1 from './assets/1.png'
import p2 from './assets/2.png'
import p3 from './assets/3.png'
import p4 from './assets/4.png'
import p5 from './assets/5.png'
import p6 from './assets/6.png'
import p7 from './assets/7.png'
import p8 from './assets/8.png'
import p9 from './assets/9.png'
import p10 from './assets/10.png'
import p11 from './assets/11.png'
import p12 from './assets/12.png'
import p13 from './assets/13.png'
import p14 from './assets/14.png'
import p15 from './assets/15.png'
import p16 from './assets/16.png'
import p17 from './assets/17.png'
// import p18 from './assets/18.png'
import p19 from './assets/19.png'
import p20 from './assets/20.png'
import p21 from './assets/21.png'
import p22 from './assets/22.png'
import p23 from './assets/23.png'
import p24 from './assets/24.png'

function App() {
    return (
            <BrowserRouter >
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/loggedin" element={<Logged />} /> 
                </Routes>
            </BrowserRouter>
        
    );
}

export default App;
