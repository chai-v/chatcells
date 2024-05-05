import { useState, useEffect } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { MobileHeader } from './components/Moblieheader'

function App() {
  const [isMobile, setIsMobile] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  // const setOpen = (value) => {
  //   setIsOpen(value);
  // }

  function setOpen(value) {
    setIsOpen(value);
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };
  
    handleResize();
  
    window.addEventListener('resize', handleResize);
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
    <div className='overflow-y-hidden'>
      <div className='sticky top-0 w-full h-auto over'>
        {isMobile ? <MobileHeader toggleOpen={setOpen}/> : <Header/>}
      </div>
      { isMobile ?
        <div className='w-full h-auto flex flex-row'>
          {(isOpen) ?
            <Sidebar mobile={isMobile} isopen={isOpen} toggleOpen={setOpen}/> :
            <Outlet mobile={isMobile}/>
          }
        </div>
      :
      <div className='w-full h-auto flex flex-row'>
        <Sidebar mobile={isMobile} isopen={isOpen} toggleOpen={setOpen}/>
        <div>
          <Outlet/>
        </div>
    </div>
      } 
      </div>
    </>
  )
}

export default App
