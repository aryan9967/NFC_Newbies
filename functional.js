const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach((link) => {
    console.log(link);
    
    link.addEventListener('click', (e) => {
        // e.preventDefault();
        console.log(e.target.id);
        navLinks.forEach((link) => {
            var navlink = document.getElementById(link.id);
            navlink.style.borderBottom = '0px';
        });

        // console.log(e.target.id);
        // var nav = document.getElementById();
        // Remove the 'active' class from all links
        var nav = document.getElementById(e.target.id);
        nav.style.borderBottom = '3px solid rgb(56, 182, 34)';
    });
});