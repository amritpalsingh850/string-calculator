export function add(numbers) {
    if (!numbers) return 0; // Step 1: Handle empty string
  
    let delimiter = /,|\n/; // Default delimiters: comma and newline
    if (numbers.startsWith("//")) {
      const parts = numbers.split("\n");
      delimiter = new RegExp(parts[0].slice(2)); // Custom delimiter
      numbers = parts[1];
    }
  
    return nums.reduce((sum, num) => sum + num, 0);
  }
  