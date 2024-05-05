import React from "react";

/**
 * Header component displays the header of the application.
 * @param {Object} props - Component props.
 * @returns {JSX.Element} Header component.
 */

export const Header = () => {
    // Array of navigation items with label, href, and isSelected which signifies the current tab selected
    const navItems = [
        { label: 'Home', href: '/', isSelected: true },
        { label: 'Services', href: '/', isSelected: false },
        { label: 'Blog', href: '/', isSelected: false },
        { label: 'Offers', href: '/', isSelected: false },
        { label: 'About Us', href: '/', isSelected: false },
      ];
      
    return(
        <header className='sticky top-0 w-full h-12 px-4 font-semibold bg-white border-b border-slate-300 flex flex-wrap flex-row justify-between items-end gap-6'>
            <div className='h-8'>
                <h1>Logo</h1>
            </div>
            <nav className='w-2/3 h-8 flex flex-wrap flex-row justify-between gap-4'>
                {/* Map through navItems array to render navigation links */}
                {navItems.map((item, index) => (
                    <div key={index} className={`${
                        item.isSelected ? 'border-b-2 border-emerald-300' : ''
                    }`}>
                        <a href={item.href} onClick={() => setselected(item.label)}>{item.label}</a>
                    </div>
                ))}
            </nav>
            <div className='flex flex-row h-8 gap-4'>
                <span class="icon-[ic--outline-search]" style={{width: "24px", height: "24px"}}></span>
                <span className="icon-[lucide--bell-ring]" style={{width: "24px", height: "24px"}}></span>
                <span class="icon-[ic--baseline-person-outline]" style={{width: "24px", height: "24px"}}></span>
            </div>
        </header>
    )
}