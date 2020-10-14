var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 30;
var playerMoney = 10;
//You can also log multiple values at once like this 
console.log(playerName, playerAttack, playerHealth);

var enemyName = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 25;



var fight = function (enemyName) {
   
    
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'Skipt'");
    while(enemyHealth >0 && playerHealth >0)
    {
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
            console.log("playerMoney",playerMoney);
            break;
        }
        else {
            // if no (false), ask question again by running fight() again
            fight();
        }
    } else {
        window.alert("You need to pick a valid option. Try again!");
    }
    
}


};
for (var i = 0; i < enemyName.length; i++) {
    if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round " +(i+1));
      
        // pick new enemy to fight based on the index of the enemyNames array
    var pickedEnemyName = enemyName[i];
    // reset enemyHealth before starting new fight
    enemyHealth = 50;
     // use debugger to pause script from running and check what's going on at that moment in the code
     debugger;
       // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
    fight(pickedEnemyName);
    }
    else{
        window.alert("You have lost your robot in battle! Game Over")
    }
}