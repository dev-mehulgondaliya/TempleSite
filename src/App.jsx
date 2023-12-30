import './App.css'
import RouterPage from './Router/RouterPage'
import MyState from './Context/StateData/MyState'

function App() {

  return (
    <MyState>
      <RouterPage />
    </MyState>
  )
}

export default App
