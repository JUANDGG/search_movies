
//get environment variables
const API_KEY =  import.meta.env.VITE_API_KEY_1
const URI =import.meta.env.VITE_URI_API_OMDBAPI 


//build the uri with which we will consult the data
function buildUriSearch (value){
    const NEW_URI =URI.concat(`?apikey=${API_KEY}&s=${value}`)
    return NEW_URI
}

export default buildUriSearch




