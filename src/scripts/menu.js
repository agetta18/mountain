document.addEventListener('DOMContentLoaded', function () {
    workMenu();

});

function workMenu() {
    const menu = document.querySelector(".menu");
    const btn = document.querySelector('.menu__span');
    const socials = document.querySelector('.socials--mini');
    

    menu.addEventListener('click', function() {
        menu.classList.remove('menu--mini');
        btn.classList.remove('menu__span--exit');
        socials.style.display='none';
    })

    btn.addEventListener("click", function (e) {
        e.preventDefault();
        if (btn.classList.contains('menu__span--exit')) {
            menu.classList.remove('menu--mini');
            btn.classList.remove('menu__span--exit');
            socials.style.display='none';
            

        } else {
            menu.classList.add('menu--mini');
            btn.classList.add('menu__span--exit');
            socials.style.display='flex';
           

        }
    })

}


