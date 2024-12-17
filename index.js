let r = document.getElementById('r');
let p = document.getElementById('p');
let s = document.getElementById('s');
let c = document.getElementById('c');
let d = document.getElementById('d');
let re = document.getElementById('re');
let play = 1;
let choices = ["rock", "paper", "scissors"];
let computerChoice = choices[Math.floor(Math.random() * choices.length)];
c.style.display = 'none';
r.style.display = 'none';
p.style.display = 'none';
s.style.display = 'none';
d.style.display = 'none';
re.style.display = 'none';

console.log(computerChoice);

function game() {
    
    c.style.display = 'none';
    r.style.display = 'none';
    p.style.display = 'none';
    s.style.display = 'none';
    d.style.display = 'none';
    re.style.display = 'none';
    document.getElementById('clear').style.display='none'
    
    
    c.style.display = 'block';
    r.style.display = 'block';
    p.style.display = 'block';
    s.style.display = 'block';
    d.style.display = 'block';

    
    computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log('Computer choice:', computerChoice);
    
    document.getElementById('h').innerHTML = ''; 
  
}

function start() {
    if (play === 1) {
        
        let keys = document.querySelectorAll(".btn");
        
        
        keys.forEach((key, index) => {
            key.addEventListener('click', () => {
            
                let playerChoice = choices[index-1];
                console.log('Player choice:', playerChoice);
                
            
                c.innerHTML = `<h3>Computer choice: ${computerChoice}</h3>`;
                d.innerHTML = `<br><h3>Your choice: ${playerChoice}</h3>`;
                
                
                if (playerChoice === computerChoice) {
                    document.getElementById('h').innerHTML = 'It is a Draw';
                }
                  else {
                    
                    if (
                        (playerChoice === 'rock' && computerChoice === 'scissors') ||
                        (playerChoice === 'paper' && computerChoice === 'rock') ||
                        (playerChoice === 'scissors' && computerChoice === 'paper')
                    ) {
                        document.getElementById('h').innerHTML = 'You win!';
                    } else {
                        document.getElementById('h').innerHTML = 'Computer wins!';
                    }
                }
                

                play = 0;
                re.style.display = 'block'; 
            });
        });
    }
}

function reset() {
    play = 1;
    computerChoice
    c.innerHTML='<h3>computer is waiting...</h3>'
    d.innerHTML='<h1></h1>'
    game(); 
}
