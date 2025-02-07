function createMadlib() {
    var pluralNoun = document.getElementById("pluralNoun").value.toUpperCase(); 
    var noun1 = document.getElementById("noun1").value.toUpperCase();
    var noun2 = document.getElementById("noun2").value.toUpperCase();
    var song = document.getElementById("song").value.toUpperCase();
    var verb = document.getElementById("verb").value.toUpperCase();

    if (pluralNoun && noun1 && noun2 && song && verb) {

        var madlib = "Once upon a time, a " + pluralNoun + " went to a concert. They saw " + noun1 + " playing a " + noun2 + " while singing " + song + ". It was so exciting, they just had to " + verb + " in the crowd.";

        document.getElementById("result").innerHTML = "<h3>Your Madlib Story:</h3><p>" + madlib + "</p>";

        document.getElementById("goAgainButton").style.display = "block";
    } else {

        document.getElementById("result").innerHTML = "<p style='color: red;'>Please fill out all fields!</p>";
    }
}

function goAgain() {

    document.getElementById("pluralNoun").value = '';
    document.getElementById("noun1").value = '';
    document.getElementById("noun2").value = '';
    document.getElementById("song").value = '';
    document.getElementById("verb").value = '';

    document.getElementById("result").innerHTML = '';
    document.getElementById("goAgainButton").style.display = "none";
}

document.getElementById("submitButton").addEventListener("click", createMadlib);
document.getElementById("goAgainButton").addEventListener("click", goAgain);