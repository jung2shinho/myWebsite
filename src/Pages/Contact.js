import React from "react";
import { PayPalScriptProvider, PayPalButtons }  from "@paypal/react-paypal-js";

import "../css/Pages.css";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom"


const ContactData = [
      {
        title: 'Facebook',
        path: 'https://facebook.com/jshinhoxp',
        icon: <AiIcons.AiOutlineFacebook />,
        cName: 'contact-text'
      },
      {
        title: 'Instagram',
        path: 'https://instagram.com/jshinhoxp',
        icon: <AiIcons.AiOutlineInstagram />,
        cName: 'contact-text'
      },
      {
        title: 'LinkedIn',
        path: 'https://linkedin.com/in/jungshinho',
        icon: <AiIcons.AiOutlineLinkedin />,
        cName: 'contact-text'
      },
      {
         title: 'Github',
         path: 'https://github.com/jshinhoxp',
         icon: <AiIcons.AiOutlineGithub />,
         cName: 'contact-text'
      }
    ]

export default function Contact() {
    return (
      <div className="pages">
        <h1>Contact</h1>
        { ContactData.map( (item, index) => {
            return (
                <li key={index} className={item.cName}>
                    <Link to={item.path}> {item.icon}
                        <span> {item.title} </span>
                    </Link>
                </li>
            )
        })}
          <div className="paypal">
            <PayPalScriptProvider options={{
              "client-id":
                /* need to insert client-id number here*/
                ""
              }}>
              <PayPalButtons 
                createOrder={(data, actions) => {
                  return actions.order.create({
                    purchase_units: [
                      {
                        amount: {
                          value: "5.00",
                        },
                      },
                    ],
                  });
                }}
                onApprove={(data, actions) => {
                  return actions.order.capture().then(function (details) {
                    alert(
                      "Transaction was completed by " + details.payer.name.given_name
                    );
                  });
                }}
              />
            </PayPalScriptProvider>
          </div>
        </div>
    )
};