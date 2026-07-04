import { useState, useEffect } from 'react'

// These must always match the widths used in Sidebar.jsx
const SIDEBAR_EXPANDED_WIDTH = 250;
const SIDEBAR_COLLAPSED_WIDTH = 56;

// Fixed visual gap between the sidebar and the page content.
// This stays 30px whether the sidebar is open or collapsed.
const SIDEBAR_CONTENT_GAP = 30;

const PageContainer = ({ children, className = '' }) => {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(localStorage.getItem('sidebarCollapsed') === 'true');
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        const handleToggle = (e) => {
            setSidebarCollapsed(e.detail.collapsed);
        };
        window.addEventListener('sidebarToggle', handleToggle);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('sidebarToggle', handleToggle);
        };
    }, []);

    const isMobileView = windowWidth < 1100;
    const sidebarWidth = sidebarCollapsed ? SIDEBAR_COLLAPSED_WIDTH : SIDEBAR_EXPANDED_WIDTH;

    // On mobile the sidebar becomes an overlay drawer, so the content takes the
    // full width and doesn't need to leave room for it.
    const leftOffset = isMobileView ? 0 : sidebarWidth + SIDEBAR_CONTENT_GAP;

    return (
        <div
            className={`absolute top-[65px] right-0 bottom-0 py-4 pr-4 overflow-y-auto overflow-x-hidden transition-[left] duration-200 ${className}`}
            style={{ left: leftOffset }}
        >
            {children}
        </div>
    )
}

export default PageContainer
