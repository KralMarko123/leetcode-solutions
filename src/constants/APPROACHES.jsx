export const BEST_TIME_TO_BUY_AND_SELL_STOCK_APPROACH = `From the text I realize that there are a few things I want to remember. Since each i resembles a day, I should save the day on which the stock is cheapest, as well as the maximum profit found.\n\nGoing with the assumption that there are at least two days to go through, the scenario where we can only buy and sell in the same day means a profit of 0. The profit is calculated by subtracting the price that's for the current day with the cheapest price found up until that point. Using the previously stored variable to remember any found profits, I check it against the current profit. If the current profit is bigger, then set that as the max profit found.\n\nI also check if the price the stock is at currently is the cheapest one we've found so far, if so, set that as the cheapest day.
`;
export const BINARY_SEARCH_APPROACH = `This problem is simple enough. The main catch is that the time complexity is required to be faster than O(N), and as the title implies, a binary search is supposed to be used. So while C# provides us with a built-in implementation of the binary search, I wrote my own as well.\n\nThe method splits the array and checks if the target is found, if not, check whether it's in the first, or the second piece of the split (by checking whether the value is higher or lower than the one we're at). By constantly splitting the pieces, I eventually get to the target value or run out of pieces to split.`;
export const ARITHMETIC_PROGRESSION_APPROACH = `This problem involved some thinking about how to find if the difference is the same everywhere. One approach is to loop through each element and check if the difference remains the same after the elements have been sorted. But this introduces more time complexity by doing sorting. The solution was to use a set, and to check if the maximum difference can be divided equally (meaning the differences between adjacent elements can be equal).`;
export const LONGEST_CONSECUTIVE_SEQUENCE_APPROACH = `The main constraint is the O(N) time complexity. Since the elements aren't sorted I had to find a way to try and remember the sequences being passed but from the location of each number. The solution was to transform the number array into a set which we can check directly for a value without having to loop over again. With each number passed we check for an existing sequence and we continue that sequence until we reach its end, and then remember that sequence's length if it was the longest. In order to have the actual algorithm be O(N), we have to check if a previous number contained in a sequence was passed. That way, the worst case scenario would be for the first number to be the smallest and the last one to be the largest, resulting in O(N + N - 1), which is still linear.`;
export const MIN_STACK_APPROACH = `I wanted to implement this without using the Stack class already provided. So I decided to go with two lists as my approach. One would keep all the minimal elements found whilst the other would keep all elements. Depending on what the method called is, we either return from one list or the other, and if a new value is added check if it's the smallest one yet to add it to the list with minimal elements.`;
export const CAN_PLACE_FLOWERS_APPROACH = `This problem is pretty much one big if-statement. Since the rule clearly states that we can't plant our flowers in adjacent plots, that's obviously one of the extra checks, with the other extra check being if we are at the beggining or at the end. And if all of those combinations result to true, just fill the plot and decrement the number of flowers.\n\nIf we're left with anything equal to or lower than 0, then we can definitely plant our flowers.`;
export const CONTAINS_DUPLICATE_APPROACH = `A very simple problem. I've written solutions using both a dictionary and a hashset. But both involve introducing a new structure in order to remember which elements had passed. By iterating through and then looking up the structures we always end up with a O(N) solution. Also the hashset solution looks really cool as a one-liner!`;
export const CONTAINS_DUPLICATE_APPROACH_TWO = `This is the 'contains duplicate' problem but with extra steps. Now a hashset could not do the job since we have another dimension to the question, the indices. But, the checks are simple enough and a dictionary can be used to do the job.\n\nWhat I did was set the dictionary keys be the numbers actually passed with their indices stored as values. That way we can instantly look up a key (meaning we check if that number has passed) and use its value (the index where it's at) to check for the extra condition of the problem.`;
export const EXCEL_SHEET_COLUMN_NUMBER_APPROACH = `I personally solved this using a dictionary. I needed a way to remember the value each character translates to and then multiply correctly depending on the position that character resides at in the string. It took a bit of time to get the indexing right but still came up with a fix in the end. There is a way to solve this using only the ASCII code of each character but I was too lazy to go that route, the dictionary seemed to make more sense to me at the time.`;
export const FIND_NUMBERS_WITH_EVEN_NUMBER_OF_DIGITS_APPROACH = `A very simple problem. With the power of LINQ, we can easily transform each number to a string and check for the count of those numbers which satisfy the condition, all in a cool one-liner.`;
export const FIND_INDEX_OF_FIRST_OCCURRENCE_IN_A_STRING_APPROACH = `I wanted to avoid using the IndexOf() method available in C#. So I decided to use a simple approach where I would start another cycle to count the matching letters in order to see if the original string contains the other and return the starting index if all matching letters were passed. The only issue here was to write it in a way which would avoid having to iterate until the end of the original string, which is why we have the extra if check at the beggining of the cycle and the break in the second.`;
export const FIRST_UNIQUE_CHARACTER_IN_A_STRING_APPROACH =
	'I actually tried numerous approaches here, from using frequence arrays to hash sets. What I found was that each method was still a linear solution at best, so I went with a dictionary as it looked the most elegant. The logic is that we increment the key/value pair for every index an existing character is found at, and then return the result if there is one that appears only once, otherwise we return -1.';
