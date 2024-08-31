
//custom hooks
import useMovie from '@customHooks/useMovie.js';
import useFetch from "@customHooks/useFetch.js";

function Movies() {


    const {dataApi,error} =useFetch();


    
    //avoid contract with api
    const { mappedMovies } = useMovie(dataApi);


    
    

    return (
        <>
            {
                error==null ? (
                    mappedMovies.map(res => {
                        return <ul key={res.id}>
                                    <img src={res.image} alt={`poster movie of ${res.title}`} />
                                    <h3>{res.title}</h3>
                                    <p>{res.year}</p>
                                </ul>
                    })) : (
                    
                        <h2>{error}</h2>
                    
                )
            }

        </>
    )
}

export default Movies;