import React from "react";
import './App.css'

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
// import p17 from './assets/17.png'
// import p18 from './assets/18.png'
import p19 from './assets/19.png'
import p20 from './assets/20.png'
import p21 from './assets/21.png'
import p22 from './assets/22.png'
import p23 from './assets/23.png'

function App() {
    return (
        <div className="container">
            {/* side bar menu */}
            <div className="sidebar_menu">
                <section className="sidebar_heading">
                    <img src={p21} alt="png" />
                    <p>Rising</p>
                    <img src={p3} alt="png" />
                </section>
                <section className="sidebar_content">
                    <ul className="sidebar_list">
                        <li className="sidebar_list-item">
                            <img src={p4} alt="png" />
                            <p>Overview</p>
                        </li>
                        <li className="sidebar_list-item">
                            <img src={p5} alt="png" />
                            <p>Screeners</p>
                        </li>
                        <li className="sidebar_list-item">
                            <img src={p6} alt="png" />
                            <p>Inbox</p>
                        </li>
                        <li className="sidebar_list-item">
                            <img src={p7} alt="png" />
                            <p>Make idea</p>
                        </li>
                        <li className="sidebar_list-item">
                            <img src={p8} alt="png" />
                            <p>Channels</p>
                        </li>
                        <li className="sidebar_list-item">
                            <img src={p15} alt="png" />
                            <p>Journal</p>
                        </li>
                        <li className="sidebar_list-item">
                            <img src={p19} alt="png" />
                            <p>ICO</p>
                        </li>
                        <li className="sidebar_list-item">
                            <img src={p9} alt="png" />
                            <p>Staking & Pools</p>
                        </li>
                        <li className="sidebar_list-item">
                            <img src={p10} alt="png" />
                            <p>Global Chat</p>
                        </li>
                        <li className="sidebar_list-item">
                            <img src={p11} alt="png" />
                            <p>Account Assets</p>
                        </li>
                        <li className="sidebar_list-item">
                            <img src={p12} alt="png" />
                            <p>Referral Code</p>
                        </li>
                        <li className="sidebar_list-item">
                            <img src={p13} alt="png" />
                            <p>Settings</p>
                        </li>
                        <li className="sidebar_list-item">
                            <img src={p14} alt="png" />
                            <p>Rising Social Network</p>
                        </li>
                    </ul>
                </section>
                <section className="sidebar_footer">
                    <img src={p16} alt="png" />
                    <div>
                        <p>Need help with Rising?</p>
                        <a>Go to Help Center</a>
                    </div>
                </section>
            </div>

            {/* ******************** */}

            {/* other content */}
            <div className="main">
                {/* top section - navbar */}
                <div className="navbar">
                    <div className="navbar_left">
                        <h3>ICO</h3>
                    </div>
                    <div className="navbar_middle">
                        <img src={p20} alt="png" />
                        <input type="text" placeHolder="Search..." />
                    </div>
                    <div className="navbar_right">
                        <div className="navbar_right-item navbar_alert-night">
                            <img src={p22} alt="png " />
                            <img src={p23} alt="png " />
                        </div>
                        <div className="navbar_crossline"></div>
                        <div className="navbar_right-item navbar_connect-wallet">
                            <button>Connect Wallet</button>
                        </div>
                        <div className="navbar_crossline"></div>
                        <div className="navbar_right-item navbar_wallet-status ">
                            <img src={p2} alt="png" />
                            <div>
                                <p>Jaxtyn Henry</p>
                                <span>$2,895,102</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
