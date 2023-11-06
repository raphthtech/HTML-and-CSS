// Task 1
var diary = ['cheese','sour cream',
'milk', 'yogurt','ice cream', 'milkshake']

function logDiary() {
    // for(var i = 0; i < diary.length; i++) {
    //     console.log(diary[i]);
    // }
    
    //using for of loop
    for (var i of diary) {
        console.log(i);
    }
}
logDiary();
// Task 2
const animal = {

    canJump: true

};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan() {
    for ([prop, value] of Object.entries(bird)) {
        console.log(prop + ": " + bird[prop]);
    }

}
birdCan();
// Task 3
function animalCan() {
    for (prop in bird) {
        console.log(prop + ": " + bird[prop]);
    }
}

animalCan();

