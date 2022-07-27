import './App.css';
import { Dialogs } from './Components/Dialogs/Dialogs';
import { Header } from './Components/Header/Header';
import { NavBar } from './Components/NavBar/NavBar';
import { Profile } from './Components/Profile/Profile';
import { Route, Routes, Link, BrowserRouter } from 'react-router-dom'

function App() {
  return (
<div className='app-wrapper'>
  <Header />
  <NavBar />
  <div className='app-wrapper-content'>
    <Routes>
      <Route path='/profile' element={<Profile />} />
      <Route path='/dialogs' element={<Dialogs />} />
    </Routes>
  </div>
  </div>);
}

export default App;
