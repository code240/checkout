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