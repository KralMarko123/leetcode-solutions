import {
	ARITHMETIC_PROGRESSION_APPROACH,
	BEST_TIME_TO_BUY_AND_SELL_STOCK_APPROACH,
	BINARY_SEARCH_APPROACH,
	LONGEST_CONSECUTIVE_SEQUENCE_APPROACH,
	MIN_STACK_APPROACH
} from './APPROACHES';
import {
	ARITHMETIC_PROGRESSION_SNIPPET,
	BEST_TIME_TO_BUY_AND_SELL_STOCK_SNIPPET,
	BINARY_SEARCH_SNIPPET,
	LONGEST_CONSECUTIVE_SEQUENCE_SNIPPET,
	MIN_STACK_SNIPPET
} from './CODE_SNIPPETS';
import { EASY, HARD, MEDIUM } from './MISC';
import {
	ARITHMETIC_PROGRESSION_DESCRIPTION,
	BEST_TIME_TO_BUY_AND_SELL_STOCK_DESCRIPTION,
	BINARY_SEARCH_DESCRIPTION,
	LONGEST_CONSECUTIVE_SEQUENCE_DESCRIPTION,
	MIN_STACK_DESCRIPTION
} from './PROBLEM_DESCRIPTIONS';
import {
	ARITHMETIC_PROGRESSION_LINK,
	BEST_TIME_TO_BUY_AND_SELL_STOCK_LINK,
	BINARY_SEARCH_LINK,
	LONGEST_CONSECUTIVE_SEQUENCE_LINK,
	MIN_STACK_LINK
} from './PROBLEM_LINKS';

export const PROBLEMS = [
	{
		title: 'Best Time to Buy and Sell Stock',
		difficulty: EASY,
		description: BEST_TIME_TO_BUY_AND_SELL_STOCK_DESCRIPTION,
		approach: BEST_TIME_TO_BUY_AND_SELL_STOCK_APPROACH,
		codeSnippet: BEST_TIME_TO_BUY_AND_SELL_STOCK_SNIPPET,
		link: BEST_TIME_TO_BUY_AND_SELL_STOCK_LINK,
		number: 121
	},
	{
		title: 'Binary Search',
		difficulty: EASY,
		description: BINARY_SEARCH_DESCRIPTION,
		approach: BINARY_SEARCH_APPROACH,
		codeSnippet: BINARY_SEARCH_SNIPPET,
		link: BINARY_SEARCH_LINK,
		number: 704
	},
	{
		title: 'Can Make Artihmetic Progression From Sequence',
		difficulty: EASY,
		description: ARITHMETIC_PROGRESSION_DESCRIPTION,
		approach: ARITHMETIC_PROGRESSION_APPROACH,
		codeSnippet: ARITHMETIC_PROGRESSION_SNIPPET,
		link: ARITHMETIC_PROGRESSION_LINK,
		number: 1502
	},
	{
		title: 'Longest Consecutive Sequence',
		difficulty: MEDIUM,
		description: LONGEST_CONSECUTIVE_SEQUENCE_DESCRIPTION,
		approach: LONGEST_CONSECUTIVE_SEQUENCE_APPROACH,
		codeSnippet: LONGEST_CONSECUTIVE_SEQUENCE_SNIPPET,
		link: LONGEST_CONSECUTIVE_SEQUENCE_LINK,
		number: 128
	},
	{
		title: 'Min Stack',
		difficulty: MEDIUM,
		description: MIN_STACK_DESCRIPTION,
		approach: MIN_STACK_APPROACH,
		codeSnippet: MIN_STACK_SNIPPET,
		link: MIN_STACK_LINK,
		number: 155
	}
];
