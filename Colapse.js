var i = 10;

function showMore() {
    var show = setTimeout(function(){
        i++;
        document.getElementById('textHolder').style.height = i + 'px';
        if(i == 300){
            clearTimeout(show);
            return false;
        }
        showMore()
    },0.5);
}

/**
 * Created by Indrė on 2017-10-17.
 */
