var playerInfo = {
    name:window.prompt("What is your robot's name?"),
    health: 100,
    attack:10,
    money:10,
    reset: function() {
        this.health =100;
        this.money=10;
        this.attack=10;
    },
    refillHealth: function () {
        this.health +=6;
        this.money -= 7;
        if(this.money >=7){
            window.alert("Refilling players's health by 20 for 7 dollars.");
            this.health += 20;
            this.money -=7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function() {
        this.attack += 6;
        this.money -= 7;
    }
};
//You can also log multiple values at once like this 
console.log(playerInfo.name, playerInfo.attack, playerInfo.health);
var randomNumber = function (min,max) {
    var value = Math.floor(Math.random() * (max-min +1)+min);
    return value;
}

var enemyInfo=[{name:"Roborto",attack:randomNumber(10,14)},{name:"Amy Android",attack:randomNumber(10,14)},{name:"Robo Trumble",attack:randomNumber(10,14)}];




var fight = function (enemyInfo) {
    // generate random damage value based on player's attack power
    var damage = randomNumber(playerInfo.attack-3,playerInfo.attack);

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'Skipt'");
    while (enemyInfo.health > 0 && playerInfo.health > 0) {
        if (promptFight === 'fight' || promptFight === "FIGHT") {
            // remove enemhy's health by subtracting the amount set in the playerInfo.attack variable

            //Subtract the value of `playerInfo.attack` from the value of `enemy.health` and use that result to update the value in the `enemy.health` variable
            
            enemy.health = Math.max(0, enemy.health - damage);
            // Log a resulting message to the console so we know that it worked.
            console.log(playerInfo.name + "attacked" + enemyInfo + "." + enemyInfo + "now has" + enemy.health + "health remaining.");
            // Subtract the value of `enemy.attack` from the value of `playerInfo.health` and use that result to update the value in the `playerInfo.health` variable.
            //  enemy.health=enemy.health-playerInfo.attack;
            // Log a resulting message to the console so we know that it worked.
            //
            if (enemy.health <= 0) {
                window.alert(enemyInfo + "has died!");
                break;
            }
            else {
                window.alert(enemyInfo + "still has" + enemy.health + "health left.");
            }
            playerInfo.health = Math.max(0, playerInfo.health - damage);
            console.log(`${enemyInfo}attacked${playerInfo.name}.${playerInfo.name}now has${playerInfo.health}health remaining.`);
            if (playerInfo.health <= 0) {
                window.alert(playerInfo.name + "has died!");
                break;
            } else {
                window.alert(playerInfo.name + "still has" + playerInfo.health + "health left.");
            }
        }
        // if player chooses to skip
        else if (promptFight === "skip" || promptFight === "SKIP") {
            window.alert(playerInfo.name + "has chosen to skip the fight!");
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            // if yes (true), leave fight
            if (confirmSkip) {

                window.alert(playerInfo.name + "has decided to skip this fight. GoodBye!");
                // subtract money from player money for skipping
                playerInfo.money = Math.max(playerInfo.money - 10);
                if (playerInfo.money < 0) {
                    playerInfo.money = 0;
                }
                console.log("playerInfo.money", playerInfo.money);
                break;
            }
            else {
                // if no (false), ask question again by running fight() again
                fight();
            }
        } else {
            window.alert("You need to pick a valid option. Try again!");
            break;
        }

    }


};


var startgame = function () {
    // reset player stats
    playerInfo.reset();
    // global variable enemyInfo stored in startgame function as enemyInfos
    var enemyInfos = enemyInfo;
    playerInfo.health = 100;
    playerInfo.attack = 10;
    playerInfo.money = 10;
    // function to generate a random numeric value
  var pickedEnemyObj = randomNumber(40,60);


    for (var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

            // pick new enemy to fight based on the index of the enemyInfos array
            var pickedenemyInfo = enemyInfo[i];
            // reset enemy.health before starting new fight
            pickedEnemyObj.health = Math.floor(Math.random() * 60);
            // use debugger to pause script from running and check what's going on at that moment in the code
            // debugger;
            // pass the pickedenemyInfo variable's value into the fight function, where it will assume the value of the enemyInfo parameter
            fight(pickedEnemyObj);
            // if we're not at the last enemy in the array
            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
                // ask if player wants to use the stoer before next round
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round");
                if (storeConfirm) {
                    shop();
                }
            }
        }
        else {
            window.alert("You have lost your robot in battle! Game Over");
            break;
        }

    }


};

var endGame = function () {
    window.alert("The game has now ended.Let's see how you did!");
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of" + playerInfo.money + ".");
    }
    else {
        window.alert("You've lost your robot in battle!.");
    }
    // ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play Again?");
    if (playAgainConfirm) {
        //restart the game
        startgame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
        endGame();
    }
};

var shop = function () {
    // ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or Leave the store? Please enter one: 'REFILL','UPGRADE', or 'LEAVE' to make a choice"
    );
    // use switch to carry out action
    switch (shopOptionPrompt) {
        case "Refill":
        case "refill":
            window.alert("Refilling player's health by 20 for 7 dollars.");
            // increase health and decrease money
            playerInfo.health = playerInfo.health + 20;
            playerInfo.money = playerInfo.money - 7;
            break;
        case "upgrade":
        case "Upgrade":
            window.alert("Upgrading player's attack by 6 for 7 dollars");

            //increase attack and decrease money
            playerInfo.attack = playerInfo.attack + 6;
            playerInfo.money = playerInfo.money - 7;
            break;
        case "leave":
        case "Leave":
            window.alert("Leaving the store");
            // do nothing, so function will end
            break;
        default:
            window.alert("You did not pick a valid option.Try Again.");
            //call shop() again to force player to pick a valid option 
            shop();
            break;

    }

}
startgame();