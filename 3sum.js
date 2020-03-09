var arr = [30, -40, -20, -10, 40, 0, 10, 5];
// How many tipple sum = 0;

function sum() {
    let count = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            for (var k = j + 1; k < arr.length; k++) {
                if ((arr[i] + arr[j] + arr[k]) === 0) {
                console.log(`i=${arr[i]} && j=${arr[j]} && k=${arr[k]}`)
                    count++;
                }
            }
        }
    }
    console.log('total count ', count);
}
sum();