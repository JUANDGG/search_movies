
//context
import { MovieProvider } from '@context/MovieContext.jsx'

//Components
import Form from '@components/Form.jsx';
import Movies from '@components/Movies.jsx';

//style sheet

import '@styleSheets/App.css' ;
function App() {
  

  return (
    <div className='page'>
       <MovieProvider>
        <header className='page--header'>
            <h1>Searh movies</h1>
            <Form />
        </header>
        <main className='page--main'>
            <Movies />
        </main>

       </MovieProvider>
    </div>
  )
}

export default App
