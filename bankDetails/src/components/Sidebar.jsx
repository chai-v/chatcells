import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export const Sidebar = ({mobile, isopen, toggleOpen}) => {
    const [sidebarExpanded, setSidebarExpanded] = useState(false);

    const handleSidebar = () =>{
        if(mobile){
            toggleOpen(!sidebarExpanded);
        }
        setSidebarExpanded(false);
    }

    useEffect(() => {
        setSidebarExpanded(isopen);
      }, [isopen]);
    
    const links = [
        { to: "/dashboard", text: "My Dashboard", icon: "ic--round-dashboard" },
        { to: "/links", text: "TOTM LINKS", icon: "ic--round-insert-link" },
        { to: "/summary", text: "Daily Summary", icon: "ic--outline-sticky-note-2" },
        { to: "/details", text: "Bank Details", icon: "ic--baseline-account-balance" }
    ];

    return(
        <>
            <div
                id="sidebar"
                className={`flex flex-col z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 overflow-y-hidden lg:overflow-y-hidden no-scrollbar bg-white lg:sidebar-expanded:w-20 shrink-0 border-r border-gray-200 sm:translate-x-0 p-4 transition-all duration-300 ${
                    (sidebarExpanded) ? ((mobile) ? "w-full" : "w-64") : ((mobile) ? "" : "w-20")
                }`}
            >
                <div className="space-y-4">
                    {!mobile && <div className="lg:inline-flex  mt-auto ">
                        <div className="px-3 justify-end">
                            <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
                            <span className="sr-only">Expand / collapse sidebar</span>
                            <span class={`icon-[ic--baseline-arrow-back] duration-300 ${sidebarExpanded ? 'rotate-0' : 'rotate-180'}`} style={{width: "24px", height: "24px", }}></span>
                            </button>
                        </div>
                    </div> }
                    <ul>
                    {links.map((link, index) => (
                            <li key={index}>
                                <Link to={link.to} onClick={handleSidebar} className="flex flex-wrap align-middle p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100">
                                    <span className={`icon-[${link.icon}] duration-700 ${sidebarExpanded && "mr-4"}`} style={{width: "25px", height: "25px"}}></span>
                                    {sidebarExpanded && <>
                                        <span className={`${!sidebarExpanded && "scale-0"}`}>{link.text}</span>
                                        <span className="flex-grow"></span>
                                        {!mobile &&
                                            <span className={`icon-[ic--baseline-keyboard-arrow-right] duration-700 ${!sidebarExpanded && "scale-0"}`} style={{width: "24px", height: "24px"}}></span>
                                        }
                                    </>
                                    }
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}