import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/Login';
import SignUp from './pages/Signup';
import Main_Page from './pages/Main';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login></Login>}></Route>
          <Route path='/signup' element = {<SignUp></SignUp>}/>
          <Route path='/home' element = {<Main_Page></Main_Page>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
