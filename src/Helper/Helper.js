let ApplicationName = "Checkout"; 
export default ApplicationName;

export function openPopup(ref) {
    ref.current.style.bottom = '0%';
}

export function closePopup(ref) {
    ref.current.style.bottom = '-110%';
}