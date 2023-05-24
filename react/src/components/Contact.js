import react from "react"
import reactDOM from "react-dom"

const Contact =()=> {
    return(
        <main class="main contact-main">
        <h2 class="contact-h2 text-capitalize">contact</h2>
        <p class="contact-text text-capitalize">contact us!</p>
        <ul class="contact-list ">
            <li class="contact-item text-uppercase ">Selling the Internet llc</li>
            <li class="contact-item">742 Evergreen Terrace</li>
            <li class="contact-item">Springfield, USA 7431</li>
            <li class="contact-item"><h2 class="contact-h2">Call us at:<a href="tel:(939)-555-0113">(939)-555-0113</a></h2></li>
            <li class="contact-item"><a href="mailto:fakemail@somemail.com">Email Us</a></li>
        </ul>
    </main>
    )
}

export default Contact