import React from 'react'
import '../CSS/Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link } from 'react-router-dom';
import {useStateValue} from '../StateProvider'
import {auth} from '../firebase'

// import { signOut} from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js';
function Header() {
  const [{basket,user}] = useStateValue();

  const handleAuthentication=() =>{
    // console.log('hii');
      if(user){
        auth.signOut();
      }
      // console.log(user.email);
 }

 
  return (
    <div className='header'>
      <Link to="/">
        <img className='header__logo' src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Emblem.jpg" alt="" />
      </Link>
        <div className="header__search">
            <input type="text" className="header__searchinput" />
            <SearchIcon className='header__searchIcon'/>
            {/* logo */}
        </div>

        <div className="header__nav">
        <Link to={ !user && '/login'}>
          <div onClick={handleAuthentication} className="header__options">
              <span className="header__optionLineOne">Hello {!user? 'Guest' : user.email}</span>
              <span className="header__optionLineTwo">{user? 'Sign Out':'Sign In'}</span>
          </div>
        </Link>
        <Link to='/Orders'>
          <div className="header__options">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
         
          </div>
        </Link>    
          <div className="header__options">
               <span className="header__optionLineOne">Your</span>
              <span className="header__optionLineTwo">Prime</span> 
          </div>

          <Link to="/Checkout">
          <div  className="header__BasketOption">
              <ShoppingCartIcon/>
              <span className="header__optionLineTwo header__cartCount">{basket?.length}</span>
          </div>
          </Link>
        </div>
    </div>
  )
}

export default Header
