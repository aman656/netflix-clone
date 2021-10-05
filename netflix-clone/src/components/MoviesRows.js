import { useEffect, useState } from "react"
import './Moviesrows.css'
import Youtube from "react-youtube"
import movieTrailer from "movie-trailer"

const MoviesRows = (props)=>{
    const [movieslist,setMoviesList] = useState([]);
    const[showTrailer,setShowTrailer] = useState("")
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
    const opts = {
        height:"390px",
        width:"100%",
        playerVars:{

        },
        autoplay:1
    }
    const trailerHandler = (movie)=>{
        if(showTrailer){
            setShowTrailer("")
        }
        else{

            movieTrailer(movie?.name || "")
            .then((url)=>{
                const urlParams = new URLSearchParams(new URL(url).search)
                setShowTrailer(urlParams.get("v"))
            }).catch(err=>alert("Trailer cannot be played"))

        }

    }



    return <body className="bodies"><div className="main">
        <h2>{props.title}</h2>
            <div className="posters">
                {movieslist.map((movie)=>{
                    return(
                    <img  className={`inside_poster ${props.backdrop && "inside_posterlarge"} `} key={movie.id}  onClick={()=>trailerHandler(movie)}  src={`httPS://image.tmdb.org/t/p/original/${props.backdrop?movie.poster_path:movie.backdrop_path}`}alt={movie.name}        />
                    )
                })}

            </div>

        </div>
       {showTrailer && <Youtube  videoId={showTrailer}  opts={opts}             />}
        </body>


}

export default MoviesRows