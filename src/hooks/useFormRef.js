import { useRef } from "react";

function useForm(){

   const inputRef = useRef();


    const changeRef =()=>{
        const inputEle = inputRef.current
        inputEle.value ;
    }


    return {inputRef,changeRef} 

}

export default useForm