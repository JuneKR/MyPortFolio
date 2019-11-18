const homeBTN = document.getElementById("homeBTN");
const BTN = document.getElementById("myBTN");


// BTN.addEventListener("click", function(){
//     document.getElementById('test1').style.visibility = "hidden";
//     document.getElementById('test2').style.zIndex = 1;
// });
// homeBTN.addEventListener("click", function(){
//     document.getElementById('test1').style.visibility = "visible";
//     document.getElementById('test2').style.zIndex = -1;
// })

BTN.addEventListener("click", on);
homeBTN.addEventListener("click", out);
            
function on(){
    // document.getElementById("homeBTN").style.color = "white";
    document.getElementById('test1').style.visibility = "hidden";
    document.getElementById('test2').style.zIndex = 1;
}

function out(){
    // document.getElementById("homeBTN").style.color = "blue";
    // document.getElementById("BTN").style.color = "white";
    document.getElementById('test1').style.visibility = "visible";
    document.getElementById('test2').style.zIndex = -1;
}

// alert('CONNECTED');