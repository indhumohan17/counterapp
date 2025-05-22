import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const counterRef = useRef(null)

  // Animation trigger on count change
  const animateCounter = () => {
    if (counterRef.current) {
      counterRef.current.classList.remove('counter-animate')
      // Force reflow to restart animation
      void counterRef.current.offsetWidth
      counterRef.current.classList.add('counter-animate')
    }
  }

  const handleSetCount = (val) => {
    setCount(val)
    animateCounter()
  }

  return (
    <div>
      <div className='color-container ' style={{ position: 'absolute', top: '4rem', left: '34rem' }}> <h1>Counter App</h1></div>
       <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
       
      <div className="card card-animate text-center shadow" style={{ width: '22rem', padding: '2rem' ,position:'relative'}}>
        
        <h1 ref={counterRef} className='mt-3 mb-4'>{count}</h1>
       
        <button onClick={() => handleSetCount(count + 1)} className="btn btn-primary m-2" style={{ width: '8rem', borderRadius:'0.2rem' }}>Increment</button>
        <button onClick={() => handleSetCount(count - 1)} className="btn btn-dark m-2 " style={{ width: '8rem' , borderRadius:'0.2rem',position:'absolute', bottom:'5.6rem', left:'10.7rem' }}>Decrement</button>
        <button onClick={() => handleSetCount(0)} className="btn btn-success mt-3 " style={{ width: '15rem', borderRadius:'0.2rem', marginLeft:'1.2rem' }}>Reset</button>
      </div>
      <footer className="bg-light text-center py-3">
        <p>Made with ❤️ by Sathish Kumar</p>
      </footer>
      
    </div>
    </div>
   


  )
}

export default App
