import React from "react";
import { PayPalScriptProvider, PayPalButtons }  from "@paypal/react-paypal-js";

import "../css/Pages.css";

function Contact() {
    return (
      <div className="pages">
        <h1>Support</h1>
          <div className="paypal">
            <PayPalScriptProvider>
              <PayPalButtons />
            </PayPalScriptProvider>
          </div>
        </div>
    )
};

export default Contact;