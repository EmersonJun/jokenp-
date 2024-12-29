const result = document.querySelector('.result')
const humanscore = document.querySelector('#human-score')
const machinescore = document.querySelector('#machine-score')

let humanscorenumber = 0
let machinescorenumber = 0

const playhuman = (humanchoice) => {

    playthegame(humanchoice, playmachine())
}

const GAME_OPTIONS = {
ROCK: 'pedra',
PAPER: 'papel',
SCISSOR: 'tesoura'
}

const playmachine = () => {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSOR]

const randomnumber = Math.floor(Math.random()*3)

        return choices[randomnumber]
}

const playthegame = (human, machine) => {

    if(human === machine){
        result.innerHTML = 'empate'
    
    }else if(human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK || human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSOR || human === GAME_OPTIONS.SCISSOR && machine === GAME_OPTIONS.PAPER){
        humanscorenumber++
        humanscore.innerHTML = humanscorenumber
        result.innerHTML = 'voce ganhou'

    }else{
        machinescorenumber++
        machinescore.innerHTML = machinescorenumber
        result.innerHTML = 'voce perdeu'
    }
}