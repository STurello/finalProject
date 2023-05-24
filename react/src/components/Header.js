import { React, ReactDOM } from "react"
import { Outlet, Link } from "react-router-dom"

const Header =()=> {
    return(
        <header class="header">
        <section class="section top-header">
            <div class="container">
                <div class="row row-cols-1 row-cols-md-2">
                    <div class="col">
                        <h1 class="logo">Website Shopper</h1>
                    </div>
                    <div class="col">
                        <nav className="nav-list top-nav">
                            <Link to='/Home' className="btn btn-link nav-button">Home</Link>{''}
                            <Link to='/Single' className="btn btn-link nav-button">Single</Link>{''}
                            <Link to='/AllProducts' className="btn btn-link nav-button">Products Page</Link>{''}
                            <Link to='/Contact' className="btn btn-link nav-button">Contact</Link>{''}
                            <Link to='/Checkout' className="btn btn-link nav-button">Checkout</Link>
                        </nav>
                        <Outlet />
                    </div>
                </div>
            </div>
        </section>
    </header>
    )
}

export default Header