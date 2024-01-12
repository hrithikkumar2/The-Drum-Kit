
// for(let i=0; i<document.querySelector(".drum").length;i++){
//     document.querySelector(".drum")[i].addEventListener("click",function(){
//         alert("I got clicked");
//     })
// }
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var clicked=this.innerHTML;
        // alert(clicked);
        // document.querySelector("."+clicked).style.color="green"
        // var audio=new Audio("sounds/tom-1.mp3");
        // audio.play();
        animation(clicked);
        switch (clicked){
            case "w":
                var tom1=new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
            case "a":
                var tom2=new Audio("sounds/tom-2.mp3");
                 tom2.play();
                 break;
            case "s":
                 var tom3=new Audio("sounds/tom-3.mp3");
                 tom3.play();
                 break;
            case "d":
                    var tom4=new Audio("sounds/tom-4.mp3");
                    tom4.play();
                    break;
            case "j":
                    var snare=new Audio("sounds/snare.mp3");
                    snare.play();
                    break;
           case "k":
                    var crash=new Audio("sounds/crash.mp3");
                    crash.play();
                    break;
             case "l":
                    var kick=new Audio("sounds/kick-bass.mp3");
                    kick.play();
                    break;
            default:
                console.log(clicked);
        }
    });
}

document.addEventListener("keypress",function(event){
    var keys=event.key;
    animation(keys);
    switch (keys){
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2=new Audio("sounds/tom-2.mp3");
             tom2.play();
             break;
        case "s":
             var tom3=new Audio("sounds/tom-3.mp3");
             tom3.play();
             break;
        case "d":
                var tom4=new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
        case "j":
                var snare=new Audio("sounds/snare.mp3");
                snare.play();
                break;
       case "k":
                var crash=new Audio("sounds/crash.mp3");
                crash.play();
                break;
         case "l":
                var kick=new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;
        default:
            console.log(clicked);
    }
})

function animation(currentkey){
    var activebutton=document.querySelector("."+currentkey);
    activebutton.classList.add("pressed");
    setTimeout(function(){
        activebutton.classList.remove("pressed")
    },100)
    
}