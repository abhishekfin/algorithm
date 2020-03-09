var arr = [6, 13, 14, 25, 33, 43, 51, 53, 64, 72, 84, 93, 95, 96, 97];


const binarySearch1 = ((val) => {
    function search(arr2) {
        let index = Math.floor(arr2.length / 2);
        console.log('arr', index)
        if ((index == 0 || arr2[index].length <= 1) && arr2[index] != val) {
            return false
        }
        if (val > arr2[index]) {
            arr2 = arr2.slice(index, arr2.length);
        } else if (val < arr2[index]) {
            arr2 = arr2.slice(0, index);
        } else {
            return true;
        }
        return search(arr2)
    }
    return search(arr)

})


const binarySearch = ((val) => {
    var lo = 0;
    var hi = arr.length - 1;
    var mid = 0;
    while (lo <= hi) {
        mid = lo + ((hi - lo) / 2);
        if (val < arr[mid]) {
            hi = mid - 1;
        } else if (val > arr[mid]) {
            lo = mid + 1
        } else {
            return mid
        }
    }
    return -1;

})


console.log(`value found  94 ${binarySearch1(94)}`)
console.log(`value found  26 ${binarySearch1(26)}`)
console.log(`value found  53 ${binarySearch1(53)}`)
console.log(`value found  29 ${binarySearch1(29)}`)
console.log(`value found  6 ${binarySearch1(6)}`)
console.log(`value found  95 ${binarySearch1(95)}`)
console.log(`value found  101 ${binarySearch1(101)}`)

console.log(`value found1  95 ${binarySearch(95)}`)
console.log(`value found1  26 ${binarySearch(26)}`)
console.log(`value found1  53 ${binarySearch(53)}`)
console.log(`value found1  29 ${binarySearch(29)}`)
console.log(`value found1  6 ${binarySearch(6)}`)
console.log(`value found1  95 ${binarySearch(95)}`)
console.log(`value found1  101 ${binarySearch(101)}`)