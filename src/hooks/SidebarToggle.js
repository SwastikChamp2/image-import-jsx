import { useEffect } from 'react';

const useSidebarToggle = () => {
    useEffect(() => {
        const navToggle = document.getElementById("nav-toggle");
        const mainWrapper = document.getElementById("main-wrapper");

        const handleToggle = (e) => {
            e.preventDefault();
            mainWrapper.classList.toggle("toggled");
        };

        if (navToggle && mainWrapper) {
            navToggle.addEventListener("click", handleToggle);
        }

        return () => {
            if (navToggle) {
                navToggle.removeEventListener("click", handleToggle);
            }
        };
    }, []);
};

export default useSidebarToggle;