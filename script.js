const scoreElement = document.querySelector('.Score');

let order = [];
let clickedOrder = [];
let score = 0;




// Order -> Bird, Frog,  Fish and Cat
const bird = document.querySelector('.bird');
const frog = document.querySelector('.frog');
const fish = document.querySelector('.fish');
const cat = document.querySelector('.cat');

//  Build color order
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for (let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

// Glow right color
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    }, number );
}

let counter = () => {
    scoreElement.innerHTML = score;
    
}

// Check if player lose or win
let checkOrder = () => {
    for (let i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
            lose();
            counter(score = 0)
            break;
            
        }
    }
    if (clickedOrder.length == order.length) {
        alert(' Congrats!! \n Begining Another Level, good luck!');
        nextLevel();
        counter()
    }
    
}





// User click function

let click = (color) => {
    
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected')

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);



}

// Return color function

let createColorElement = (color) => {
    if (color == 0) {
        return bird;
    } else if (color == 1) {
        return frog;
    } else if (color == 2) {
        return fish;
    } else if (color == 3) {
        return cat;
    }

}
// Level function
let nextLevel = () => {
    score++;
    
    shuffleOrder();

    
}

// End game
let lose = () => {
    alert('Hey, you lost! Click to start again');
    order = [];
    clickedOrder = [];
    
    playGame();
}
// Start
let playGame = () => {
    alert('Hey Genius, Welcome!! Starting a new game')
    score = 0;
    

    nextLevel();
}



// Color Click


bird.onclick = () => click(0);
frog.onclick = () => click(1);
fish.onclick = () => click(2);
cat.onclick = () => click(3);

playGame();
 
