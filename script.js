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

else {
    document.getElementById("rechnerU").style.display="none";
    document.getElementById("rechnerR").style.display="none";
    document.getElementById("rechnerI").style.display="none";
}
}