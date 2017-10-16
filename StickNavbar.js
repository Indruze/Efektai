var navbar = document.getElementById('nav');
var sticky = navbar.offsetTop;

console.log(navbar);

function scrollHandler(){
    //jei scroll ekrano daugiau už 0px prisideda klasė sticky
    if(window.pageYOffset > sticky){
        navbar.classList.add('sticky');
    }else{
       navbar.classList.remove('sticky');
    }
}


/**
 * Created by Indrė on 2017-10-16.
 */
