import UserContextProvider from '../context/UserContextProvider'
import './App.css'

function App() {


  return (
    <UserContextProvider>
      <h1>React with Context</h1>
    </UserContextProvider>
  )
}

export default App
