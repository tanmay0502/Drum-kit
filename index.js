for (i=0;i<7;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function (){
        var btn = this.innerHTML;
        makeSound(btn)
    } )
}
document.addEventListener("keypress", function(event){
    makeSound(event.key)
});
function makeSound(btn){
    var sound ='snare.mp3';
        switch (btn) {
            case "w":
                sound= "sounds/tom-1.mp3";
                break;
            case 'a':
                sound= "sounds/tom-2.mp3";
                break;
            case 's':
                sound= "sounds/tom-3.mp3";
                break;
            case 'd':
                sound= "sounds/tom-4.mp3";
                break;
             case 'j':
                sound= "sounds/crash.mp3";
                break; 
            case 'k':
                sound= "sounds/kick-bass.mp3";
                break;
            case 'l':
                sound= "sounds/snare.mp3";
                var audio = new Audio(sound);
                audio.play();
                break;          
            default:console.log(btn)
                break;
        }
        var audio = new Audio(sound);
        audio.play();
}
    



