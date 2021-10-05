import logo3 from "../assets/logo3.png"
import BodyClassName from "react-body-classname"
import { Fragment } from "react"
import { useState,useRef} from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router"

import classes from './Signing.module.css'


import { loggingIn,signingUp } from "../store"

const Signing = (props)=>{
    const [islogin,setislogin] = useState(false);
    const emailRef = useRef()
    const passRef = useRef()
    const loginToggler = ()=>{
        setislogin(previous=>
            !previous
        )
    }
  



    const dispatch = useDispatch()
    const history = useHistory()
    const submitHandler = ()=>{
        const email = emailRef.current.value;
        const password = passRef.current.value
        if(islogin){
            dispatch(loggingIn("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDkXTrixg_1Ug9KHA8cJ1fSpoweZYLQI-g",email,password,history,islogin))
        }
        else{
           dispatch(signingUp("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDkXTrixg_1Ug9KHA8cJ1fSpoweZYLQI-g",email,password)).then((res)=>{
               if(res.ok){
              return res.json()

               }else{
                   throw new Error("Something went wrong!")

               }
           }).then((data)=>{
               setislogin(true)
           }).catch((err)=>{
               alert(err.message)
           })
        }
    }

    return(
  
        <body className={classes.body}>
         <div className={classes.head}>
            <img    src={logo3}  alt="LOGO"/>
        </div> 
        <div className={classes.signinform}>
            <h1>{islogin ? "Sign In" : "Sign Up"}</h1>
            <input type="email" defaultValue={props.email} ref={emailRef} />
            <input  type="password" ref={passRef}   />
            <button onClick={submitHandler} >{islogin ? "Sign In":"Sign Up"}</button>
            <div className={classes.end}>
            <div className={classes.ending}>
                
              
                 <input type="checkbox" name="Remember me"/> 
                <h5>Remember me</h5>
    
            </div>
           <p>Need Help?</p>
        </div>
        <div className={classes.lastpara} style={{display:"flex"}}>
        {islogin?" New to netflix?":"Already a member?"} <p href="#" onClick={loginToggler} className={classes.lastanc}>{islogin?"Sign up now.":"Login now."}</p> 
        </div>
        </div>
        <div className={classes.need}></div>
        </body>
       
       
    
    )
}

export default Signing