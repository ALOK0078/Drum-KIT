
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var buttoninnerhtml=this.innerHTML;
       switch (buttoninnerhtml) {
        case "d":
            var tom_1= new Audio("sounds/tom-1.mp3");
            tom_1.play();
            break;
        case "s":
             var snare = new Audio("sounds/snare.mp3");
             snare.play();
            break;
        case "w":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "a":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break; 
        case "j":
            var tom_2= new Audio("sounds/tom-2.mp3");
            tom_2.play();
            break;
        case "k":
            var tom_3= new Audio("sounds/tom-3.mp3");
            tom_3.play();
            break; 
        case "l":
            var tom_4= new Audio("sounds/tom-4.mp3");
            tom_4.play();
            break;
        default:
            break;
       }
       buttonanimation(buttoninnerhtml);
   } );
} 
document.addEventListener("keypress",function(event){
  makesound(event.key);
  buttonanimation(event.key);
});

function makesound(key){
    switch (key){
        case "d":
            var tom_1= new Audio("sounds/tom-1.mp3");
            tom_1.play();
            break;
        case "s":
             var snare = new Audio("sounds/snare.mp3");
             snare.play();
            break;
        case "w":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "a":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break; 
        case "j":
            var tom_2= new Audio("sounds/tom-2.mp3");
            tom_2.play();
            break;
        case "k":
            var tom_3= new Audio("sounds/tom-3.mp3");
            tom_3.play();
            break; 
        case "l":
            var tom_4= new Audio("sounds/tom-4.mp3");
            tom_4.play();
            break;
        default:
            break;

}}
function buttonanimation(currentkey){
    var active =document.querySelector("."+currentkey);//to make the class of sinle letter like a w s
    active.classList.add("pressed");
    setTimeout(function(){
        active.classList.remove("pressed")
    },100);
}