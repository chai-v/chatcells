import React, {useState} from "react";

/**
 * MobileHeader component displays the header for mobile view.
 * @param {Object} props - Component props.
 * @param {Function} props.toggleOpen - Function to toggle the sidebar open/close state. Used to update state of parent component App.jsx
 * @returns {JSX.Element} MobileHeader component.
 */

export const MobileHeader = ({toggleOpen}) => {
  // State variable to manage the sidebar open/close state
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Function to handle opening/closing of the sidebar
  const handleOpen = () =>{
    toggleOpen(!sidebarOpen); // Toggle the sidebar open/close state of App.jsx using the provided toggleOpen function
    setSidebarOpen(!sidebarOpen); // Toggle the local sidebarOpen state
  }

  return (
    <header className="sticky top-0 bg-white border-b border-slate-200 z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px">
          <div className="flex">
            <button
              className="text-slate-500 hover:text-slate-600 lg:hidden"
              // Call handleOpen function when the button is clicked
              onClick={handleOpen}
            >
              <span className="sr-only">Open sidebar</span>
              <span class="icon-[ic--round-menu]" style={{width:"24px", height:"24px"}}></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}