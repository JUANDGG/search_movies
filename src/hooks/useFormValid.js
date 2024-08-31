import { useState,useContext } from "react";

//context
import {MovieContext} from '@context/MovieContext.jsx'

function useFormValid(){
    const [error ,setError] = useState(undefined);

    //context movies
    const {setInputValue} =useContext(MovieContext);

    const validInputData =(value)=>{
        if (!/^[A-Za-z]+(\s[A-Za-z]+)*$/.test(value)) {
            setError('Error: datos inválidos');
        }

        else {
            setError(undefined)
            setInputValue(value)
        }
    }
   
    return {error,validInputData}
}


export default useFormValid;