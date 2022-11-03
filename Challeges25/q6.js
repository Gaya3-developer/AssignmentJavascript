/* Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces. */
function getCountMatch(str) {
    let count = str.match(/[aeiou]/ig)||[].length;
    console.log("count is : "+ count);
  }
  function getCountForeach(input) {
    var vowelsCount = 0;
    var inputLetters = input.split("");
    
    const vowels = ["a","e","i","o","u"];
    
    vowels.forEach(function(vowel) {
      inputLetters.forEach(function(inpLetter) {
        if (inpLetter === vowel) {
          vowelsCount++;
        }
      });
    });
    
    console.log("count of vowels : "+vowelsCount);
  }
  const str="gayathri";
  getCountMatch(str);
  getCountForeach(str);