/*
Steamroller
Flatten a nested array. You must account for varying levels of nesting.
*/

function steamrollArray(arr) {
    if (!Array.isArray(arr)) {
      return [arr];
    }
    var out = [];
    arr.forEach(function(e) {
      steamrollArray(e).forEach(function(v) {
        out.push(v);
      });
    });
    return out;
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);