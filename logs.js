import { random } from './utils.js';

const logs = [
    (p1, p2, count) => `${p1.name} згадав щось важливе, але раптово ${p2.name}, не пам'ятаючи себе від переляку, вдарив у щоку супротивника. -${count}, [${p1.hp.current}/${p1.hp.total}]`,
    (p1, p2, count) => `${p1.name} поперхнувся, і за це ${p2.name} з переляку приклав колінний суглоб до чола ворога. -${count}, [${p1.hp.current}/${p1.hp.total}]`,
    (p1, p2, count) => `${p1.name} забувся, але в цей час нахабний ${p2.name}, прийнявши вольове рішення, ненавмисно вдарив грудьми об лікоть ворога. -${count}, [${p1.hp.current}/${p1.hp.total}]`,
    (p1, p2, count) => `${p1.name} прийшов до тями, але раптово ${p2.name} випадково вдарив ліктем у щелепу супротивника. -${count}, [${p1.hp.current}/${p1.hp.total}]`,
    (p1, p2, count) => `${p1.name} зачепився, і в цей час ${p2.name} неохоче розбив кулаком сонячне сплетіння ворога. -${count}, [${p1.hp.current}/${p1.hp.total}]`,
    (p1, p2, count) => `${p1.name} здивувався, а ${p2.name} з переляку стукнув гомілкою у живіт ворога. -${count}, [${p1.hp.current}/${p1.hp.total}]`,
    (p1, p2, count) => `${p1.name} відволікся, і в цей момент ${p2.name} вліпив ляпаса супротивнику. -${count}, [${p1.hp.current}/${p1.hp.total}]`,
    (p1, p2, count) => `${p1.name} розсердився, але раптом ${p2.name} випадково зацідив кулаком у ніс супротивника. -${count}, [${p1.hp.current}/${p1.hp.total}]`,
    (p1, p2, count) => `${p1.name} засумував, і раптом побачив, як ${p2.name} з переляку вдарив п'ятою у щелепу ворога. -${count}, [${p1.hp.current}/${p1.hp.total}]`,
    (p1, p2, count) => `${p1.name} згадав щось цікаве, але зрозумів, що ${p2.name} вже наніс удар, якого ніхто не чекав. -${count}, [${p1.hp.current}/${p1.hp.total}]`
];

export const generateLog = (firstPerson, secondPerson, count) => {
    const logFn = logs[random(logs.length) - 1];
    return logFn(firstPerson, secondPerson, count);
};
