import logo from '/logo.png'
import './Start.css'
import { Fragment,useRef } from 'react'
import {useDispatch} from "react-redux"
import { authActions } from '../store'
import { useHistory } from 'react-router'

const Start = ()=>{
    const emailRef = useRef()
    const dispatch = useDispatch()
    const history = useHistory()
    const submitHandler = ()=>{
        const emailValue = emailRef.current.value
        dispatch(authActions.emailDispatching(emailValue))
        history.push("/auth")

    }
    return(
        <Fragment>
        <div className="start">
            <nav>
                <img  src= {logo} alt="Company log" />
                <button>Sign in</button>
                
            </nav>
            <div className ="startmid">
                <h2>Unlimited movies,TV <br/>shows, and more.</h2>
                <h4>Watch anywhere. Cancel anytime.</h4>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
               
                    <form onSubmit={submitHandler} className="last">
                <input type="email"  ref={emailRef} required/>
                <button type="submit">Get Started  </button>
                </form>
                

            </div>
            <div className="lastFading"></div>
            </div>
          
</Fragment>

    )
}

export default Start