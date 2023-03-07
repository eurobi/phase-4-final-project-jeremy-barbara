import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Login from './components/Login';
import Me from './components/Me';
import { useEffect, useState } from 'react';
import CreateQuiz from './components/CreateQuiz';
import QuizInfo from './components/QuizInfo';
import Attempt from './components/Attempt';
import AttemptResults from './components/AttemptResults';

function App() {

  const [currentUser, setCurrentUser] = useState('')

  const [quizzes, setQuizzes] = useState([])

    useEffect(() => {
        fetch('/quizzes')
        .then(r => r.json())
        .then(quizzes => setQuizzes(quizzes))
    },[currentUser])

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
        <Route path='/me' element={<Me quizzes={quizzes} setQuizzes={setQuizzes} currentUser={currentUser} setCurrentUser={setCurrentUser}/>}></Route>
        <Route path='/login' element={<Login currentUser={currentUser} setCurrentUser={setCurrentUser} />}></Route>
        <Route path='/create-quiz' element={<CreateQuiz quizzes={quizzes} setQuizzes={setQuizzes} currentUser={currentUser}/>}></Route>
        <Route path='/quizzes/:id' element={<QuizInfo quizzes={quizzes} setQuizzes={setQuizzes} currentUser={currentUser}/>}></Route>
        <Route path='/quizzes/:id/attempt/:id' element={<AttemptResults currentUser={currentUser}/>}></Route>
        <Route path='/' element={<Home quizzes={quizzes} setQuizzes={setQuizzes} currentUser={currentUser}/>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
