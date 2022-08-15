import './App.css';
import { Dialogs } from './Components/Dialogs/Dialogs';
import { Header } from './Components/Header/Header';
import { NavBar } from './Components/NavBar/NavBar';
import { Profile } from './Components/Profile/Profile';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import {state} from './State'

function App() {
  return (
  <BrowserRouter> {/*Заварачиваем всю программу в данный тег обязательно*/}
    <div className='app-wrapper'>
      <Header />
      <NavBar />
      <div className='app-wrapper-content'>
        <Routes> {/*Switcher*/}
          <Route path='/profile' element={<Profile postsData={state.dialogsPage.postsData}/>} /> {/*Маршрут перекинет в компонент <Profile /> при появлении в командной строке Browser пути './profile' */}
          <Route path='/dialogs' element={<Dialogs messages={state.profilePage.messages} dialogs={state.profilePage.dialogs}/>} /> 
        </Routes>
      </div>
    </div>
  </BrowserRouter>
  );
  
}

export default App;
