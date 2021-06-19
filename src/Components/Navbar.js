import React from 'react'
import noon from '../Assets/noon.svg'
import { BsPerson } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';

export const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light nav">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src={noon} alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <input style={{ width: "530%", padding: "10px", fontSize: "12px" }} className="border rounded" type="text" placeholder="What are you looking for?" />
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li> */}
                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li> */}
                        </ul>
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={{color: "black"}}>العربیة</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a style={{color: "black"}} className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <span style={{ fontSize: "12px" }}>Ship to</span><span style={{ fontSize: "14px", fontWeight: "bold" }}><br />UAE</span>
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item active" href="#">UAE</a></li>
                                <li><a className="dropdown-item" href="#">KSA</a></li>
                                <li><a className="dropdown-item" href="#">Egypt</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a style={{color: "black"}} className="nav-link" href="#" ><b>Sign in <BsPerson/></b></a>
                        </li>
                        <li className="nav-item">
                            <a style={{color: "black"}} className="nav-link" href="#" ><b>Cart <FiShoppingCart/></b></a>
                        </li>
                        {/* <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </nav>,
        </div>
    )
}
