"use strict";


$().ready(function () {

    //meine Elemente
    var $inputA = $("#A");
    var $inputB = $("#B");
    var $btPlus = $("#btPlus");
    var $resultGo = $("#resultGo");
    var $btMinus = $("#btMinus");

    /*Ergebnis
     inputA plus inputB
     */


    //bei click auf den buttonGo
    $btPlus.on('click', function () {
        //umgewandelte zahlen addieren
        var ergebnis = addieren($inputA.val(), $inputB.val());
        // ausgeben in
        console.log(ergebnis);
        alert(ergebnis);
        schreibeSumme(ergebnis);
        /*var $bt = $(this);
        $bt.hide();
        setTimeout(function () {
            $bt.show();
        },5000);*/
    });


    $btMinus.on ('click', function () {
        var ausgabe = subtrahieren($inputA.val(), $inputB.val());
        //ausgeben in
        console.log(ausgabe);
        alert(ausgabe);
        schreibeMinus(ausgabe);

    });

    //function für resultGo
    function schreibeSumme(ergebnis) {
        $resultGo.html(ergebnis);
    };

    function schreibeMinus(ausgabe) {
        $resultGo.html(ausgabe);
    };






});

//inhalt von a + b text in Zahl umwandeln
var addieren = function (a, b) {
    return parseInt(a) + parseInt(b)
};

var subtrahieren = function (a, b) {
    return parseInt(a) - parseInt(b)
};