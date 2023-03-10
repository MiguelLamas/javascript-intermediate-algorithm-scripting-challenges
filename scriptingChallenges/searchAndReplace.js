/* CHALLENGE - Search and Replace

- Perform a search and replace on the sentence using the arguments provided and return the new sentence.
- First argument is the sentence to perform the search and replace on.
- Second argument is the word that you will be replacing (before).
- Third argument is what you will be replacing the second argument with (after).

Note: Preserve the case of the first character in the original word when you are replacing it. 
For example if you mean to replace the word Book with the word dog, it should be replaced as Dog */

// 1. replace word in string 'before' with the word in 'after'
// 2. If the word 'before starts with an uppercase, then convert first letter in 'after' to uppercase.
// 3. Else make sure first letter of 'after' is lowercase too.

function myReplace(str, before, after) {
    if(before.match(/^[A-Z]/)){
      after = after.charAt(0).toUpperCase() + after.slice(1);
    } else {
      after = after.charAt(0).toLowerCase() + after.slice(1);
    }
  return str.replace(before, after);
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));