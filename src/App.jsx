// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import Spotlight from './components/Animate/Spotlight';
import './tailwind.css';
import { Outlet } from 'react-router-dom'

function App() {
  //  const [count, setCount] = useState(0)

  return (
    <>
      <div className='group/spotlight relative'>
      <Spotlight />
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
          <Outlet />
        </div>
      </div>
      {/* <Footer /> */}
      {/* <div><a target="_blank" href="https://icons8.com/icon/67673/linkedin">LinkedIn</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></div> */}
    </>
  )
}

export default App
