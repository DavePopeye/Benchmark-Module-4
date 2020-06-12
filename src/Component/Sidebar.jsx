import React from 'react'
import { Col, Nav } from 'react-bootstrap'



class Sidebar extends React.Component {
    render() {
        return (
            <Col className='leftCol'>
                <Nav className='side-nav-class side-nav-bar'>
                    <div className="logo-class pl-2">
                        <img src={"imgs/spotify_logo.png"} alt="spotify logo" width="100px" />
                    </div>
                    <ul>
                        <li>
                            <div className="sideLine d-block">
                                <div className="sidenav-icons">
                                    <i className="fas fa-home" />
                                </div>
                                <div>
                                    <a className="ml-2" onclick="sideClick(event)" href="#">Home</a>
                                </div>
                            </div>
                        </li>
                        <li id="search" onclick="createsearchDiv()">
                            <div>
                                <div className="sidenav-icons">
                                    <i className="fas fa-search" />
                                </div>
                                <div>
                                    <a className="ml-2" onclick="sideClick(event)" href="#">Search</a>
                                </div>
                            </div>
                        </li>
                        <li id="userinput" className="d-none">
                            <input type="text" id="userinputsearch" />
                        </li>
                        <li>
                            <div>
                                <div className="sidenav-icons">
                                    <i className="fas fa-book-open" />
                                </div>
                                <div>
                                    <a className="ml-2" onclick="sideClick(event)" href="#">Library</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="pb-5">
                        <ul className="bottom-ul">
                            <button type="button" className="btn btn-light py-1 styleBtnLight" style={{ width: '100%' }}>SIGN UP</button>
                            <button type="button" className="btn btn-dark my-1 py-1 styleBtn" style={{ width: '100%' }} onclick="window.location.href='index.html'">LOGIN</button>
                            <div className="footer-spans">
                                <li className="aling-span">
                                    <span className="side-bar-footer">Cookie</span><span className="side-bar-footer">|</span><span className="side-bar-footer">Privacy </span>
                                </li>
                                <li id="policy" className="aling-span">
                                    <span className="side-bar-footer">Policy</span>
                                </li>
                            </div>
                        </ul>
                    </div>
                </Nav >
            </Col >
        );
    }
};
export default Sidebar;