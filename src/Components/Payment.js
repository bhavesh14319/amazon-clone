import React, { useEffect, useState} from "react";
import "../CSS/payment.css";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, Navigate } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../reducer';
import { useNavigate } from 'react-router-dom'
import axios from "../axios"
import {db} from '../firebase'


function Payment() {
  const navigate = useNavigate ();
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeded,setSucceded] = useState(false);
  const [Processing,setProcessing] = useState('');
  const [clientSecret,setClientSecret]=useState(true);

  useEffect(()=>{
    const getClientSecret = async () =>{
        const response = await axios({
            method:'post',
            url:`/payments/create?total=${getBasketTotal(basket)*100}`
        });
        setClientSecret(response.data.clientSecret);
    }

    getClientSecret();
  },[basket])

  console.log("The secret is " ,clientSecret);

  const handleSubmit =async (e) => {
    e.preventDefault();
    setProcessing(true);
     const payload = await stripe.confirmCardPayment(clientSecret,{
         payment_method:{
             card:elements.getElement(CardElement)
         }
     }).then(({paymentIntent})=>{

        db.collection('users')
          .doc(user?.uid)
          .collection('orders')
          .doc(paymentIntent.id)
          .set({
            basket:basket,
            amount:paymentIntent.amount,
            created:paymentIntent.created
          })



         setSucceded(true);
         setError(null);
         setProcessing(false);
         navigate('/orders');

         dispatch({
           type : 'EMPTY_BASKET'
         })
     })
  };

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="Payment">
      <div className="Payment__container">
        <h1>
          Checkout(<Link to="/checkout">{basket?.length} items</Link>)
        </h1>

        <div className="Payment__sectionAddress">
          <div className="Payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="Payment__address">
            <p>{user?.email}</p>
            <p>132 React Lane</p>
            <p>Mumbai</p>
          </div>
        </div>

        <div className="Payment__sectionItems">
          <div className="Payment__title">
            <h3>Review items & delivery</h3>
          </div>
          <div className="Payment__Items">
            {basket.map((item) => {
              return (
                <CheckoutProduct
                  id={item.id}
                  imgsrc={item.imgsrc}
                  title={item.title}
                  price={item.price}
                  rating={item.rating}
                />
              );
            })}
          </div>
        </div>

        <div className="Payment__paymentsection">
          <div className="Payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="Payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                     <h3>Order Total: {value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"₹"}
                />
                <button disabled={Processing || disabled || succeded} >
                    <span>{Processing? <p>Processing</p> : 'Buy Now'}</span>
                </button>
              </div>

              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
