import { useEffect, useState } from "react"
import urls from "../allurls"
import './Banner.css';


const Banner = ()=>{
    const [toDisplay,settoDisplay]  =  useState([]);

    useEffect(()=>{
            const recieving = async()=>{
                const response = await fetch(`https://api.themoviedb.org/3${urls.netflixOrignals}`);
                if(!response.ok){
                    throw new Error("Something went wrong")
                }
                const data = await response.json()
                settoDisplay(data.results[Math.floor(Math.random()*data.results.length -1)])
            }
            recieving()
        
    },[])
    console.log(toDisplay)
    function cuttingdescription(str,n){
        return str?.length>n ? str.substr(0,n-1) + "..." : str;
    }

    return(
     
        <header className="midmain" style={{
            backgroundSize:"cover",
            backgroundImage:`url("httPS://image.tmdb.org/t/p/original/${toDisplay.backdrop_path}")`,
            backgroundPosition:"center center",
            backgroundColor:"#111"
        }}>
        <div className="inside_content">
            <h1 className="banner_head">{toDisplay?.name || toDisplay?.title || toDisplay?.original_name}</h1>
            <div className="midbtn">
                <button className="btn">Play</button>
                <button className="btn">My List</button>
            </div>
            <h1 className="description">{cuttingdescription(toDisplay?.overview,150)}</h1>

        </div>
        <div className="fading"    />
        </header>

    )

}
export default Banner