/*
Find the Longest Word in a String
Return the length of the longest word in the provided sentence.

Your response should be a number.*/
function findLongestWordLength(str) {
    return str.split(' ').sort((a, b) => b.length - a.length)[0].length;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");