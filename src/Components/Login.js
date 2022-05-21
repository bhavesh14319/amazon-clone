import React, { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import '../CSS/login.css'
import {auth} from "../firebase"


function Login() {

    const navigate = useNavigate();

    const signIn = e => {
        e.preventDefault();
        
        console.log(typeof(email))
        console.log(typeof(password))
        auth.signInWithEmailAndPassword(String(email),String(password))
        .then(auth=>{
            navigate('/');
        })
        .catch(error=>alert(error.message))
       
    }

    const register = e => {
        e.preventDefault();
        
        console.log(typeof(email))
        console.log(typeof(password))
        auth.createUserWithEmailAndPassword(String(email),String(password))
        .then((auth)=>{
            console.log(auth);
        })
        .catch(error => alert(error.message));

        if(auth){
            navigate('/');
        }
    }

    const [email,setEmail] =useState('');
    const[password, setPassword] = useState('');


  return (
    <div className='login'>
       <Link to='/'>
          <img className='login__logo' src="https://tse3.mm.bing.net/th?id=OIP.VBlGkAIjAGCABg5E-JlycQHaCS&pid=Api&P=0&w=544&h=168" alt="" />
       </Link> 

       <div className="login__container">
           <h1>Sign-In</h1>
           <form action="">
               <h5>E-mail</h5>
               <input onChange={e =>setEmail(e.target.value)} type="text" value={email}/>

               <h5>Password</h5>
               <input onChange={e=>setPassword(e.target.value)} type="password" value={password}/>

               <button onClick={signIn} type='submit' className='login__signInButton'>Sign IN</button>
           </form>
            <p>
            By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
            </p>   

            <span>Didn't have account? </span><button onClick={register} className='login__RegisterButton' >Create Account</button> 
       </div>
    </div>

  )
}

export default Login
