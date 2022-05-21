
import './App.css';
import Home from './Components/Home'
import Header from './Components/Header'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Checkout from './Components/Checkout';
import Login from './Components/Login';
import { useEffect } from 'react';
import {auth} from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Components/Payment'
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
import Orders from './Components/Orders'
 const promise = loadStripe('pk_test_51L1BNJSGf8N2MKaAoatdr8jpGKCtjdVDnV1sWKeSSRol38WeXcZsx8R9i5sMI59CIg7smwNA55y0gSLzxBeYVg1f00isq0R4Sl');

function App() {

  const [{},dispatch] = useStateValue();

  useEffect(()=>{
    //will only run once when the app component loads.
      auth.onAuthStateChanged(authUser=>{
        // console.log(authUser);
        if(authUser){
          // the user just logged in / the user was logged in
          dispatch({
            type:'SET_USER',
            user:authUser,
          })
        }else{
          // the user is logged out
          dispatch({
            type:'SET_USER',
            user:null,
          })
          dispatch({
            type:'EMPTY_BASKET'
          })
        }
      })
  },[])


  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/orders" element={[<Header/>,<Orders/>]}/>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/Checkout' element={[<Header/>,<Checkout/>]}/>
          <Route path='/payment' element={[<Header/>,<Elements stripe={promise}><Payment/></Elements>]}/>
          <Route path='/' element={[<Header/>,<Home/>]}/>
        </Routes>
      </div>
    </Router>
  );

}

export default App;
