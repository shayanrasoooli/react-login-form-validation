import './App.css';
// import SignUp from './components/signup';
import Login from './components/Login';
import SignUp from './components/signup';
import { Route , Routes , Navigate} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <SignUp/> */}
      {/* <Login/> */}
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/' element={<Navigate to="/signup" />}/>



      </Routes>
      




    </div>
  );
}

export default App;
