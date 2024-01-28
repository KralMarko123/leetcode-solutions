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

export const BINARY_SEARCH_SNIPPET = `public static int Search(int[] nums, int target) {
  var result = Array.BinarySearch(nums, target);
  return result < 0 ? 0 : result;
}

public static int SearchUsingOwnBinarySearch(int[] nums, int target) {
  var start = 0;
  var end = nums.Length - 1;

  while (start <= end) {
    var halfway = start + (end - start) / 2;

    if (nums[halfway] == target) return halfway;

    if (nums[halfway] > target) end = halfway - 1;
    else start = halfway + 1;
  }

  return -1;
}`;
