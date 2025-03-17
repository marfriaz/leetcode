////////  Best Time to Buy and Sell Stock ///////

/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
*/

/*
Solution 1: 2 Pointers
  Time Complexity: O(n)
  Space Complexity: O(1)
*/
const maxProfit = (prices) => {
  let left = 0; // Buy
  let right = 1; // sell
  let max_profit = 0;
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left]; // our current profit

      max_profit = Math.max(max_profit, profit);
    } else {
      left = right;
    }
    right++;
  }
  return max_profit;
};

/*
Solution 2: 
  Time Complexity: O(n)
  Space Complexity: O(n)?
*/

var maxProfit2 = function (prices) {
  // Max is = price on a certain day - minimum price
  // Minumum price could change as we move through prices
  // So should change minPrice compared to our first minPrice
  let profit = 0;
  let minPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    let currentPrice = prices[i];

    minPrice = Math.min(currentPrice, minPrice);
    if (currentPrice - minPrice > profit) {
      profit = currentPrice - minPrice;
    }
  }
  return profit;
};

let prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit2(prices)); // 5
