////////  Best Time to Buy and Sell Stock ///////

/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
*/

// time: O(n), need to iterate all the string
// space: O(n)

var maxProfit = function (prices) {
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
console.log(maxProfit(prices)); // 5
