class Character {
    constructor(baseAttack) {
        this.baseAttack = baseAttack;
        this._stoned = false;
    }

    calculateAttack(distance) {
        const effectiveAttack = this.calculateEffectiveAttack(distance);
        const druggedAttack = this.applyDruggedEffect(effectiveAttack, distance);
        return druggedAttack;
    }

    calculateEffectiveAttack(distance) {
        const multiplier = this.attackMultiplier(distance);
        return this.baseAttack * multiplier;
    }

    attackMultiplier(distance) {
        if (distance === 1) return 1.0;
        else if (distance === 2) return 0.9;
        else if (distance === 3) return 0.8;
        else if (distance === 4) return 0.7;
        else if (distance === 5) return 0.6;
        else return 0;
    }

applyDruggedEffect(attack, distance) {
    const druggedMultiplier = this.stoned ? (Math.log2(distance) * 5) / 100 : 0;
    const finalAttack = attack * (1 - druggedMultiplier);
    return Math.floor(finalAttack); 
}

    get stoned() {
        return this._stoned;
    }

    set stoned(value) {
        this._stoned = value;
    }
}

class Magician extends Character {
    constructor() {
        super(100);
    }
}

class Daemon extends Character {
    constructor() {
        super(100);
    }
}



module.exports = {
    Character,
    Magician,
    Daemon
};