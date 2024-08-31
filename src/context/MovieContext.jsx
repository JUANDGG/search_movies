import { createContext, useState } from 'react';


const MovieContext = createContext();

const MovieProvider = ({children}) => {
    const [inputValue, setInputValue] = useState('');

    return (
        <MovieContext.Provider value={{ inputValue, setInputValue }}>
            {children}
        </MovieContext.Provider>
    );
};

export {
    MovieContext,
    MovieProvider
}