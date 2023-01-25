function letterCombinations(input_digit) {
  //Complete the function
	const letterCombinations = (digits) => {
    if (digits.length === 0) return [];
    let mapping = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };
    let result = [''];
    for (let i = 0; i < digits.length; i++) {
        let letters = mapping[digits[i]];
        let temp = [];
        for (let j = 0; j < letters.length; j++) {
            for (let k = 0; k < result.length; k++) {
                temp.push(result[k] + letters[j]);
            }
        }
        result = temp;
    }
    return result;
};

}

module.exports = letterCombinations;
