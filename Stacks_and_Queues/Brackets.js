// A string S consisting of N characters is considered to be properly nested if any of the following conditions is true:
//
// S is empty;
// S has the form "(U)" or "[U]" or "{U}" where U is a properly nested string;
// S has the form "VW" where V and W are properly nested strings.
// For example, the string "{[()()]}" is properly nested but "([)()]" is not.
//
// Write a function:
//
// function solution(S);
//
// that, given a string S consisting of N characters, returns 1 if S is properly nested and 0 otherwise.
//
// For example, given S = "{[()()]}", the function should return 1 and given S = "([)()]", the function should return 0, as explained above.
//
// Assume that:
//
// N is an integer within the range [0..200,000];
// string S consists only of the following characters: "(", "{", "[", "]", "}" and/or ")".
// Complexity:
//
// expected worst-case time complexity is O(N);
// expected worst-case space complexity is O(N) (not counting the storage required for input arguments).


function solution(S) {
    S = S.split('');
    var stack = [];
    var right_brackets = ["}", "]", ")"];
    var brackets = {
        "{": right_brackets[0],
        "[": right_brackets[1],
        "(": right_brackets[2]
    };
    if (right_brackets.indexOf(S[0]) !== -1) {
        return 0;
    }

    for (var i = 0; i < S.length; i++) {
        if (brackets[stack[stack.length-1]] === S[i]) {
          stack.pop();
        } else {
            stack.push(S[i]);
        }
    }
    if (stack.length === 0) {
        return 1;
    }
    return 0;
}

console.log(solution("{[()()]}")); //1
console.log(solution("([)()]")); //0
