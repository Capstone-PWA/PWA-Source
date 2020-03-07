
window.onload = () => {
    // Queries html for the main element.
    let main = document.querySelector('main');
    let text = document.createElement("H1");
    text.innerHTML = 'Hello';
    main.appendChild(text);
};