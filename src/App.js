import { useSelector } from 'react-redux'
import LoginPage from './components/LoginPage/LoginPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ProfilePage } from './components/ProfilePage/ProfilePage'
import './App.css' //стили должны быть в самом низу

function App() {
  const state = useSelector((state) => state.auth)
  console.log(state)

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/profile"
            element={<ProfilePage login={state.login} />}
          />
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
