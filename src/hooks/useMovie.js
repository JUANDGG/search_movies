
function useMovie (dataApi){
    


    const mappedMovies = dataApi.map(movie =>({
        id:movie.imdbID,
        title:movie.Title,
        image :movie.Poster,
        year:movie.Year
    }))
        


    return {mappedMovies};
}

export default useMovie;