export function add(numbers) {
    if (!numbers) return 0; // Handle empty input
    let delimiter = /,|\n/; // Default delimiters: comma (`,`) and newline (`\n`)

    if (numbers.startsWith("//")) {
        console.log('//')
        const parts = numbers.split("\n");
        delimiter = new RegExp(parts[0].slice(2)); // Extract custom delimiter
        c
        numbers = parts.slice(1).join("\n"); // Remove the first line containing the delimiter
    }

    // Ensure proper splitting and number conversion
    const nums = numbers
        .split(delimiter) // Split using correct delimiters
        .map(num => num.trim()) // Trim spaces
        .filter(num => num !== "") // Remove empty entries
        .map(num => parseInt(num, 10)); // Convert to number

    if (nums.some(isNaN)) return 0; // Prevent NaN issues

    // Check for negative numbers
    const negatives = nums.filter(n => n < 0);
    if (negatives.length) {
        throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
    }

    return nums.reduce((sum, num) => sum + num, 0);
}
