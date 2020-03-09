function test1(arr) {
    var output = [];
    while (arr > 0) {
        output.push(arr % 2);
        arr = Math.floor(arr / 2);
    }
    var result = "";
    while (output.length > 0) {
        result += output.pop();
    }
    return result;
}
console.log('test1  ', test1(50));

function isArraySorted(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true
}

console.log('[1,2,3,4,5,6,7,8,9] isArraySorted ', isArraySorted([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log('[1,2,3,4,51,6,7,8,9] isArraySorted ', isArraySorted([1, 2, 3, 4, 51, 6, 7, 8, 9]));