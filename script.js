const result = document.querySelector('.result')
const humanscore = document.querySelector('#human-score')
const machinescore = document.querySelector('#machine-score')

let humanscorenumber = 0
let machinescorenumber = 0

const playhuman = (humanchoice) => {

    playthegame(humanchoice, playmachine())
}

const playmachine = () => {
    const choices = ['pedra', 'papel', 'tesoura']

const randomnumber = Math.floor(Math.random()*3)

        return choices[randomnumber]
}

const playthegame = (human, machine) => {

    if(human === machine){
        result.innerHTML = 'empate'
    
    }else if(human === 'papel' && machine ==='pedra' || human === 'pedra' && machine ==='tesoura' || human === 'tesoura' && machine ==='papel'){
        humanscorenumber++
        humanscore.innerHTML = humanscorenumber
        result.innerHTML = 'voce ganhou'

    }else{
        machinescorenumber++
        machinescore.innerHTML = machinescorenumber
        result.innerHTML = 'voce perdeu'
    }
}