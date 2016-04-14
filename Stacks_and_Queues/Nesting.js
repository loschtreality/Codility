// A string S consisting of N characters is called properly nested if:
//
// S is empty;
// S has the form "(U)" where U is a properly nested string;
// S has the form "VW" where V and W are properly nested strings.
// For example, string "(()(())())" is properly nested but string "())" isn't.
//
// Write a function:
//
// function solution(S);
//
// that, given a string S consisting of N characters, returns 1 if string S is properly nested and 0 otherwise.
//
// For example, given S = "(()(())())", the function should return 1 and given S = "())", the function should return 0, as explained above.
//
// Assume that:
//
// N is an integer within the range [0..1,000,000];
// string S consists only of the characters "(" and/or ")".
// Complexity:
//
// expected worst-case time complexity is O(N);
// expected worst-case space complexity is O(1) (not counting the storage required for input arguments).


function solution(S) {
  var stack = [];

  if (S.length === 0) {
    return 1;
  }
  
  if (S.indexOf("(") === -1 || S.indexOf(")") === -1 || S[0] === ")") {
    return 0;
  }


  for (var i = 0; i < S.length; i++) {
    if (S[i] === "(") {
      stack.push(S[i]);
    }
    else if (S[i] === ")" && stack.length > 0) {
      stack.pop();
    }
    else if (S[i] === ")" && stack.length === 0) {
      return 0;
    }
  }


  return stack.length > 0 ? 0 : 1;
}

console.log(solution("(()(())())")); // 1
console.log(solution("(())(())())")); // 0
console.log(solution("())")); // 0
console.log(solution("(((((()")); // 0
console.log(solution("")); // 1
