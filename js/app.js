(function () {
    // Navigation Menu.
    document.addEventListener('DOMContentLoaded', () => {
        const navMenu = document.querySelectorAll('.side-menu');
        M.Sidenav.init(navMenu, {edge: 'right'});
    });

    //Home page card collapsible
    var cards = document.getElementsByClassName("card-panel");
    var expandableContent = document.getElementsByClassName("expandable-content");
    var arr = [
        document.getElementById("music-content"),
        document.getElementById("temp-content"),
        document.getElementById("alarm-content")
    ];

    var i;
    for (i = 0; i < cards.length; i++) {
        addExpandable(arr[i], cards[i]);
    }

    function addExpandable(element, card) {
        card.addEventListener("click", function() {
            let expandableContent = element;
            this.classList.toggle("active");
            if (expandableContent.style.maxHeight){
                expandableContent.style.maxHeight = null;
            } else {
                expandableContent.style.maxHeight = expandableContent.scrollHeight + "px";
            }
        });
    }
    
    // Alarms Page.
    if (document.getElementById('currentDate')) {
        setInterval( () => {
            let currentDateTime = new Date();
            let dtf = new Intl.DateTimeFormat('en-CA',
                { 
                    year: 'numeric', 
                    month: 'long',
                    day: '2-digit', 
                    hour: '2-digit', 
                    minute: '2-digit', 
                    hour12: 'true' 
                });
        
            let [
                    { value: mo },,
                    { value: da },,
                    { value: ye },,
                    { value: hr },,
                    { value: min },,
                    { value: h12 }
                ] = dtf.formatToParts(currentDateTime);

            let amPm = `${h12}`.toUpperCase();

            let strDate = `Date: ${da} ${mo} ${ye}`;

            let strTime = `Time: ${hr}:${min} ${amPm}`;

            let dateFormatted = strDate.replace('.', '');
            let timeFormatted = strTime.replace('.', '');
            timeFormatted = timeFormatted.substring(0, timeFormatted.length -1);
        
            document.getElementById("currentDate").innerHTML = dateFormatted;
            document.getElementById("currentTime").innerHTML = timeFormatted;
        }, 1000); 
    }
})();

// Info Page.
function OpenInNewTabWinBrowser(url) {
    let win = window.open(url, '_blank');
    win.focus();
}