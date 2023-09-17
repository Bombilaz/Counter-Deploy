import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useLocation } from "react-router-dom";
import { PATHS } from "./main.tsx";

function App() {
  const [count, setCount] = useState(0);
  const { pathname } = useLocation();

  return (
    <>
      <div>
        {(pathname === PATHS.MAIN || pathname === PATHS.VITE) && <img src={viteLogo} className="logo" alt="Vite logo" />}
        {(pathname === PATHS.MAIN || pathname === PATHS.REACT) && <img src={reactLogo} className="logo react" alt="React logo" />}
      </div>
      <h1>Тестовый проект для деплоя Фронтенд-Приложения</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
