import "./Navigation.css"
import { useState,useEffect } from "react"
import logo from '../assets/logo.png'
import logo2 from '../assets/logo2.png'

const Navigation=()=>{
    const[change,setChange] = useState(false)
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                setChange(true)
            }else{
                setChange(false)
            }
        })
        return(()=>{
            window.removeEventListener("scroll")
        })
    },[])
    return (
        <div className={`nav  ${change?"background":""} `}>
            <img  className="logo"    src= {logo}  alt="Netflix logo"    />
            <img  className="logo2"    src= {logo2}  alt="Netflix logo"    />
        </div>
    )
}
export default Navigation