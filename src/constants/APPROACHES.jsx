export const BEST_TIME_TO_BUY_AND_SELL_STOCK_APPROACH = `
		From the text I realize that there are a few things I want to remember. Since each i resembles a
		day, I should save the day on which the stock is cheapest, as well as the maximum profitfound.
		Going with the assumption that there are at least two days to go through, the scenario where we
		can only buy and sell in the same day means a profit of 0.
		
		The profit is	calculated by subtracting the price that's for the current day with the cheapest price found up
		until that point. Using the previously stored variable to remember any found profits, I check it
		against the current profit. If the current profit is bigger, then set that as the max profit
		found.
		
		I also check if the price the stock is at currently is the cheapest one we've
		found so far, if so, set that as the cheapest day.
`;
