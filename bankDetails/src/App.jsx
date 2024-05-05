import { useState, useEffect } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { MobileHeader } from './components/Moblieheader'

//App component is used here to define the main playout of the components
function App() {
  // State variables to manage mobile view and sidebar open/close state

  //Boolean value to determine whether current screen is a mobile screen or not
  const [isMobile, setIsMobile] = useState(true);
  //Boolean value to determine whether the sidebar is open or not
  const [isOpen, setIsOpen] = useState(false);

  //Function to set state of isOpen. Later passed as props to Sidebar and MobileHeader child components to pass data from child to parent
  function setOpen(value) {
    setIsOpen(value);
  }

  //useEffect to determine and set state for isMobile upon mounting of the component
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
    <div>
      {/* Conditional rendering of different headers based on width of the screen */}
      <div className={`${isMobile && "sticky top-0"} w-full`}>
        {isMobile ? <MobileHeader toggleOpen={setOpen}/> : <Header/>}
      </div>
      {/* Conditional rendering to ensure Sidebar is above the Outlet component in mobile when menu button is clicked */}
      { isMobile ?
        <div className='w-full h-auto flex flex-row'>
          {(isOpen) ?
            <Sidebar mobile={isMobile} isopen={isOpen} toggleOpen={setOpen}/> :
            <Outlet mobile={isMobile}/>
          }
        </div>
      :
      // Flex used to ensure Sidebar and Outlet horizontally share the screen width
      <div className='w-full h-[91vh] flex flex-row overflow-y-hidden no-scrollbar'>
        <Sidebar mobile={isMobile} isopen={isOpen} toggleOpen={setOpen}/>
        <div className=" bottom-0 overflow-y-auto">
          <Outlet/>
        </div>
    </div>
      } 
      </div>
    </>
  )
}

export default App
