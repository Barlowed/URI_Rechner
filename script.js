function uRechner()
{
    var uWider = parseInt (document.getElementById("inputUr").value);
    var uStrom = parseInt (document.getElementById("inputUi").value);

    document.getElementById("outputUu").value = uWider * uStrom;
}

function rRechner()
{
    var rSpann = parseInt (document.getElementById("inputRu").value);
    var rStrom = parseInt (document.getElementById("inputRi").value);

    document.getElementById("outputRr").value = rSpann / rStrom;
}

function iRechner()
{
    var iSpann = parseInt (document.getElementById("inputIu").value);
    var iWider = parseInt (document.getElementById("inputIr").value);

    document.getElementById("outputIi").value = iSpann / iWider;
}


function toggle(a)
{

if (a==1) {
    document.getElementById("rechnerU").style.display="block";
    document.getElementById("rechnerR").style.display="none";
    document.getElementById("rechnerI").style.display="none";
}
else if (a==2) {
    document.getElementById("rechnerU").style.display="none";
    document.getElementById("rechnerR").style.display="block";
    document.getElementById("rechnerI").style.display="none";
}

else if (a==3) {
    document.getElementById("rechnerU").style.display="none";
    document.getElementById("rechnerR").style.display="none";
    document.getElementById("rechnerI").style.display="block";
}

else if (a==4) {
    document.getElementById("rechnerU").style.display="block";
    document.getElementById("rechnerR").style.display="block";
    document.getElementById("rechnerI").style.display="block";
}

else {
    document.getElementById("rechnerU").style.display="none";
    document.getElementById("rechnerR").style.display="none";
    document.getElementById("rechnerI").style.display="none";
  }
}

function randomlinks()
{
    var random = Math.round(Math.random()*4)
    var links = new Array()
    links[0]="http://24.media.tumblr.com/416c1ae6f6d14c8e10bf24d293af7a34/tumblr_n2taenVhxf1rudcwro3_500.gif"
    links[1]="http://31.media.tumblr.com/4055fff68273ab8b6ae420e289fa83ae/tumblr_n2taenVhxf1rudcwro6_400.gif"
    links[2]="http://meowgifs.com/wp-content/uploads/2013/05/cute-kitten-touching-the-screen.gif"
    links[3]="http://www.cutecatgifs.com/wp-content/uploads/2013/06/Malleable.gif"
    links[4]="http://stream1.gifsoup.com/view2/4469904/cute-kitten-o.gif"

    window.location=links[random]
}


/* Without Array
function randomCat() 
{
    var catRandom = Math.round(Math.random()*4);
    var link1 ="http://24.media.tumblr.com/416c1ae6f6d14c8e10bf24d293af7a34/tumblr_n2taenVhxf1rudcwro3_500.gif";
    var link2 ="http://31.media.tumblr.com/4055fff68273ab8b6ae420e289fa83ae/tumblr_n2taenVhxf1rudcwro6_400.gif";
    var link3 ="http://meowgifs.com/wp-content/uploads/2013/05/cute-kitten-touching-the-screen.gif";
    var link4 ="http://www.cutecatgifs.com/wp-content/uploads/2013/06/Malleable.gif";
    var link5 ="http://stream1.gifsoup.com/view2/4469904/cute-kitten-o.gif";


if (catRandom == 0) {
    window.location = link1;
}
else if (catRandom == 1) {
    window.location = link2;
}
else if (catRandom == 2) {
    window.location = link3;
}
else if (catRandom == 3) {
    window.location = link4;
}
else if (catRandom ==4) {
    window.location = link5;
}

}
*/