const api_key = "0ac87fe9ef3c5a4ad3649cd43307fd9c"

const urls = {
    netflixOrignals:`/discover/tv?api_key=${api_key}&with_networks=213`,
    trending:`/trending/all/week?api_key=${api_key}&language=en-US`,
    topRated:`/movie/top_rated?api_key=${api_key}&language=en-US`,
    actionMovies:`/discover/movie?api_key=${api_key}&with_genres=28`,
    comedyMovies:`/discover/movie?api_key=${api_key}&with_genres=35`,
    horrorMovies:`/discover/movie?api_key=${api_key}&with_genres=27`,
    romanceMovies:`/discover/movie?api_key=${api_key}&with_genres=10749`,
    documentries:`/discover/movie?api_key=${api_key}&with_genres=99`
}

export default urls;