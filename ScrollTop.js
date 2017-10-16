var navbar = document.getElementById('nav');
var sticky = navbar.offsetTop;




function toTop() {
    window.scrollTo(0,0);
    return false;
}

function scrollHandler(){
    //jei scroll ekrano daugiau už 200px prisideda stilius block
    if(window.pageYOffset > navbar.offsetTop + 200){
        document.getElementById('scrollTop').style.display = "block";
    }else{
        document.getElementById('scrollTop').style.display = "none";
    }
}


/**
 * Created by Indrė on 2017-10-16.
 */
