import React from "react";
import "../CSS/order.css";
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from 'react-currency-format';

function Order({ order }) {
  return (
    <div className="Order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")} </p>
      <p className="Order__id">
        <small>{order.id}</small>
      </p>

      {order.data.basket?.map((item) => {
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

      <CurrencyFormat
        renderText={(value) => (
           <h3 className="Order__total">Order Total : {value}</h3>   
        )}
        decimalScale={2}
        value={order.data.amount / 100 }
        displayType={"text"}
        thousandSeparator={true}CurrencyFormat
        prefix={"₹"}
      />
    </div>
  );
}

export default Order;
