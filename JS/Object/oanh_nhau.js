var Monster = function (damage, hp, df, counterAttack) {
  this.damage = damage;
  this.hp = hp;
  this.df = df;
  this.counterAttack = counterAttack;
  this.attack = function (competitor) {
    competitor.hp -= this.damage - competitor.df;
    this.hp -= this.counterAttack;
  };
};

var human = new Monster(3000, 20000, 70, 40);
var dog = new Monster(1000, 10000, 50, 30);

var attack = function () {
  while (true) {
    console.log("");

    if (human.hp <= 0 || dog.hp <= 0) {
      if (human.hp <= 0) {
        console.log("NGƯỜI CHẾT!!!");
      } else if (dog.hp <= 0) {
        console.log("CHÓ CHẾT!!!");
      }
      break;
    }
    console.log("Người đánh chó");
    human.attack(dog);
    console.log(`Human HP: ${human.hp}`);
    console.log(`Dog HP: ${dog.hp}`);

    console.log("");

    console.log("Chó cắn người");
    dog.attack(human);
    console.log(`Human HP: ${human.hp}`);
    console.log(`Dog HP: ${dog.hp}`);
  }
};

attack();
// var dog = {
//   damage: 1000,
//   hp: 10000,
//   df: 50,
//   counterAttack: 30,
//   attack: function (competitor) {
//     competitor.hp -= this.damage - competitor.df;
//     this.hp -= this.counterAttack;
//   },
// };

// var human = {
//   damage: 3000,
//   hp: 20000,
//   df: 70,
//   counterAttack: 40,
//   attack: function (competitor) {
//     competitor.hp -= this.damage - competitor.df;
//     this.hp -= this.counterAttack;
//   },
// };
