import {
	ARITHMETIC_PROGRESSION_APPROACH,
	BEST_TIME_TO_BUY_AND_SELL_STOCK_APPROACH,
	BINARY_SEARCH_APPROACH,
	CAN_PLACE_FLOWERS_APPROACH,
	CONTAINS_DUPLICATE_APPROACH,
	CONTAINS_DUPLICATE_APPROACH_TWO,
	EXCEL_SHEET_COLUMN_NUMBER_APPROACH,
	FIND_INDEX_OF_FIRST_OCCURRENCE_IN_A_STRING_APPROACH,
	FIND_NUMBERS_WITH_EVEN_NUMBER_OF_DIGITS_APPROACH,
	LONGEST_CONSECUTIVE_SEQUENCE_APPROACH,
	MIN_STACK_APPROACH
} from './APPROACHES';
import {
	ARITHMETIC_PROGRESSION_SNIPPET,
	BEST_TIME_TO_BUY_AND_SELL_STOCK_SNIPPET,
	BINARY_SEARCH_SNIPPET,
	CAN_PLACE_FLOWERS_SNIPPET,
	CONTAINS_DUPLICATE_SNIPPET,
	CONTAINS_DUPLICATE_TWO_SNIPPET,
	EXCEL_SHEET_COLUMN_NUMBER_SNIPPET,
	FIND_INDEX_OF_FIRST_OCCURRENCE_IN_A_STRING_SNIPPET,
	FIND_NUMBERS_WITH_EVEN_NUMBER_OF_DIGITS_SNIPPET,
	LONGEST_CONSECUTIVE_SEQUENCE_SNIPPET,
	MIN_STACK_SNIPPET
} from './CODE_SNIPPETS';
import { EASY, HARD, MEDIUM } from './MISC';
import {
	ARITHMETIC_PROGRESSION_DESCRIPTION,
	BEST_TIME_TO_BUY_AND_SELL_STOCK_DESCRIPTION,
	BINARY_SEARCH_DESCRIPTION,
	CAN_PLACE_FLOWERS_DESCRIPTION,
	CONTAINS_DUPLICATE_DESCRIPTION,
	CONTAINS_DUPLICATE_TWO_DESCRIPTION,
	EXCEL_SHEET_COLUMN_NUMBER_DESCRIPTION,
	FIND_INDEX_OF_FIRST_OCCURRENCE_IN_A_STRING_DESCRIPTION,
	FIND_NUMBERS_WITH_EVEN_NUMBER_OF_DIGITS_DESCRIPTION,
	LONGEST_CONSECUTIVE_SEQUENCE_DESCRIPTION,
	MIN_STACK_DESCRIPTION
} from './PROBLEM_DESCRIPTIONS';
import {
	ARITHMETIC_PROGRESSION_LINK,
	BEST_TIME_TO_BUY_AND_SELL_STOCK_LINK,
	BINARY_SEARCH_LINK,
	CAN_PLACE_FLOWERS_LINK,
	CONTAINS_DUPLICATE_LINK,
	CONTAINS_DUPLICATE_TWO_LINK,
	EXCEL_SHEET_COLUMN_NUMBER_LINK,
	FIND_INDEX_OF_FIRST_OCCURRENCE_IN_A_STRING_LINK,
	FIND_NUMBERS_WITH_EVEN_NUMBER_OF_DIGITS_LINK,
	LONGEST_CONSECUTIVE_SEQUENCE_LINK,
	MIN_STACK_LINK
} from './PROBLEM_LINKS';

export const EASY_PROBLEMS = [
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
		title: 'Can Place Flowers',
		difficulty: EASY,
		description: CAN_PLACE_FLOWERS_DESCRIPTION,
		approach: CAN_PLACE_FLOWERS_APPROACH,
		codeSnippet: CAN_PLACE_FLOWERS_SNIPPET,
		link: CAN_PLACE_FLOWERS_LINK,
		number: 605
	},
	{
		title: 'Contains Duplicate',
		difficulty: EASY,
		description: CONTAINS_DUPLICATE_DESCRIPTION,
		approach: CONTAINS_DUPLICATE_APPROACH,
		codeSnippet: CONTAINS_DUPLICATE_SNIPPET,
		link: CONTAINS_DUPLICATE_LINK,
		number: 217
	},
	{
		title: 'Contains Duplicate II',
		difficulty: EASY,
		description: CONTAINS_DUPLICATE_TWO_DESCRIPTION,
		approach: CONTAINS_DUPLICATE_APPROACH_TWO,
		codeSnippet: CONTAINS_DUPLICATE_TWO_SNIPPET,
		link: CONTAINS_DUPLICATE_TWO_LINK,
		number: 219
	},
	{
		title: 'Excel Sheet Column Number',
		difficulty: EASY,
		description: EXCEL_SHEET_COLUMN_NUMBER_DESCRIPTION,
		approach: EXCEL_SHEET_COLUMN_NUMBER_APPROACH,
		codeSnippet: EXCEL_SHEET_COLUMN_NUMBER_SNIPPET,
		link: EXCEL_SHEET_COLUMN_NUMBER_LINK,
		number: 171
	},
	{
		title: 'Find Numbers with Even Number of Digits',
		difficulty: EASY,
		description: FIND_NUMBERS_WITH_EVEN_NUMBER_OF_DIGITS_DESCRIPTION,
		approach: FIND_NUMBERS_WITH_EVEN_NUMBER_OF_DIGITS_APPROACH,
		codeSnippet: FIND_NUMBERS_WITH_EVEN_NUMBER_OF_DIGITS_SNIPPET,
		link: FIND_NUMBERS_WITH_EVEN_NUMBER_OF_DIGITS_LINK,
		number: 1295
	},
	{
		title: 'Find the Index of the First Occurrence in a String',
		difficulty: EASY,
		description: FIND_INDEX_OF_FIRST_OCCURRENCE_IN_A_STRING_DESCRIPTION,
		approach: FIND_INDEX_OF_FIRST_OCCURRENCE_IN_A_STRING_APPROACH,
		codeSnippet: FIND_INDEX_OF_FIRST_OCCURRENCE_IN_A_STRING_SNIPPET,
		link: FIND_INDEX_OF_FIRST_OCCURRENCE_IN_A_STRING_LINK,
		number: 28
	}
];

export const MEDIUM_PROBLEMS = [
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

export const PROBLEMS = [...EASY_PROBLEMS, ...MEDIUM_PROBLEMS];
