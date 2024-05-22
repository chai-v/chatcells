import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

/**
 * Sidebar component renders the sidebar navigation.
 * @param {Object} props - Component props.
 * @param {boolean} props.mobile - Indicates if the sidebar is being displayed on a mobile device.
 * @param {boolean} props.isopen - Indicates if the sidebar is open.
 * @param {Function} props.toggleOpen - Function to toggle the sidebar open/close state.
 * @returns {JSX.Element} Sidebar component.
 */

export const Sidebar = ({mobile, isopen, toggleOpen}) => {
    
    // State variable to manage the expanded state of the sidebar
    const [sidebarExpanded, setSidebarExpanded] = useState(false);

    const handleSidebar = () =>{
        // Toggle the sidebar open/close state if on mobile
        if(mobile){
            toggleOpen(!sidebarExpanded);
        }
        // Always close the sidebar when a link is clicked
        setSidebarExpanded(false);
    }

    // Effect to synchronize sidebarExpanded state with isopen prop
    useEffect(() => {
        setSidebarExpanded(isopen);
      }, [isopen]);
    
    // Array of sidebar links
    const links = [
        { to: "/dashboard", text: "My Dashboard", icon: "icon-[ic--round-dashboard]" },
        { to: "/links", text: "TOTM LINKS", icon: "icon-[ic--round-insert-link]" },
        { to: "/summary", text: "Daily Summary", icon: "icon-[ic--outline-sticky-note-2]" },
        { to: "/details", text: "Bank Details", icon: "icon-[ic--baseline-account-balance]" }
    ];

    return(
        <>
           <div
                id="sidebar"
                className={`h-full flex flex-col z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 lg:overflow-y-hidden no-scrollbar bg-white shrink-0 border-r border-gray-200 p-4 transition-all duration-300 ${
                    (sidebarExpanded) ? ((mobile) ? "w-full" : "w-fit") : ((mobile) ? "" : "w-20")
                }`}
            >
                <div className="space-y-4">
                    {/* Toggles expanded local state to open and close the sidebar on large screen devices  */}
                    {!mobile && <div className="lg:inline-flex mt-auto ">
                        <div className="px-3 justify-end">
                            <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
                            <span className="sr-only">Expand / collapse sidebar</span>
                            <span class={`icon-[ic--baseline-arrow-back] ${sidebarExpanded ? 'rotate-0' : 'rotate-180'}`} style={{width: "24px", height: "24px", }}></span>
                            </button>
                        </div>
                    </div> }
                    <ul>
                    {/* Map through links array to render sidebar navigation links */}
                    {links.map((link, index) => (
                            <li key={index}>
                                <Link to={link.to} onClick={handleSidebar} className="flex align-middle p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100">
                                    <span className={`${link.icon} ${sidebarExpanded && "mr-4"}`} style={{width: "25px", height: "25px"}}></span>
                                    {/* Shrink and expansion of label and arrow button of side bar links on close and open of sidebar */}
                                    {sidebarExpanded && <>
                                        <span className={`${!sidebarExpanded ? "hidden" : "block"}`}>{link.text}</span>
                                        <span className="flex-grow"></span>
                                        {!mobile &&
                                            <span className={`icon-[ic--baseline-keyboard-arrow-right] ${!sidebarExpanded ? "hidden" : "block"}`} style={{width: "24px", height: "24px"}}></span>
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