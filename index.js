var drumSet = document.querySelectorAll('.drum');

for (var i = 0; i < drumSet.length; i++) {
    drumSet[i].addEventListener('click', function () {
        // console.log(`${drumSet[i].innerHTML} was clicked.`)
        // console.log(`${this.innerHTML} was clicked.`)
        var buttonInnerHtml = this.innerHTML;

        makeSound(buttonInnerHtml);
        makeAnimation(buttonInnerHtml)
    })
}

document.addEventListener('keydown', function (e) {
    // console.log(e);
    // alert(`${e.key} key was pressed`)
    makeSound(e.key);
    makeAnimation(e.key);
})

function makeSound(key){
    switch (key) {
        case 'w':
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;

        case 'a':
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;

        case 's':
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;

        case 'd':
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;

        case 'j':
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;

        case 'k':
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;

        case 'l':
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;

        default:
            console.log(this);

    }
}


function makeAnimation(currentKey) {  
    let activeKey = document.querySelector("." + currentKey);
    activeKey.classList.add("pressed");
    setTimeout(() => {
        activeKey.classList.remove("pressed");
    }, 100);
    
}