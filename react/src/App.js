import { React, ReactDOM, useEffect } from "react"

import Home from "./components/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { getCompany, getCompanies } from "./data"
import { useParams } from "react-router-dom"

const App=()=> {

    

    return(
        <>
            <Header />
            {/* {cards} */}
            <Footer />
        </>
    )
}

export default App