import React from 'react'
import ReactDOMClient from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import App from './App'
import Header from './components/Header'
import Contact from './components/Contact'
import Checkout from './components/Checkout'
import Single from './components/Single'
import Home from './components/Home'
import AllProducts from './components/AllProducts'

const root = ReactDOMClient.createRoot(document.getElementById('root'))

root.render(
    <>
        {/* <App /> */}
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}>
                <Route path='home' element={<Home />} />

                <Route path='single' element={<Single />} />

                <Route path='allproducts' element={<AllProducts />} />
                <Route path='contact' element={<Contact />} />
                <Route path='checkout' element={<Checkout />}>
                </Route>
            </Route>
            <Route
                path='*'
                element={
                    <main style={{ padding: '1rem '}}>
                        <p>Nothing going on here. Click previous page button.</p>
                    </main>
                }
            />
        </Routes>
    </BrowserRouter>
    </>
)