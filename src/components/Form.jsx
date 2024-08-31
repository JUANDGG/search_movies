//custom hooks 
import useForm from '@customHooks/useFormRef.js'
import useFormValid from '@customHooks/useFormValid.js'


function Form (){
    const {inputRef,changeRef} =useForm();
    const {error,validInputData} =useFormValid();

    

    const handleSubmit =(e)=>{
        e.preventDefault();
        changeRef() 
        
        validInputData(inputRef.current.value)   
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input required ref={inputRef} type="text" name='inptSearchMovie' placeholder="Avengers , Star Wars , The Matrix ..." />
                <button  type='submit'>Search</button>
            </div>
            {
                error!=undefined ? <p>{error}</p> :null
            }
        </form>
    )
}

export default Form ;