import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

function countAdd(){
  setCount(Math.floor(Math.random()*10)+1)
}
  return (
  
     <div className='container-Random'>
      <h1>Random Number Genrater</h1>
      <b><h3>1-10 <b style={{fontSize:"xx-large",color:"purple"}}>({count})</b></h3></b>
      <button onClick={countAdd}>Genertor</button>
     </div>
    
  )
}

export default App

