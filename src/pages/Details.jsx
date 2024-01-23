import React from 'react';
import PageContainer from '../layout/PageContainer';
import Card from '../components/Card';
import ParagraphHighlight from '../components/ParagraphHighlight';
import '../styles/page.css';

const Details = () => {
	return (
		<div className='page details-page'>
			<PageContainer>
				<Card>
					<h1 className='title'>Best Time to Buy and Sell Stock</h1>
				</Card>
				<h2 className='title secondary'>The Problem:</h2>
				<Card extraClassNames={['accent']}>
					<p className='paragraph'>
						You are given an array <ParagraphHighlight text={'prices'} /> where{' '}
						<ParagraphHighlight text={'prices[i]'} /> is the price of a given stock on the ith{' '}
						<ParagraphHighlight text={'i'} />. You want to maximize your profit by choosing a single{' '}
						<ParagraphHighlight text={'i'} /> to buy one stock and choosing a different{' '}
						<ParagraphHighlight text={'i'} /> in the future to sell that stock. Return the maximum
						profit you can achieve from this transaction. If you cannot achieve any profit, return{' '}
						<ParagraphHighlight text={'0'} />
					</p>
				</Card>

				<h2 className='title secondary'>The Approach:</h2>
				<Card extraClassNames={['success']}>
					<p className='paragraph'>
						From the text we realize that there are a few things we want to remember. Since each{' '}
						<ParagraphHighlight text={'i'} /> resembles a day, we want to remember the day on which
						the stock is <ParagraphHighlight text={'cheapest'} /> , and the{' '}
						<ParagraphHighlight text={'maximum profit'} /> . We assume that there are at least two
						days to go through, because the scenario where we can only buy and sell in the same day
						means a profit of 0. <br /> <br /> The profit is calculated by subtracting the price
						that's for the current day with the cheapest price found up until that point. We use a
						variable to remember any prevously found profits, and check it against the current
						profit. If the current profit is bigger, set that as the max profit found.
						<br /> <br /> We should also check if the price the stock is at currently is the
						cheapest one we've found so far, if so, set that as the cheapest day.
					</p>
				</Card>

				<h2 className='title secondary'>The Code:</h2>
				<Card extraClassNames={['dark', 'fullwidth']}>
					<p className='paragraph code'>
						{`public static int MaxProfit(int[] prices)
{
    if (prices.Length == 1) return 0;
    
    var maxProfit = 0;
    var cheapestStockDay = 0;

    for (var dayOfStock = 1; dayOfStock < prices.Length; dayOfStock++)
    {
        if (prices[dayOfStock] - prices[cheapestStockDay] > maxProfit) 
            maxProfit = prices[dayOfStock] - prices[cheapestStockDay];

        if (prices[dayOfStock] < prices[cheapestStockDay]) 
            cheapestStockDay = dayOfStock;
    }

    return maxProfit;
}`}
					</p>
				</Card>
			</PageContainer>
		</div>
	);
};

export default Details;
