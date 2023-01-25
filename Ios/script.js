function plataformaEs() {
    if (navigator.platform == "iPhone" || navigator.platform == "iPad") {
        alert(navigator.platform);
    } else {
        if (navigator.userAgent.match(/Android/i)) {
            alert(navigator.userAgent);
        } else {
            alert(navigator.platform + " mira la consola");
            console.log(navigator);
        }
    }
}