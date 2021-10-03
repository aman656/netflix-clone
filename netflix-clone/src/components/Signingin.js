import logo3 from "../assets/logo3.png"
import './Signingin.css'
import { Fragment } from "react"
import { useState } from "react"

const Signing = (props)=>{
    const [islogin,setislogin] = useState(false);
    const loginToggler = ()=>{
        setislogin(previous=>
            !previous
        )
    }

    return(
        <Fragment>
         <div className="head">
            <img    src={logo3}  alt="LOGO"/>
        </div> 
        <div className="signinform">
            <h1>{islogin ? "Sign In" : "Sign Up"}</h1>
            <input type="email" value={props.email} />
            <input/>
            <button>{islogin ? "Sign In":"Sign Up"}</button>
            <div className="end">
            <div className="ending">
                
              
                 <input type="checkbox" name="Remember me"/> 
                <h5>Remember me</h5>
    
            </div>
           <p>Need Help?</p>
        </div>
        <div className="lastpara" style={{display:"flex"}}>
        {islogin?" New to netflix?":"Already a member?"} <a href="#" onClick={loginToggler} className="lastanc">{islogin?"Sign up now.":"Login now."}</a> 
        </div>
        </div>
       
        </Fragment>
    )
}

export default Signing