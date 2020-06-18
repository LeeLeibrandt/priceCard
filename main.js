function basic() {
    var x = document.getElementById("basic");
    if (x.innerHTML === "$19.99") {
        x.innerHTML = "$199.99";
    } else {
        x.innerHTML = "$19.99";
    }
}

function professional() {
    var y = document.getElementById("Professional");
    if (y.innerHTML === "$24.99") {
        y.innerHTML = "$249.99";
    } else {
        y.innerHTML = "$24.99";
    }
}

function master() {
    var z = document.getElementById("master");
    if (z.innerHTML === "$39.99") {
        z.innerHTML = "$399.99";
    } else {
        z.innerHTML = "$39.99";
    } 
}

function pricing() {
    basic();
    professional();
    master();
}