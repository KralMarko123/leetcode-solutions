export const BEST_TIME_TO_BUY_AND_SELL_STOCK_SNIPPET = `public int MaxProfit(int[] prices) {
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

export const BINARY_SEARCH_SNIPPET = `public int Search(int[] nums, int target) {
  var result = Array.BinarySearch(nums, target);
  return result < 0 ? 0 : result;
}

public int SearchUsingOwnBinarySearch(int[] nums, int target) {
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

export const ARITHMETIC_PROGRESSION_SNIPPET = `public bool CanMakeArithmeticProgression(int[] arr) {
  // Step 1: Find min, max, and difference
  var minElement = arr.Min();
  var maxElement = arr.Max();
  var difference = (maxElement - minElement) / (arr.Length - 1);

  // Step 2: Check if difference can be equally distributed 
  if ((maxElement - minElement) % (arr.Length - 1) != 0) return false;

  // Step 3: Check if difference is zero meaning all elements are the same number
  if (difference == 0) return true;

  var set = new HashSet < int > ();
  
  // Step 4: Check if each element is divisible by the difference and exists only once in the array
  foreach(var num in arr) {
    if ((num - minElement) % difference != 0 || set.Contains(num)) return false;

    set.Add(num);
  }

  return true;
}`;

export const LONGEST_CONSECUTIVE_SEQUENCE_SNIPPET = `public int LongestConsecutive(int[] nums) {
  if (nums.Length <= 1) return nums.Length;

  // hashset lookup is O(1)
  var set = nums.ToHashSet();
  var maxSequence = 1;

  foreach(var num in nums) {
    if (set.Contains(num - 1)) continue;

    var sequence = 1;

    // since lookup is O(1) worst case scenario is an interrupted sequence which would result in O(N)
    while (set.Contains(num + sequence)) sequence++;

    maxSequence = maxSequence < sequence ? sequence : maxSequence;
  }

  return maxSequence;
}`;

export const MIN_STACK_SNIPPET = `public class MinStack {
  private List < int > Elements;
  private List < int > MinimalElements;

  public MinStack() {
    Elements = new List < int > ();
    MinimalElements = new List < int > ();
  }

  public void Push(int val) {
    if (Elements.Count == 0 || val <= MinimalElements.Last()) MinimalElements.Add(val);
    Elements.Add(val);
  }

  public void Pop() {
    if (Elements.ElementAt(Elements.Count - 1) == MinimalElements.Last())
      MinimalElements.RemoveAt(MinimalElements.Count - 1);

    Elements.RemoveAt(Elements.Count - 1);
  }

  public int Top() {
    return Elements.Last();
  }

  public int GetMin() {
    return MinimalElements.Last();
  }
}`;

export const CAN_PLACE_FLOWERS_SNIPPET = `public bool CanPlaceNumberOfFlowers(int[] flowerbed, int n) {
  for (int i = 0; i < flowerbed.Length; i++) {
    if (flowerbed[i] == 0 && (i == 0 || flowerbed[i - 1] == 0) &&
      (i == flowerbed.Length - 1 || flowerbed[i + 1] == 0)) {
      flowerbed[i] = 1;
      n--;
    }
  }

  return n <= 0;
}`;

export const CONTAINS_DUPLICATE_SNIPPET = `public bool ContainsDuplicate(int[] nums) {
  var dictionary = new Dictionary < int,
    bool > ();

  foreach(var num in nums) {
    if (dictionary.ContainsKey(num)) return true;
    else dictionary.Add(num, true);
  }

  return false;
}

public bool ContainsDuplicateWithHashSet(int[] nums) {
  return new HashSet < int > (nums).Count != nums.Length;
}`;

export const CONTAINS_DUPLICATE_TWO_SNIPPET = `public bool ContainsNearbyDuplicate(int[] nums, int k) {
  var dict = new Dictionary < int, int > ();

  for (int i = 0; i < nums.Length; i++) {
    if (dict.ContainsKey(nums[i]) && (i - dict[nums[i]]) <= k) return true;
    else dict[nums[i]] = i;
  }

  return false;
}`;

export const EXCEL_SHEET_COLUMN_NUMBER_SNIPPET = `public int TitleToNumber(string columnTitle) {
  int result = 0;
  var dictionary = new Dictionary<char, int>()
    {
        { 'A', 1 },
        { 'B', 2 },
        { 'C', 3 },
        { 'D', 4 },
        { 'E', 5 },
        { 'F', 6 },
        { 'G', 7 },
        { 'H', 8 },
        { 'I', 9 },
        { 'J', 10 },
        { 'K', 11 },
        { 'L', 12 },
        { 'M', 13 },
        { 'N', 14 },
        { 'O', 15 },
        { 'P', 16 },
        { 'Q', 17 },
        { 'R', 18 },
        { 'S', 19 },
        { 'T', 20 },
        { 'U', 21 },
        { 'V', 22 },
        { 'W', 23 },
        { 'X', 24 },
        { 'Y', 25 },
        { 'Z', 26 },
    };

  for (int i = 0; i < columnTitle.Length; i++) {
    result += (int) Math.Pow(26, columnTitle.Length - i - 1) * dictionary[columnTitle[i]];
  }

  return result;
}`;
