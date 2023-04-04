import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import QuestionCreation from './pages/question_creation';
import Quiz from './pages/my_quizzes';
import store from './stores';

function App() {
  return (
    <div className="App">
      <main>
          <Provider store={store}>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/quizzes" element={ < Quiz/>}/>
              <Route path="/question-create/:id" element={<QuestionCreation/>}/>
            </Routes>
          </Provider>
      </main>
    </div>
  );
}

export default App;
