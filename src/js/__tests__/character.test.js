const { Magician, Daemon } = require('../character');

describe('Magician and Daemon', () => {
    let magician;
    let daemon;

    beforeEach(() => {
        magician = new Magician();
        daemon = new Daemon();
    });

    test('Calculate attack for Magician at distance 2 with stoned effect', () => {
        magician.stoned = true;
        const attack = magician.calculateAttack(2);
        console.log('Magician attack at distance 2 with stoned effect:', attack);
        expect(attack).toBeCloseTo(85, 0); // Сравнение с ожидаемым значением с учетом погрешности
    });

    test('Calculate attack for Magician at distance 5 without stoned effect', () => {
        const attack = magician.calculateAttack(5);
        console.log('Magician attack at distance 5 without stoned effect:', attack);
        expect(attack).toBe(60); // Сравнение с ожидаемым целым значением
    });

    test('Calculate attack for Daemon at distance 3 with stoned effect', () => {
        daemon.stoned = true;
        const attack = daemon.calculateAttack(3);
        console.log('Daemon attack at distance 3 with stoned effect:', attack);
        expect(attack).toBeCloseTo(73, 0); // Сравнение с ожидаемым значением с учетом погрешности
    });

    // Добавьте другие тесты здесь, если необходимо
});