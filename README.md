## 🧩 Pattern: Two Pointers (Move Zeroes)

**Problem:**  
Given an array, move all **zeroes** to the **end** while maintaining the **order of non-zero** elements.

---

### ✅ Pattern Details

- **Name:** Move Zeroes  
- **Difficulty:** Easy  
- **Tags:** `Array`, `Two Pointers`  
- **Language:** JavaScript  

---

### 🧠 Approach

- Use a **two-pointer** technique:
  - One pointer (`i`) scans through the array.
  - Another pointer (`lastNonZeroIndex`) tracks the position to place the next non-zero.
- After moving all non-zero elements to the front, fill the rest of the array with zeroes.

---

### 📎 Code Snippet (JavaScript)

#### 🔸 Method 1: Overwrite Non-Zero Elements

```js
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
