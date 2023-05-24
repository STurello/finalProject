import react from "react"
import reactDOM from "react-dom"

const Checkout =()=> {
    return(
        <main class="main checkout-main">
        <section class="section section-checkout">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <h2 class="checkout-header text-capitalize">checkout</h2>
                        <p class="checkout-text">Make all selections and pay</p>
                    </div>
                    <div class="col">
                        <p class="checkout-item-count">
                            <span id="checkoutItemCount"></span>
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <table class="table" id="table">
                            <tr class="table-headers">
                                <td>website name</td>
                                <td>site price</td>
                                <td>subtotal</td>
                            </tr>
                            <tbody id="tbody"></tbody>
                            <tr class="totals" id="totals">
                                <td colspan="3">
                                    <p class="total-subtotal" id="totalSubtotal">Subtotal:</p>
                                    <p class="total-tax" id="totalTax">Tax:</p>
                                    <p class="total-total" id="totalTotal">Total:</p>
                                </td>
                                <td class="total-values">
                                    <p class="subtotal-value" id="subtotalValue">$<span id="subValue"></span></p>
                                    <p class="tax-value">$<span id="taxValue"></span></p>
                                    <p class="total-value">$<span id="totalValue"></span> </p>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    </main>
    )
}

export default Checkout