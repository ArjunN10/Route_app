import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
function App() {
  return (
    <>
<Routes>
    <Route path='/' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/home' element={<Home/>}/>
</Routes>
    </>
  );
}

export default App;
