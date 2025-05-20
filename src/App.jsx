import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container text-center mt-5'>
        <h1>Counter:{count}</h1>
       <button onClick={() =>{setCount(count +1)} } className="btn btn-primary m-1">Increment</button>
       <button onClick={() =>{setCount(count -1)} } className="btn btn-dark m-1">Decrement</button>
       <button onClick={() =>{setCount(0)} } className="btn btn-success">Reset</button>
    </div>
  )
}

export default App
