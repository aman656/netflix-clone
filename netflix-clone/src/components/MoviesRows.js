import { useEffect, useState } from "react"
import './Moviesrows.css'

const MoviesRows = (props)=>{
    const [movieslist,setMoviesList] = useState([]);
    useEffect(()=>{
        const recieving = async()=>{
            const response = await fetch(`https://api.themoviedb.org/3${props.tofetch}`);
            if(!response.ok){
                throw new Error("Something went wrong")
            }
            const data = await response.json();
            setMoviesList(data.results)
        }

        recieving()
    },[props.tofetch])
    return <div className="main">
        <h2>{props.title}</h2>
            <div className="posters">
                {movieslist.map((movie)=>{
                    return(
                    <img  className={`inside_poster ${props.backdrop && "inside_posterlarge"} `} key={movie.id}  src={`httPS://image.tmdb.org/t/p/original/${props.backdrop?movie.poster_path:movie.backdrop_path}`}alt={movie.name}        />
                    )
                })}

            </div>

        </div>


}

export default MoviesRows