import './App.css';
import { Dialogs } from './Components/Dialogs/Dialogs';
import { Header } from './Components/Header/Header';
import { NavBar } from './Components/NavBar/NavBar';
import { Profile } from './Components/Profile/Profile';
import { Route, Routes, BrowserRouter } from 'react-router-dom'

function App(props) {
  return (
  <BrowserRouter> {/*Заварачиваем всю программу в данный тег обязательно*/}
    <div className='app-wrapper'>
      <Header />
      <NavBar />
      <div className='app-wrapper-content'>
        <Routes> {/*Switcher*/}
          <Route path='/profile' element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />} /> {/*Маршрут перекинет в компонент <Profile /> при появлении в командной строке Browser пути './profile' */}
          <Route path='/dialogs' element={<Dialogs newMessageBody={props.state.dialogsPage.newMessageBody} messages={props.state.dialogsPage.messages} dialogs={props.state.dialogsPage.dialogs} dispatch={props.dispatch}/>} /> 
        </Routes>
      </div>
    </div>
  </BrowserRouter>
  );
  
}

export default App;