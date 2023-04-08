import { Provider } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ProtectedRouted from './components/protectedRoute'
import Home from './pages/home'
import Quiz from './pages/my_quizzes'
import QuestionCreation from './pages/question_creation'
import store from './stores'

function App() {
  return (
    <div className="App">
      <main>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/my-quiz"
              element={
                <ProtectedRouted>
                  <Quiz />
                </ProtectedRouted>
              }
            />
            <Route
              path="/all-quiz"
              element={
                <ProtectedRouted>
                  <Quiz />
                </ProtectedRouted>
              }
            />
            <Route
              path="/question-create/:id"
              element={
                <ProtectedRouted>
                  <QuestionCreation />
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
