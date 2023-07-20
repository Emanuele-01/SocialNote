import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LoginPage from './components/LoginPage';
import Home from './components/Home';
import Profile from './components/Profile';
import PersoanlPage from './components/PersonalPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {
  const isLoggedIn = useSelector(state => state.login.isLoggedIn);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          {isLoggedIn && (<Route path='/home' element={<Home />} />)}
          {isLoggedIn && (<Route path='/profile' element={<Profile />} />)}
          {isLoggedIn && (<Route path='/personalPage' element={<PersoanlPage />} />)}
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
