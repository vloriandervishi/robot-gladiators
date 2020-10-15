var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
//You can also log multiple values at once like this 
console.log(playerName, playerAttack, playerHealth);

var enemyName = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 10;



var fight = function (enemyName) {


    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'Skipt'");
    while (enemyHealth > 0 && playerHealth > 0) {
        if (promptFight === 'fight' || promptFight === "FIGHT") {
            // remove enemhy's health by subtracting the amount set in the playerAttack variable

            //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
            enemyHealth = enemyHealth - playerAttack;
            // Log a resulting message to the console so we know that it worked.
            console.log(playerName + "attacked" + enemyName + "." + enemyName + "now has" + enemyHealth + "health remaining.");
            // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
            //  enemyHealth=enemyHealth-playerAttack;
            // Log a resulting message to the console so we know that it worked.
            //
            if (enemyHealth <= 0) {
                window.alert(enemyName + "has died!");
                break;
            }
            else {
                window.alert(enemyName + "still has" + enemyHealth + "health left.");
            }
            playerHealth = playerHealth - enemyAttack;
            console.log(`${enemyName}attacked${playerName}.${playerName}now has${playerHealth}health remaining.`);
            if (playerHealth <= 0) {
                window.alert(playerName + "has died!");
                break;
            } else {
                window.alert(playerName + "still has" + playerHealth + "health left.");
            }
        }
        // if player chooses to skip
        else if (promptFight === "skip" || promptFight === "SKIP") {
            window.alert(playerName + "has chosen to skip the fight!");
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            // if yes (true), leave fight
            if (confirmSkip) {

                window.alert(playerName + "has decided to skip this fight. GoodBye!");
                // subtract money from player money for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
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
    var enemyNames = enemyName;
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;


    for (var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

            // pick new enemy to fight based on the index of the enemyNames array
            var pickedEnemyName = enemyNames[i];
            // reset enemyHealth before starting new fight
            enemyHealth = 50;
            // use debugger to pause script from running and check what's going on at that moment in the code
            // debugger;
            // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
            fight(pickedEnemyName);
            // if we're not at the last enemy in the array
            if (playerHealth > 0 && i < enemyName.length - 1) {
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
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of" + playerMoney + ".");
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
            playerHealth = playerHealth + 20;
            playerMoney = playerMoney - 7;
            break;
        case "upgrade":
        case "Upgrade":
            window.alert("Upgrading player's attack by 6 for 7 dollars");

            //increase attack and decrease money
            playerAttack = playerAttack + 6;
            playerMoney = playerMoney - 7;
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