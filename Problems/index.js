/* Q1
 * Determine if a string contains matching Braces, Brackets,
 * and Parentheses. Additionally all Braces, Brackets, and
 * Parentheses must be nested correctly for JavaScript code.
 * All other characters in the string can be ignored.
 *
 * input: String
 *
 * output: true if all opening Braces/Brackets/Parentheses
 *         have matching closing Braces/Brackets/Parentheses
 *         that are correctly nested else false.
 *
 * For Example
 * "{}" => true
 * "{()[{}[]]}" => true
 * "{(})" => false
 * "{()[}[]]}" => false
 * "if(a==b) x = y;" => true
 * "if(a==b x = y;" => false
 * "if(x<10}(b++;}else{b+=10;}" => false
 */

function braces(str) {
  function matched(opening, closing) {
    return (
      (opening === '(' && closing === ')') ||
      (opening === '{' && closing === '}') ||
      (opening === '[' && closing === ']')
    );
  }

  const openers = ['[', '{', '('];
  const closers = [']', '}', ')'];
  const stack = [];
  for (let i = 0; i < str.length; i += 1) {
    const openersIdx = openers.indexOf(str[i]);
    const closersIdx = closers.indexOf(str[i]);

    if (openersIdx >= 0) {
      stack.push(str[i]);
    } else if (closersIdx >= 0) {
      if (stack.length === 0 || !matched(stack.pop(), str[i])) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

/* Q2 (*)
 * input: string
 *
 * output: false if input contains no duplicate letters else
 *         the total count of the letter with the most
 *         duplicates.
 *
 * For Example:
 *     "abc" => false
 *     "aba" => 2
 *     "ababcb" => 3
 */

function duplicate(input) {
  const freqs = {};
  let maxFreq = 0;

  for (let i = 0; i < input.length; i += 1) {
    if (!Reflect.has(freqs, input[i])) freqs[input[i]] = 0;
    freqs[input[i]] += 1;
    maxFreq = Math.max(maxFreq, freqs[input[i]]);
  }

  return maxFreq <= 1 ? false : maxFreq;
}

/* Q3 (*)
 * Checks if a list ends with the provided sublist.
 *
 * Similarly, checks if a string ends with the provided substring.
 *
 *      doesEndWith('c', 'abc')                //=> true
 *      doesEndWith('b', 'abc')                //=> false
 *      doesEndWith(['c'], ['a', 'b', 'c'])    //=> true
 *      doesEndWith(['b'], ['a', 'b', 'c'])    //=> false
 * */
function doesEndWith(suffix, str) {
  const suffixArg = Array.isArray(suffix) ? suffix.join('') : suffix;
  const strArg = Array.isArray(str) ? str.join('') : str;

  return strArg.substr(strArg.length - suffixArg.length) === suffixArg;
}

/* Q4 (*)
 * Returns `true` if the given value is its type's empty value; `false`
 * otherwise.
 *
 *     isEmpty([1, 2, 3]);     //=> false
 *     isEmpty([]);            //=> true
 *     isEmpty('');            //=> true
 *     isEmpty(null);          //=> false
 *     isEmpty({});            //=> true
 *     isEmpty({ length: 0 }); //=> false
 */

function isEmpty(arg) {
  if (arg === null || arg === undefined) return false;
  if (Array.isArray(arg) || typeof arg === 'string') return arg.length === 0;
  if (typeof arg === 'object') return Object.keys(arg).length === 0;

  return false;
}

/* Q5
 * Given two strings, determine if they are isomorphic. Two strings are
 * isomorphic if they are the same length and you can replace all occurrences
 * of each letter in the first string with the same letter to create the
 * second string.
 *
 * For example,"egg" and "add" are isomorphic, replace all occurrence of
 * e with a and g with d. "paper" and "title" are also isomorphic.These
 * strings are not isomorphic: "foo" and "bar", "it" and "odd".
 */

function isomorphic([s1, s2]) {
  if (s1.length !== s2.length) return false;

  for (let i = 0; i < s1.length; i += 1) {
    if (s1[i] !== s2[i]) {
      for (let j = 0; j < s1.length; j += 1) {
        if (s1[j] === s1[i] && s2[j] !== s2[i]) {
          return false;
        }
      }
    }
  }

  return true;
}

module.exports = {
  braces,
  duplicate,
  doesEndWith,
  isEmpty,
  isomorphic,
};
