import React from 'react'
import '../CSS/checkout.css'
import Subtotal from './Subtotal'
import { useStateValue } from '../StateProvider'
import CheckoutProduct from './CheckoutProduct';
function Checkout() {
  const [{basket,user},dispatch] = useStateValue();
  return (
    <div className='checkout'>
        <div className="checkout__left">
            <img className='checkoutad' src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Sports/April/Home_CB/pc-stripe.jpg" alt="" />
            <h3>Hello, {user?.email}</h3>  
            <h2 className="checkout__title">Your Shopping Basket</h2>
            {
              basket.map((item)=>{
                return <CheckoutProduct
                        id={item.id}
                        imgsrc={item.imgsrc}
                        title={item.title}
                        price={item.price}
                        rating={item.rating}
                        hideButton
                />
              })
            }


        </div>
        <div className="checkout__rigth">
            <Subtotal/>
        </div>
       
      
    </div>
  )
}

export default Checkout
