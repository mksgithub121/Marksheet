// result sheet js code start here


function result() {
    // variable for selector
    var valBangla = parseFloat(document.querySelector(".valBangla").value);
    var valEnglish = parseFloat(document.querySelector(".valEnglish").value);
    var valMath = parseFloat(document.querySelector(".valMath").value);
    var valScience = parseFloat(document.querySelector(".valScience").value);
    var valICT = parseFloat(document.querySelector(".valICT").value);
    // function
    function resultBox(e) {
        document.querySelector(".valResult").value = e;
    }
    // variable for calculation
    var result = valBangla + valEnglish + valMath + valScience + valICT;
    var avarrage = result / 5;

    // condition
    if (valBangla > 100 || valEnglish > 100 || valMath > 100 || valScience > 100 || valICT > 100) {
        resultBox("Something Wrong!!");
    } else if (valBangla < 0 || valEnglish < 0 || valMath < 0 || valScience < 0 || valICT < 0) {
        resultBox("Something Wrong!!");
    } else if (valBangla < 33 || valEnglish < 33 || valMath < 33 || valScience < 33 || valICT < 33) {
        alert("Grade: F Because you have fallen into at least one subject");
    } else if (avarrage < 33) {
        resultBox("Point : " + avarrage + " Grade: F");
    } else if (avarrage >= 33 && avarrage < 40) {
        resultBox("Point : " + avarrage + " Grade: C");
    } else if (avarrage > 39 && avarrage < 50) {
        resultBox("Point : " + avarrage + " Grade: D");
    } else if (avarrage > 49 && avarrage < 60) {
        resultBox("Point : " + avarrage + " Grade: B");
    } else if (avarrage > 59 && avarrage < 70) {
        resultBox("Point : " + avarrage + " Grade: A-");
    } else if (avarrage > 69 && avarrage < 80) {
        resultBox("Point : " + avarrage + " Grade: A");
    } else if (avarrage > 79 && avarrage <= 100) {
        resultBox("Point : " + avarrage + " Grade: A+");
    } else {
        resultBox("Something Wrong!!")
    }


    // document.querySelector(".valResult").value = avarrage;
}
// result sheet js code end here

// charecter checker code here
function ckeck() {
    var valChr = document.querySelector(".valChr").value;
    var valChrE = valChr.toLowerCase();
    switch (valChrE == "a" || valChrE == "e" || valChrE == "i" || valChrE == "o" || valChrE == "u") {
        case true:
            document.querySelector(".output_box").innerHTML = "Vowel";
            break;
        case false:
            document.querySelector(".output_box").innerHTML = "Consonenet";
            break;
    }
}