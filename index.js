// detecting button press

for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    // event listener uses two parameters 
    // first- like "click" which listen the  event happend
    //second- the response to event it can be a function
    document.querySelectorAll(".drum")[i].addEventListener("click",makeAlert);
}
// this also can be used as annonymos function
function makeAlert(){
    var keyValue=this.innerHTML;
    playSound(keyValue);
    addAnimation(keyValue);
    
}


// detecting keyboard press


//here annonymos function is used with event as parameter in which event.key returns the key pressed
document.addEventListener("keydown",function(event){
    var keyValue=event.key;
    playSound(keyValue);
    addAnimation(keyValue);
})


// function for playing sound
function playSound(pressedKey){
    switch (pressedKey) {
        case "f":
            var tom1=new Audio("sounds/tom-1.mp3")
            tom1.play();
            break;
        case "a":
            var tom2=new Audio("sounds/tom-2.mp3")
            tom2.play();
            break;
        case "s":
            var tom3=new Audio("sounds/tom-3.mp3")
            tom3.play();
            break;
        case "d":
            var tom4=new Audio("sounds/tom-4.mp3")
            tom4.play();
            break;
        case "j":
            var tom1=new Audio("sounds/snare.mp3")
            tom1.play();
            break;
        case "k":
            var tom1=new Audio("sounds/crash.mp3")
            tom1.play();
            break;
        case "l":
            var tom1=new Audio("sounds/kick-bass.mp3")
            tom1.play();
            break;

        default:
            break;
    }
}

// adding animation

function addAnimation(currentKey){
    var activeKey=document.querySelector("."+currentKey);
    activeKey.classList.add("pressed");
    setTimeout(() => {
        activeKey.classList.remove("pressed");
    }, 100);
}