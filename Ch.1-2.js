//11
let s = 0

for(let i=1; i<=100; i++){
    s += i
}

console.log(s)

//12

const Wizard = class Wizard {
    constructor(health, mana, armor) {
        this.health = health;
        this.mana = mana;
        this.armor = armor;
    }
    attack() {
        console.log('파이어볼')
    }
}


const x = new Wizard(545, 210, 10);

console.log(x.health, x.mana, x.armor);
x.attack();

//13
const Planet = ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성']

const n = prompt('숫자를 입력하세요')
console.log(Planet[n-1])


//14
const n = prompt('숫자를 입력하세요')

if(n != 0){
    if(n%3 === 0){
        console.log('짝')
    }else{
        console.log(n)
    }
}