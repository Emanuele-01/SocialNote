import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home';
import Profile from './components/Profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
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
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
