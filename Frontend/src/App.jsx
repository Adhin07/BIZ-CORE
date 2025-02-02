import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Main from './Components/Main'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <>
    <div className='App'>
    <Toaster position="top-right" reverseOrder={false} />
      <Header/>
       <Main/>
     <Footer/>
    </div>
    
    </>
  )
}

export default App
