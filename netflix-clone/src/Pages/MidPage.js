import Banner from "../components/Banner";
import MoviesRows from '../components/MoviesRows'
import urls from '../allurls'
import { Fragment } from "react";


const MidPage = ()=>{
    return (
        <Fragment>
        <Banner/> 
        <MoviesRows  title = {"NETFLIX ORIGNALS"}  tofetch = {urls.netflixOrignals} backdrop/>
        <MoviesRows  title = {"TRENDING NOW"}  tofetch = {urls.trending} />
        <MoviesRows  title = {"TOP RATED"}  tofetch = {urls.topRated} />
        <MoviesRows  title = {"ACTION MOVIES"}  tofetch = {urls.actionMovies} />
        <MoviesRows  title = {"COMEDY MOVIES"}  tofetch = {urls.comedyMovies} />
        <MoviesRows  title = {"HORROR MOVIES"}  tofetch = {urls.horrorMovies} />
        <MoviesRows  title = {"ROMANCE MOVIES"}  tofetch = {urls.romanceMovies} />
        <MoviesRows  title = {"DOCUMENTRIES"}  tofetch = {urls.documentries} />
        </Fragment>
    )

}

export default MidPage;