//Es erfolgt keine Ausgabe!?

//Spannung berechnen + Ausgabe der Lösung
function rechnerU()
{
    var r1 = parseInt (document.rechnerU.inputR1.value);
    var i1 = parseInt (document.rechnerU.inputI1.value);

    var u1 = (r1 * i1);
    document.getElementById("outputU").innerHTML = u1;
}

//Stromstärke berechnen + Ausgabe der Lösung
function rechnerI()
{
    var r2 = parseInt (document.rechnerI.inputR2.value);
    var u2 = parseInt (document.rechnerI.inputU2.value);

    var i2 = (u2 / r2);
    document.getElementById("outputI").innerHTML = (i2);
}

//Widerstand berechnen + Ausgabe der Lösung
function rechnerR()
{
    var u3 = parseInt (document.rechnerR.inputU3.value);
    var i3 = parseInt (document.rechnerR.inputI3.value);

    var r3 = (u3 / i3);
    document.getElementById("outputR").innerHTML = r3;
}



//Rechnungen alle mit getElementById
//Immernoch keine Ausgabe


/*
    function rechnerU()
{
    var r1 = parseInt (document.getElementById("inputR1").value);
    var i1 = parseInt (document.getElementById("inputI1").value);

    var u1 = (r1 * i1);
    document.getElementById("outputU").innerHTML = u1;
}

function rechnerI()
{
    var r2 = parseInt (document.getElementById("inputR2").value);
    var u2 = parseInt (document.getElementById("inputU2").value);

    var i2 = (u2 / r2);
    document.getElementById("outputI").innerHTML = (i2);
}

function rechnerR()
{
    var u3 = parseInt (document.getElementById("inputU3").value);
    var i3 = parseInt (document.getElementById("inputI3").value);

    var r3 = (u3 / i3);
    document.getElementById("outputR").innerHTML = r3;
}

*/