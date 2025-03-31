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

export function useSwipeDown(onSwipeDown, threshold = 50) {
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    useEffect(() => {
        const handleTouchStart = (e) => {
            setTouchStart(e.touches[0].clientY);
        };

        const handleTouchMove = (e) => {
            setTouchEnd(e.touches[0].clientY);
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

        window.addEventListener("touchstart", handleTouchStart);
        window.addEventListener("touchmove", handleTouchMove);
        window.addEventListener("touchend", handleTouchEnd);

        return () => {
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchmove", handleTouchMove);
            window.removeEventListener("touchend", handleTouchEnd);
        };
    }, [touchStart, touchEnd, onSwipeDown, threshold]);
};
