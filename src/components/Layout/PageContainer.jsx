import { useState, useEffect } from 'react'

const PageContainer = ({ children, width = '250px', className = '' }) => {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(localStorage.getItem('sidebarCollapsed') === 'true');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        const handleToggle = (e) => {
            setSidebarCollapsed(e.detail.collapsed);
        };
        window.addEventListener('sidebarToggle', handleToggle);

        const handleMobileToggle = (e) => {
            setMobileMenuOpen(e.detail.isOpen);
        };
        window.addEventListener('mobileSidebarToggle', handleMobileToggle);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('sidebarToggle', handleToggle);
            window.removeEventListener('mobileSidebarToggle', handleMobileToggle);
        };
    }, []);

    return (
        <div
            className={`absolute right-0 bottom-0 ${windowWidth < 1100
                ? (mobileMenuOpen ? `w-[calc(100vw-${width})]` : 'w-screen')
                : (sidebarCollapsed ? 'w-[calc(100vw-56px)]' : `w-[calc(100vw-${width})]`)
                } h-[calc(100vh-65px)] p-4 overflow-y-auto overflow-x-hidden${className ? ` ${className}` : ''}`}
        >
            {children}
        </div>
    )
}

export default PageContainer