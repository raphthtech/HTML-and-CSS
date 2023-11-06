// TASK 1:
// // function letterFinder(word, match){

// // }

// // letterFinder(john, )


// // TASK 2
// // function letterFinder(word, match){
// //     for(var i = 0; i < word.length; i++){

// //     }
// // }

// // TASK 3:
// function letterFinder(word, match) {
//     for(i = 0; i < word.length; i++) {
//         if(word[i] == match) {
//             //check if the current characater, word[i], is equal to the match
//         }
//     }
// }


// TASK 4:
// function letterFinder(word, match) {
//     for(i = 0; i < word.length; i++) {
//         if(word[i] == match) {
//             //check if the current characater, word[i], is equal to the match
//             console.log('Found the', match, 'at', i)
//         }
//     }
// }



// // TASK 5:
// function letterFinder(word, match) {
//     for(i = 0; i < word.length; i++) {
//         if(word[i] == match) {
//             //check if the current characater, word[i], is equal to the match
//             console.log('Found the', match, 'at', i)
//         } else {
//             console.log('---No match found at', i)
//         }
//     }
// }


//TASK 6:
function letterFinder(word, match) {
    for(var i = 0; i < word.length; i++) {
        if(word[i] == match) {
            //check if the current characater, word[i], is equal to the match
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at', i)
        }
    }
}

letterFinder("test", "t")
