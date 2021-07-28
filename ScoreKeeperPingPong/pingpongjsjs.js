const p1button = document.querySelector('#player1btn');
const p2button = document.querySelector('#player2btn');
const resetbutton = document.querySelector("#resetbtn");
const p1Display = document.querySelector('#player1Display')
const p2Display = document.querySelector('#player2Display')

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;

p1button.addEventListener('click', function() {
    if(p1Score != winningScore) {
    p1Score +=1;
    p1Display.textContent = p1Score;
    } else {
        
    }

})



p2button.addEventListener('click', function(){
    p2Score += 1;
    p2Display.textContent = p2Score;
})

resetbutton.addEventListener('click', function() {
    p2Score = 0;
    p1Score = 0;
    p2Display.textContent = p2Score;
    p1Display.textContent = p1Score;

})


