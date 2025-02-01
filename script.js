let menuVisible = false;

function showHideMenu() {
    if(menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;  
    }
    else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;  
    }
}

function select() {
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function downloadCV() {
    const link = document.createElement("a");
    link.href = "assets/CVBreroJuanM.pdf";
    link.download = "CVBreroJuanM.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}