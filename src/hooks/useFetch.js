
//utiles
import buildUriSearch from '@util/buildUriSearch.js'

//services
import fetchService from '@services/fetchService.js'

//use context 
import {MovieContext} from '@context/MovieContext.jsx'

//hooks
import { useState,useContext,useEffect  } from 'react';

function useFetch (){
    //context
    const {inputValue} =useContext(MovieContext);
    //hooks
    const [dataApi,setDataApi] =useState([]);
    const [error ,setError]=useState(null);
    
    
    
    useEffect(()=>{
        if(inputValue!=""){
            
            const buildUri =buildUriSearch(inputValue);
            
            fetchService(buildUri)
                .then(res=>{
                    const {Search} = res;

                    
                    if(Search==undefined){
                        setError("Results no found")
                    }else{
                        setDataApi(Search)
                        setError(null)
                    }
        
                });

            

           
        }
    },[inputValue,setError])
    
    
    return {dataApi,error}
    
}
export default useFetch