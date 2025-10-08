import { useState } from 'react'
import './App.css'
import reactLogo from './assets/react.svg'
import svg_Test from './assets/svg_test.svg'
import Logo from './component/Logo.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <div>
        <Logo href="https://vite.dev" setContent={svg_Test} alt="Vite logo" className="logo" />
        <Logo href="https://react.dev" setContent={reactLogo} alt="React logo" className="logo" />
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
