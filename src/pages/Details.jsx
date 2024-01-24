import React from 'react';
import PageContainer from '../layout/PageContainer';
import Card from '../components/Card';
import ParagraphHighlight from '../components/ParagraphHighlight';
import Highlight from 'react-highlight';
import { BEST_TIME_TO_BUY_AND_SELL_STOCK_SNIPPET } from '../constants/CODE_SNIPPETS';
import LinkContainer from '../components/LinkContainer';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../constants/ROUTES';
import '../styles/page.css';

const Details = () => {
	const navigate = useNavigate();

	return (
		<div className='page details-page'>
			<PageContainer>
				<Card>
					<h1 className='title'>Best Time to Buy and Sell Stock</h1>
				</Card>
				<h2 className='title dark secondary'>The Problem:</h2>
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

				<h2 className='title dark secondary'>The Approach:</h2>
				<Card extraClassNames={['success']}>
					<p className='paragraph'>
						From the text I realize that there are a few things I want to remember. Since each{' '}
						<ParagraphHighlight text={'i'} /> resembles a day, I should save the day on which the
						stock is <ParagraphHighlight text={'cheapest'} /> , as well as the{' '}
						<ParagraphHighlight text={'maximum profit'} /> found. Going with the assumption that
						there are at least two days to go through, the scenario where we can only buy and sell
						in the same day means a profit of 0. <br /> <br /> The profit is calculated by
						subtracting the price that's for the current day with the cheapest price found up until
						that point. Using the previously stored variable to remember any found profits, I check
						it against the current profit. If the current profit is bigger, then set that as the max
						profit found.
						<br /> <br /> I also check if the price the stock is at currently is the cheapest one
						we've found so far, if so, set that as the cheapest day.
					</p>
				</Card>

				<h2 className='title dark secondary'>The Code:</h2>

				<Card extraClassNames={['dark', 'fullwidth']}>
					<Highlight className='csharp-highlight'>
						{BEST_TIME_TO_BUY_AND_SELL_STOCK_SNIPPET}
					</Highlight>
				</Card>

				<div className='details-actions'>
					<Card extraClassNames={['accent']} callOnClick={() => navigate(ROUTES.HOME)}>
						<h2 className='title secondary'>Go Back</h2>
					</Card>

					<LinkContainer
						isExternal
						href={'https://leetcode.com/problems/best-time-to-buy-and-sell-stock'}
					>
						<Card extraClassNames={['secondary']}>
							<h2 className='title secondary'>Link to Leetcode Problem</h2>
						</Card>
					</LinkContainer>
				</div>
			</PageContainer>
		</div>
	);
};

export default Details;
