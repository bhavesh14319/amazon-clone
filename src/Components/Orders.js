import React,{useEffect, useState} from 'react'
import '../CSS/orders.css'
import {db} from '../firebase'
import {useStateValue} from '../StateProvider'
import Order from './Order'

function Orders() {
    const [order, setOrder] = useState([]);
    const[{basket,user},dispatch] = useStateValue();

    useEffect(()=>{
        if(user){
        db.collection('users')
        .doc(user?.uid)
        .collection('orders')
        .orderBy('created','desc')
        .onSnapshot(snapshot => {
            setOrder(snapshot.docs.map(doc =>{
                return {
                    id:doc.id,
                    data:doc.data()
                }
            }))
        })
        }else{
            setOrder([]);
        }
    },[]);

  return (
    <div className='Orders'>
        <h1>Your Orders</h1>
        <div className='Orders__orderContainer'>
            {order?.map(order => {
                return <Order order={order}/>
            })}
        </div>
    </div>
  )
}

export default Orders
