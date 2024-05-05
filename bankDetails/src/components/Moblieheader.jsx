import React, {useState} from "react";

export const MobileHeader = ({toggleOpen}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleOpen = () =>{
    toggleOpen(!sidebarOpen);
    setSidebarOpen(!sidebarOpen);
  }

  return (
    <header className="sticky top-0 bg-white border-b border-slate-200 z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px">
          <div className="flex">
            <button
              className="text-slate-500 hover:text-slate-600 lg:hidden"
              // aria-controls="sidebar"
              // aria-expanded={sidebarOpen}
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