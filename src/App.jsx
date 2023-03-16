
import './App.css'
import { Header } from './common/Header/Header'
import { Home } from './pages/Home/Home'
import { Login } from './pages/Login/Login'

function App() {

  return (
    <div className="App">
      {/* <Home /> */}
      <Header />
      <Login />
    </div>
  )
}

export default App
