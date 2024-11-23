function redirectUser() {
    var IfName = document.getElementsByClassName('userName')[0].value; 
    if (IfName !== "") {
        window.location.href = "index.html"; 
    } else {
        alert('Please Enter a Name');
    }
}


var chngColTail = document.getElementsByClassName('tail')[0]
var chngColhead = document.getElementsByClassName('head')[0]
chngColTail.style.backgroundColor = 'yellow'
 chngColTail.style.color = 'black'
chngColhead.style.backgroundColor='green'



function Tail() {
    CheckValidation("Tail");
    
    // document.getElementsByClassName('gif')[0].src = 'png.png';
    
}

function Head() {
    CheckValidation("Head");
// document.getElementsByClassName('gif')[0].src = 'png.png'

}

function CheckValidation(choice) {
    var randomResult = Math.round(Math.random());
    console.log('Random Result:', randomResult); 
    
    if (choice === "Head" && randomResult === 1) {
        alert("Hurray Head is Winning!");

    } else if (choice === "Tail" && randomResult === 0) {
        alert("Hurray Tail is Winning!");
    } else {
        alert("You are Not Winning");
    }
}
