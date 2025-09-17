'use strict';

class Enemy {
  #health;
  constructor(health) {
    this.#health = health;
  } 
  get health() {
    return this.#health;
  }

  set health(value) {
    this.#health = value;
  } 

  takeDamage(power) {
    this.#health -= power;
  }
}

class Sword {
  #power;
  constructor(power) {
    this.#power = power;
  }
  attack(enemy) {
    enemy.takeDamage(this.#power)
  }
}

class Ork extends Enemy {
    constructor(health) {
    super(health);
  }
  takeDamage(power) {
    const chance = Number((Math.random() * 100).toFixed(0))
    if (chance >= 50) {
      this.health -= power;
    } else {
      return;
    }
  }
}

const goldenSword = new Sword(100)
const obsidianOrk = new Ork(500)
goldenSword.attack(obsidianOrk)
goldenSword.attack(obsidianOrk)
goldenSword.attack(obsidianOrk)
goldenSword.attack(obsidianOrk)
goldenSword.attack(obsidianOrk)


console.log(obsidianOrk.health)
