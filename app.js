
window.onload = () => {
    // Queries html for the main element.
    let main = document.querySelector('main');
    let text = document.createElement("H1");
    text.innerHTML = 'Hello';
    main.appendChild(text);

    var goFS = document.getElementById("goFS");
    goFS.addEventListener("click", function() {
        main.requestFullscreen();
    }, false);

    let exitFS = document.getElementById("exitFS");
    exitFS.addEventListener("click", function() {
        document.exitFullscreen();
    }, false);
};