const homeBTN = document.getElementById("homeBTN");
const BTN = document.getElementById("myBTN");
// var fac = document.getElementById("test");
// document.getElementsByClassName("te").innerHTML = "test" + fac.innerHTML;
BTN.addEventListener("click", alert("clicked"));
homeBTN.addEventListener("click", out);
            
function on(){
    // document.getElementById("homeBTN").style.color = "white";
    document.getElementById("test1").style.display = "none";
    document.getElementById("test2").style.visibility = "visible";
}

function out(){
    // document.getElementById("homeBTN").style.color = "blue";
    // document.getElementById("BTN").style.color = "white";
    document.getElementById("test1").style.display = "block";
    document.getElementById("test2").style.visibility = "hidden";
}

export {homeBTN, BTN};