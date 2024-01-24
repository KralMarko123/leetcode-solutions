export const BEST_TIME_TO_BUY_AND_SELL_STOCK_SNIPPET = `public static int MaxProfit(int[] prices) {
  if (prices.Length == 1) return 0;

  var maxProfit = 0;
  var cheapestStockDay = 0;

  for (var dayOfStock = 1; dayOfStock < prices.Length; dayOfStock++) {
    var profit = prices[dayOfStock] - prices[cheapestStockDay];

    if (profit > maxProfit)
      maxProfit = profit;
    
    if (prices[dayOfStock] < prices[cheapestStockDay])
      cheapestStockDay = dayOfStock;
  }

  return maxProfit;
}`;
