import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Login from './components/Login';
import Me from './components/Me';
import { useEffect, useState } from 'react';
import CreateQuiz from './components/CreateQuiz';
import QuizInfo from './components/QuizInfo';

function App() {

  const [currentUser, setCurrentUser] = useState('')

  useEffect(()=>{
    fetch('/auth')
    .then(resp => {
      if(resp.ok){
        resp.json()
        .then(user => setCurrentUser(user))
      }
    })
  },[])


  return (
    <div className="App">
      <NavBar currentUser={currentUser}/>
      <Routes>
        <Route path='/me' element={<Me currentUser={currentUser} setCurrentUser={setCurrentUser}/>}></Route>
        <Route path='/login' element={<Login currentUser={currentUser} setCurrentUser={setCurrentUser} />}></Route>
        <Route path='/create-quiz' element={<CreateQuiz currentUser={currentUser}/>}></Route>
        <Route path='/quiz/:id' element={<QuizInfo currentUser={currentUser}/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
