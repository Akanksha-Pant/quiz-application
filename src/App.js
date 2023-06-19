import { Provider } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ProtectedRouted from './components/protectedRoute'
import Home from './pages/home'
import Quizzes from './pages/quizzes'
import PlayQuiz from './pages/play_quiz'
import Questions from './pages/questions'
import store from './stores'

function App() {
  return (
    <div className="App">
      <main>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/quizzes"
              element={
                <ProtectedRouted>
                  <Quizzes />
                </ProtectedRouted>
              }
            />
            <Route
              path="/quiz/:quizId"
              element={
                <ProtectedRouted>
                  <PlayQuiz />
                </ProtectedRouted>
              }
            />
            <Route
              path="/questions/:quiz"
              element={
                <ProtectedRouted>
                  <Questions />
                </ProtectedRouted>
              }
            />
          </Routes>
        </Provider>
      </main>
    </div>
  )
}

export default App