export const FIZZ_BUZZ_APPROACH = `This is a simple problem involving conditional checks. Depending on the conditions passed, we update the value that's inserted into the result. Because there are not a lot of checks, a few if statements do the job.`;
export const HAPPY_NUMBER_APPROACH = `The main issue here was to see if a cycle had begun or not. In this case, that would be the sum of the squared digits to reappear after it's been passed. In that sense, a hashset looked most logical. So I used one to keep check of all sums passed and return false if anything different than 1 reappeared, and true if it was a 1.`;
export const INTERSECTION_OF_TWO_ARRAYS_APPROACH = `I had previously solved this using a while loop and having the arrays be sorted prior to looping through them. But that solution seemed kind of convoluted, so I used two hashsets in order to find the unique elements in each array and then check for the ones found in both sets. Those are the ones we want and are returned as the result.`;
export const REVER_INTEGER_APPROACH = `This one required some thought behind it. At first I had written the solution using char arrays and transforms that just looked too gruesome for me to consider it 'clean'. I ended up using a queue to have the numbers placed in reverse and a simple join to check for the integer constraint. After that it was just dividing and adding to the result.`;
export const MEDIAN_OF_TWO_SORTED_ARRAYS_APPROACH = `My first hard problem. The logic itself is not really that hard, especially considering it's technically not a O(log(m+n)) solution :D . Here I decided to use a merged array of all the sorted values as the place from where I would calculate the median. It is essentially my own implementation of the Merge Sort algorithm. The calculation afterwards is simple and depends solely on the number of elements in the array. The faster solution would be to use more pointers and some cool math, most likely...`;
export const ZIGZAG_CONVERSION_APPROACH = `At first my mind went to a graph for some reason. By having each spot be filled and then traversed accordingly I could build the string as it looks in the description. I realized though that this approach wouldn't really work as I can't really guess the number of columns I would need upfront.\n\nThen I saw that the rows themselves could be either in an array or a list of their own, which could then be joined to form the result. An array of strings was one method, but I settled with a dictionary oncemore.\n\nBy having the values be the strings formed and the keys represent the row, I can easily go up and down using a pointer paired with a flag. When we've reached the bottom row, go back up, when we've reached the top row, go back down. After that we have the rows as separate strings, which we can join to form the final result.`;
export const TWO_SUM_APPROACH = `This problem is probably one of the first ones I ever solved. Main question was how do we remember the indices of the values that might be enough for us to hit the target whilst we're on another value. The solution was a dictionary, whose keys would be the actual values and the values inside would be the indices. That way we can easily access each key to check if the target can be hit, and return the correct indices in one loop.`;
export const THREE_SUM_APPROACH = `This was a difficult problem for me. I had a really hard time with trying to figure out how to have all of the possible combinations of indices in order to check the same. After some time I saw that having the elements sorted actually made the problem a lot more manageable. By using two extra pointers and some nested cycles, we can find all of the different combinations of indices and check for the target sum. In order to avoid Leetcode's time limit extra checks needed to be added:\n\nIf the first value in the sorted array is larger than 0, return immediately since we definitely can't have a sum of 0 at that point.\nIf the starting index in the parent cycle points to a value larger than 0, we've passed the place where 0's exist so again, a sum of 0 is not possible so just break from the cycle.\nIf we have repeating elements, skip them by increasing each pointer acoordingly.\n\nAll in all a good problem, and definitely one that I underestimated.`;
export const STRING_TO_INTEGER_ATOI_APPROACH = `I wanted to stay as close to the problem description as possible. So I went to implement each step listed as bareback as I could, the only exception being the TrimStart() method I used so that I could get rid of any leading zeros. I could've technically used a while loop there as well and then fetched a substring, but since the implementation behind it is similar I decided not to bother. A bit of a boring problem, but a good exercise for string and integer manipulation.`;
export const REMOVE_NTH_NODE_FROM_END_OF_LIST_APPROACH = `This one was pretty easy, considering I hate working with lists and pointers. By knowing the length we can easily find the actual spot where we need to make the change, so I decided to use a couple of counters to know the position of where I'm at and the overall length. With a couple of if statements we make the needed change and we get our desired list. I realise that there is a faster approach with fast/slow pointers or recursion, but I don't really want to bother.`;
export const VALID_PARENTHESES_APPROACH = `A problem that required some intuition. Main issue was how to remember the order of each parenthesis. By having the closing parentheses be the ones placed last in the stack (meaning the one that is on the outside), we can check if that is the same one we expect it to be when actually located there in the string. Also, using a dictionary to push the correct character into the stack makes things seem more neat.`;
