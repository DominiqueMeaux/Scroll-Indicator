window.addEventListener('scroll', remplir);

function remplir() {
    //ce que l on scroll
    const winScroll = document.documentElement.scrollTop;
    //console.log(winScroll);

    //hauteur totale - hauteur de la fenêtre du client (visible)
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    //console.log(height);

    //calcul en % de la hauteur scrollé
    const scrolled = (winScroll / height) * 100;
    //console.log(scrolled);

    document.getElementById('myBar').style.width = scrolled + '%';
    
    
}