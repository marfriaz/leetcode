//////// Coin Change ///////
/* You are given coins of different denominations and a total amount of money amount. 
Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.
*/

// Dynamic Programming 
// O(nd) time  | O(n) space
var coinChange = function (coins, amount) {
  if (!amount || !coins.length) {
    return 0;
  }
  // General idea is to build up an array with amounts 1..amount with fewest coins
  // in the beginning, it's very logical, [1] = 1, [2] = 1 as we can use coin 1 and 2
  // We should consider all coins less than or equal to the amount we have. To tell if
  // we have the smallest amount of coins we should check if using the coin is a smaller
  // amount than what we recorded at amount - x

  let amountsArr = [0]; // to record amounts smaller than amount and eventually, amount too
  let currentAmount = 1; // INDEXX = Current Amount: to fill out array, it represents the increasing amounts we're recording

  // Until we reach out[amount]
  while (!amountsArr[amount]) {
    amountsArr[currentAmount] = Infinity; // Convenient initial value
    for (let i = 0; i < coins.length; i++) {
      // only look at coins that fit in the current amount or under amount
      if (coins[i] <= currentAmount) {
        // What's better: What we currently have, or using this coin (that's that 1 below) +
        // what we calculated for the current amount minus the current coin?
        // (that's out[index - coins[i]])

        // amounts[current amount] = Min of Infinity or 1 + amounts[currentAmount - coin value]
        amountsArr[currentAmount] = Math.min(
          amountsArr[currentAmount],
          1 + amountsArr[currentAmount - coins[i]]
        );
      }
    }
    currentAmount++;
  }
  return amountsArr[amount] === Infinity ? -1 : amountsArr[amount];
};

let coins = [1, 2, 5];
let amount = 11;
console.log(coinChange(coins, amount)); //3
