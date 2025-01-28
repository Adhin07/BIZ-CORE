import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from '../Components/Main';
import SignupModal from '../Components/SignUp';
import LoginModal from '../Components/Login';


function App(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/signup" element={<SignupModal />} />
                <Route path="/login" element={<LoginModal />} />
            </Routes>
        </Router>
    )
}

export default App;