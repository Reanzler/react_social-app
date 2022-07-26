import './App.css';
import { Dialogs } from './Components/Dialogs/Dialogs';
import { Header } from './Components/Header/Header';
import { NavBar } from './Components/NavBar/NavBar';
import { Profile } from './Components/Profile/Profile';

function App() {
  return (
<div className='app-wrapper'>
  <Header />
  <NavBar />
  <div className='app-wrapper-content'>
    <Dialogs />
    {/* <Profile /> */}
  </div>
</div>);
}

export default App;
