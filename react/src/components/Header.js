import { React, ReactDOM } from "react"
import { Outlet, Link } from "react-router-dom"

const Header =()=> {
    return(
        <header className="header top-header">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2">
                    <div className="col">
                        <h1 className="logo">Website Shopper</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <nav className="nav-list top-nav">
                            <ul>
                                <li className="btn btn-link nav-button top-button nav-item">
                                    <Link to='/'>Home</Link>{''}
                                </li>
                                <li className="btn btn-link nav-button top-button nav-item">
                                    <Link to='/products'>Products Page</Link>{''}
                                </li>
                                <li className="btn btn-link nav-button top-button nav-item">
                                    <Link to='/contact'>Contact</Link>{''}
                                </li>
                                <li className="btn btn-link nav-button top-button nav-item">
                                    <Link to='/checkout'>Checkout</Link>
                                </li>
                            </ul>
                        </nav>
                    <Outlet />
                    </div>
                </div>
            </div>
    </header>
    )
}

export default Header