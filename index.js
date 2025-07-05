function moveZeroes(nums) {
    let lastNonZeroIndex = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[lastNonZeroIndex] = nums[i];
            lastNonZeroIndex++;
        }
    }

    for (let i = lastNonZeroIndex; i < nums.length; i++) {
        nums[i] = 0;
    }
}
// Example usage:
const nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums); // Output: [1, 3, 12, 0, 0]

// Pattern name: Move Zeroes
// Pattern description: Given an array, move all zeroes to the end while maintaining the order of non-zero elements.
// Pattern difficulty: Easy
// Pattern tags: Array, Two Pointers
// Pattern code: javascript
// Pattern codeSnippet: moveZeroes.toString();
// Pattern example:
//     input: "[0, 1, 0, 3, 12]",
//     output: "[1, 3, 12, 0, 0]"
// This code defines a function `moveZeroes` that takes an array of numbers as input.
// It moves all zeroes in the array to the end while maintaining the order of non-zero elements.
// The function uses a two-pointer technique to achieve this efficiently.
// The function iterates through the array, keeping track of the last non-zero index.
// It fills non-zero elements at the front and then fills the remaining positions with zeros.

// Explanation:
// The function iterates through the array, moving all non-zero elements to the front
// and filling the rest of the array with zeros. The final output is [1, 3, 12, 0, 0].
// This approach runs in O(n) time complexity and uses O(1) extra space.
// The function modifies the input array in place.
// This is efficient for large arrays and meets the problem's requirements.
// The function works by maintaining an index for the last non-zero element found
// and shifting non-zero elements to the front while filling the rest with zeros.
// This solution is optimal for the problem of moving zeros in an array.
// The function is designed to handle arrays of any size and will efficiently
// move all zeros to the end while keeping the order of non-zero elements intact.

explain("Move Zeroes", "Given an array, move all zeroes to the end while maintaining the order of non-zero elements.", "Easy", ["Array", "Two Pointers"], "javascript", moveZeroes.toString(), { input: "[0, 1, 0, 3, 12]", output: "[1, 3, 12, 0, 0]" });
function explain(name, description, difficulty, tags, language, codeSnippet, example) {
    console.log(`Pattern name: ${name}`);
    console.log(`Description: ${description}`);
    console.log(`Difficulty: ${difficulty}`);
    console.log(`Tags: ${tags.join(", ")}`);
    console.log(`Language: ${language}`);
    console.log(`Code Snippet:\n${codeSnippet}`);
    console.log(`Example Input: ${example.input}`);
    console.log(`Example Output: ${example.output}`);
}