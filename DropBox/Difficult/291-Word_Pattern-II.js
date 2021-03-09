// BACKTRACKING: a general algorithm for finding all (or some) solutions to some computational problems.
//The idea is that it incrementally builds candidates to the solutions, and abandons a candidate ("backtrack")
//as soon as it determines that this candidate cannot lead to a final solution.

// Check every combo of str
var wordPatternMatch = function (pattern, str) {
  let pattern_map = {};
  let str_map = {};

  const _backtrack = function (start, remain_string) {
    // Got to end
    if (start == pattern.length && remain_string == "") {
      return true;
    }

    if (pattern_map[pattern[start]]) {
      if (!remain_string.startsWith(pattern_map[pattern[start]])) {
        return false;
      }
      return _backtrack(
        start + 1,
        remain_string.substring(pattern_map[pattern[start]].length)
      );
    }

    for (
      let i = 1;
      i <= remain_string.length - (pattern.length - start - 1);
      i++
    ) {
      let match_string = remain_string.substring(0, i);

      if (
        str_map[match_string] != undefined &&
        str_map[match_string] != pattern[start]
      ) {
        continue;
      }

      pattern_map[pattern[start]] = match_string;
      str_map[match_string] = pattern[start];
      if (_backtrack(start + 1, remain_string.substring(i))) {
        return true;
      }
      delete pattern_map[pattern[start]];
      delete str_map[match_string];
    }
    return false;
  };

  return _backtrack(0, str);
};
