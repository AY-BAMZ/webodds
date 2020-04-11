document.getElementById("total").style.display = "none";

function calculateOdd() {
    var odd = document.getElementById("pack").value;
    var package = document.getElementById("package").value;
    var totodd = document.getElementById("packect").value;

    if (odd === "" || package == 0) {
        window.alert("wrong selection, try again")
        return;
    }
    if (totodd === "" || totodd <= 1) {
        totodd = 1;
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }

var totals=(odd * package)/totodd;
totals = Math.round(totals * 100)/100;
totals = totals.toFixed(2);

document.getElementById("total").style.display="block";
document.getElementById("tot").innerHTML=totals;
}

document.getElementById("calc").onclick = function(){calculateOdd();};