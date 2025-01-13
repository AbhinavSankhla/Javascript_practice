// nullish coalescing operator (??), also known as "null short" in JavaScript. This operator is used to provide a default value when a variable is null or undefined.

// User profile data
const userProfile = {
    username: null,  // Explicitly set to null (not provided by the user)
    age: undefined,  // Not set (e.g., user skipped entering age)
    email: "user@example.com" // Email is provided
};

// Using nullish coalescing operator to provide defaults
const username = userProfile.username ?? "Guest"; // Default: "Guest"
const age = userProfile.age ?? "Not Specified";   // Default: "Not Specified"
const email = userProfile.email ?? "No Email Provided"; // Email is provided

// Output the final profile
console.log(`Username: ${username}`); // Output: Username: Guest
console.log(`Age: ${age}`);           // Output: Age: Not Specified
console.log(`Email: ${email}`);       // Output: Email: user@example.com


// why use ?? instead of ||

const input = 0;
console.log(input ?? 10); // Output: 0 (because 0 is not null/undefined)
console.log(input || 10); // Output: 10 (because 0 is falsy in `||`)

// ?? returns 0 because it’s not null or undefined.
// || returns 10 because 0 is treated as falsy.