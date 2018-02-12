
// helper. May be useful when need to select random monster, if you need it
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Game() {
  this.status = Game.STATUSES.idle;
  this.hero = undefined;
  this.monsters = [];
}
Game.STATUSES = {
  idle: 'Idle',
  progress: 'In progress',
  finished: 'Finished'
}

Game.prototype.beginJourney = function () {
  if (!this.hero || this.monsters.length < 2) {
    throw new Error('Cannot start journey, populate the world with hero and monsters first');
  }
  this.status = Game.STATUSES.progress;
  return 'Your journey has started, fight monsters';
}

Game.prototype.addHero = function (hero) {
  if (this.hero) {
    throw new Error('Only one hero can exist');
  }
  if (hero.constructor.name !== 'Hero') {
    throw new Error('Only hero instance can be hero');
  }
  this.hero = hero;
  return `Hero created, welcome ${hero.name}`;
}

Game.prototype.addMonster = function (monster) {
  if (this.monsters.length >= 2) {
    throw new Error('Only 2 monsters can exist');
  }
  if (monster.constructor.name !== 'Monster') {
    throw new Error('Only monster Instances can become monsters');
  }
  this.monsters.push(monster);
  return `Monster Created, ${monster.charClass} appeared in the world`;
}

Game.prototype.finishJourney = function () {
  if (this.hero.life === 0) {
    return 'The Game is finished. Hero is dead :(';
    this.status = Game.STATUSES.finished;
  }
  if (this.monsters[0].life === 0 && this.monsters[1].life === 0) {
    this.status = Game.STATUSES.finished;
    return 'The Game is finished. Monsters are dead. Congratulations'
  }

  return 'Don`t stop. Some monsters are still alive. Kill`em all'
}

Game.prototype.fight = function () {
  if (this.status !== Game.STATUSES.progress) {
    throw new Error('Begin your journey to start fighting monsters');
  }
  let attacker = 'hero';
  let monster = this.monsters[0]
  if (this.monsters[0].life === 0) {
    monster = this.monsters[1];
  }
  while (this.hero.life !== 0 || monster.life !== 0) {
    if (attacker === 'hero') {
      this.hero.attack(monster);
      attacker = 'monster';

      if (monster.life === 0) {
        return 'Hero win';
      }
    }
    if (attacker === 'monster') {
      monster.attack(this.hero);
      attacker = 'hero';

      if (this.hero.life === 0) {
        return 'Monster win';
      }
    }
  }
}

function Character(charClass, life, damage) {
  this.charClass = charClass;
  this.life = life;
  this.damage = damage;
}

Character.prototype.getName = function () {
  if (!this.name) {
    return `I am ${this.charClass} I don\`t have name`;
  }
  return this.name;
};
Character.prototype.getCharClass = function () { return this.charClass; };
Character.prototype.attack = function (target) {
  if (this.constructor.name === target.constructor.name) {
    return this.constructor.MESSAGES.refuse;
  }
  if (target.life <= this.damage) {
    target.life = 0;
    return `${this.constructor.MESSAGES.hit} ${target.charClass} killed`;
  }
  target.life -= this.damage;
  return `${this.constructor.MESSAGES.hit} done ${this.damage} damage to ${target.charClass}`;
};

function Hero(name, charClass) {
  const heroClass = Hero[charClass.toUpperCase()];
  if (!heroClass) {
    throw new Error('Incorrect character class provided');
  }
  Character.call(this, heroClass.charClass, heroClass.life, heroClass.damage);
  this.name = name;
}

Hero.prototype = Object.create(Character.prototype);
Hero.prototype.constructor = Hero;
Hero.WARRIOR = { charClass: 'Warrior', life: 30, damage: 4 };
Hero.ROGUE = { charClass: 'Rogue', life: 25, damage: 3};
Hero.SORCERER = { charClass: 'Sorcerer', life: 20, damage: 5 };
Hero.MESSAGES = { refuse: 'I will attack only monsters', hit: 'Hero attacked,' };

function Monster(charClass) {
  const monsterClass = Monster[charClass.toUpperCase()];
  if (!monsterClass) {
    throw new Error('Incorrect character class provided');
  }
  Character.call(this, monsterClass.charClass, monsterClass.life, monsterClass.damage);
}

Monster.prototype = Object.create(Character.prototype);
Monster.prototype.constructor = Monster;
Monster.ZOMBIE = { charClass: 'Zombie', life: 8, damage: 4 };
Monster.SKELETON = { charClass: 'Skeleton', life: 10, damage: 6 };
Monster.HOLEM = { charClass: 'Holem', life: 15, damage: 6 };
Monster.MESSAGES = { refuse: 'I will attack only Hero', hit: 'Monster attacked,' };


/* Game Population mechanism should go below */


/* End of your solution for Game Population mechanism */

export default {
  Game,
  Hero,
  Monster
};
