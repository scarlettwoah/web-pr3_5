import Pokemon from './pokemon.js';
import { random, countBtn } from './utils.js';
import { generateLog } from './logs.js';

const $btnKick = document.getElementById('btn-kick');
const $btnSpecial = document.getElementById('btn-special');
const $logs = document.getElementById('logs');

const character = new Pokemon({
    name: 'Pikachu',
    type: 'electric',
    hp: 100,
    selectors: 'character',
});

const enemy = new Pokemon({
    name: 'Charmander',
    type: 'fire',
    hp: 100,
    selectors: 'enemy',
});

const kickCounter = countBtn(6, $btnKick);
const specialCounter = countBtn(4, $btnSpecial);

const addLog = (log) => {
    console.log(log);
    const $p = document.createElement('p');
    $p.innerText = log;
    $logs.insertBefore($p, $logs.children[0]);
};

const checkGameOver = () => {
    if (character.hp.current === 0) {
        alert('Бідний ' + character.name + ' програв бій!');
        $btnKick.disabled = true;
        $btnSpecial.disabled = true;
        return true;
    }
    if (enemy.hp.current === 0) {
        alert('Ура! ' + enemy.name + ' програв бій!');
        $btnKick.disabled = true;
        $btnSpecial.disabled = true;
        return true;
    }
    return false;
};

$btnKick.addEventListener('click', () => {
    kickCounter();

    const kickChar = random(20);
    const kickEnemy = random(20);

    character.changeHP(kickChar, (count) => {
        addLog(generateLog(character, enemy, count));
    });

    enemy.changeHP(kickEnemy, (count) => {
        addLog(generateLog(enemy, character, count));
    });

    checkGameOver();
});

$btnSpecial.addEventListener('click', () => {
    specialCounter();

    const kickChar = random(30);
    const kickEnemy = random(25);

    character.changeHP(kickChar, (count) => {
        addLog(generateLog(character, enemy, count));
    });

    enemy.changeHP(kickEnemy, (count) => {
        addLog(generateLog(enemy, character, count));
    });

    checkGameOver();
});

console.log('Start Game!');
