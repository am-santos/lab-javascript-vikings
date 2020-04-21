// Soldier
class Soldier {
    constructor (health,strength) {
        this.health = health;
        this.strength = strength;
    }

    attack () {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
        super(health, strength);
        this.name = name;
    };

    receiveDamage(damage) {
        this.health -= damage;
        
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    };
    
    battleCry() {
        return 'Odin Owns You All!'
    };
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage;
        // const currentHealth = this.health;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
    }
}

// War
class War {
    constructor () {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    
    addViking(Viking) {
        this.vikingArmy.push(Viking);
    }

    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);
    }

    vikingAttack() {
        let indexOfSaxon = Math.floor(Math.random()*this.saxonArmy.length);
        let indexOfViking = Math.floor(Math.random()*this.vikingArmy.length);

        this.saxonArmy[indexOfSaxon].receiveDamage(this.vikingArmy[indexOfViking].strength);
        if (this.saxonArmy[indexOfSaxon].health <= 0) {
            this.saxonArmy.splice(indexOfSaxon,1);
        } 
        
        return this.saxonArmy[indexOfSaxon].receiveDamage(this.vikingArmy[indexOfViking].strength);
    }

    saxonAttack() {
        const indexOfSaxon = Math.floor(Math.random()*this.saxonArmy.length);
        const indexOfViking = Math.floor(Math.random()*this.vikingArmy.length);

        this.vikingArmy[indexOfViking].receiveDamage(this.saxonArmy[indexOfSaxon].strength);
        if (this.vikingArmy[indexOfViking].health <= 0) {
            this.vikingArmy.splice(indexOfViking,1);
        }
        return this.vikingArmy[indexOfViking].receiveDamage(this.saxonArmy[indexOfSaxon].strength);
    }

    showStatus() {

    }

}
