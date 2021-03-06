import React from "react";
import './App.css'

import { Link } from "react-router-dom";
import Logged from "./Logged";


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
import p26 from './assets/26.png'

function App() {
    return (
        <div className="page_container" id="#">
            <button className="logged_in-page">
                <Link to='loggedin'><img src={p26} alt='png' /></Link>
            </button>
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
                        <a href="#id">Go to Help Center</a>
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
                {/* main section content */}
                <div className="main_content">
                    <div className="main_content-left">
                        <div className="content_left-top">
                            <div className="content_top-left-information"> How to join ICO ?</div>
                            <div className="joining_ico">
                                <div className="joining_ico-guide">
                                    <p>In order to inverst in the Initial Coint Offering you must:</p>
                                    <div>
                                        <span>connect your wallet </span>
                                        <span>specify the amount of your order </span>
                                        <span>Click on Approve</span>
                                    </div>
                                </div>
                                <div className="joining_ico-data">
                                    <div>
                                        <p>Data</p>
                                        <span>2022-06-22</span>
                                    </div>
                                    <div>
                                        <p>ICO Supply</p>
                                        <span>1.000.000 RISING</span>
                                    </div>
                                    <div>
                                        <p>Remaining tokens</p>
                                        <span>1.000.000 RISING</span>
                                    </div>
                                    <div>
                                        <p>Access Type</p>
                                        <span>Public</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content_left-bottom">
                            <div className="content_left-table">
                                <div className="content_left-information">
                                    <div>
                                        <p>ICO attendance history</p>
                                    </div>
                                    <div>
                                        <p>Total ICO:388.000 RISING</p>
                                    </div>
                                </div>
                                <div className="need_overflow">
                                    <table className="table">
                                        <thead>
                                            <tr style={{ color: "#017EFB" }}>
                                                <th scope="col">Date</th>
                                                <th scope="col">Time</th>
                                                <th scope="col">Patment Method</th>
                                                <th scope="col">Amount</th>
                                                <th scope="col">Rising</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>2022-5-27</td>
                                                <td>2022-5-24</td>
                                                <td>BNB</td>
                                                <td>30</td>
                                                <td>276.000</td>
                                            </tr>
                                            <tr>
                                                <td>2022-5-24</td>
                                                <td>2022-5-24</td>
                                                <td>BNB</td>
                                                <td>10</td>
                                                <td>92.000</td>
                                            </tr>
                                            <tr>
                                                <td>2022-5-20</td>
                                                <td>2022-5-20</td>
                                                <td>BUSD</td>
                                                <td>800</td>
                                                <td>20.000</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="content_left-btngroups">
                                <button>Rising Whitepaper</button>
                                <button>Rising ROADMAP</button>
                                <button>Back To Home Page</button>
                            </div>
                        </div>
                    </div>
                    <div className="main_content-right">
                        <div className="ico_information">
                            <div className="ico_information-information">
                                <p>ICO INFORMATION</p>
                            </div>
                            <ul className="ico_list">
                                <li className="ico_list-item">
                                    <p>RISING Price</p>
                                    <span>0.04$</span>
                                </li>
                                <li className="ico_list-item">
                                    <p>Purchase LImit</p>
                                    <span>Min: 100 BUSD</span>
                                </li>
                                <li className="ico_list-item">
                                    <p>Number of Tokens</p>
                                    <span>1.000.000</span>
                                </li>
                                <li className="ico_list-item">
                                    <p>Token Name</p>
                                    <span>Rising</span>
                                </li>
                                <li className="ico_list-item ico_list-item--png">
                                    <p>Token Symbol</p>
                                    <span>
                                        <img src={p21} alt="png" />
                                    </span>
                                </li>
                                <li className="ico_list-item">
                                    <p>Total Supply</p>
                                    <span>180.000.000</span>
                                </li>
                            </ul>
                        </div>
                        <div className="wallet_connection-status">
                            <div className="connection_status-alert">
                                <img src={p17} alt="png" />
                                <p className="not_accepted-color">
                                    Your wallet is not connected. <br />
                                    Attach your wallet first.
                                </p>
                            </div>
                            <div className="wallet_adding">
                                <div>
                                    <span>Payment Method</span>
                                    <select>
                                        <option value="BNB" selected>
                                            {" "}
                                            <img src={p24} alt="png" /> BNB
                                        </option>
                                    </select>
                                </div>
                                <div>
                                    <span>Amount</span>
                                    <input type="text" placeholder="10 BNB" />
                                </div>
                            </div>
                            <div className="wallet_calculating">
                                (10 BNB * 313 $) / 0.04 = <span>78.250 RISING</span>
                            </div>
                            <div className="wallet_item-divider"></div>
                            <div className="wallet_amount">Amount</div>
                            <div className="wallet_item-divider"></div>
                            <div className="wallet_token-total">
                                <p>1 BNB =</p>
                                <span>9.200 RISING</span>
                            </div>
                            <div className="connect_wallet-button">
                                <button>Connect Wallet</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
