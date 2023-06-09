import { React, useEffect, useState } from "react"

import Home from "./components/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Single from "./components/Single"
import AllProducts from "./components/AllProducts"
import Contact from "./components/Contact"
import Checkout from "./components/Checkout"
import { Route, Routes } from "react-router-dom"
import axios from "axios"


const App=()=> {

    const [products, setProducts] = useState([])
    useEffect(()=> {
        const url = 'http://localhost:3000/api/website'
        axios.get(url).then(res => setProducts(res.data))
    }, [])
    // console.log(products)
    return(
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home products={products} />} />

                <Route path='/products/website/:id' element={<Single />} />

                <Route path='products' element={<AllProducts products={products} />} />
                <Route path='contact' element={<Contact />} />
                <Route path='checkout' element={<Checkout />} />
                <Route
                    path='*'
                    element={
                        <main style={{ padding: '1rem '}}>
                            <p>Nothing going on here. Click previous page button.</p>
                        </main>
                    }
                />
            </Routes>
            <Footer />
            
        </>
    )
}

export default App