import { useEffect, useState } from "react";

let ApplicationName = "Checkout"; 
export default ApplicationName;

export function openPopup(ref,style='flex') {
    ref.current.style.display = style;
    setTimeout(() => {
        ref.current.style.bottom = '0%';
    }, 1);
}

export function closePopup(ref) {
    ref.current.style.bottom = '-110%';
    setTimeout(() => {
        ref.current.style.display = 'none';
    }, 500);
}

export function useSwipeDown(ref, onSwipeDown, threshold = 50) {
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    useEffect(() => {
        if (!ref?.current) return;

        const element = ref.current;

        const handleTouchStart = (e) => {
            setTouchStart(e.touches[0].clientY);
        };

        const handleTouchMove = (e) => {
            setTouchEnd(e.touches[0].clientY);

            // Prevent browser pull-to-refresh
            if (touchStart !== null && touchEnd === null) {
                e.preventDefault();
            }
        };

        const handleTouchEnd = () => {
            if (touchStart !== null && touchEnd !== null) {
                const swipeDistance = touchEnd - touchStart;
                if (swipeDistance > threshold) {
                    if (onSwipeDown) onSwipeDown();
                }
            }
            setTouchStart(null);
            setTouchEnd(null);
        };

        element.addEventListener("touchstart", handleTouchStart, { passive: false });
        element.addEventListener("touchmove", handleTouchMove, { passive: false });
        element.addEventListener("touchend", handleTouchEnd);

        return () => {
            element.removeEventListener("touchstart", handleTouchStart);
            element.removeEventListener("touchmove", handleTouchMove);
            element.removeEventListener("touchend", handleTouchEnd);
        };
    }, [ref, touchStart, touchEnd, onSwipeDown, threshold]);
}
