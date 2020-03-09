function selectionSort(input) {
    for (var i = 0; i < input.length; i++) {
        var min = i;
        for (var j = i + 1; j < input.length; j++) {
            if (input[min] > input[j]) {
                min = j;
            }
        }
        input = exchange(i, min, input)
        console.log('ABC ', input);
    }
    return input;
    function exchange(a, b, input) {
        var arrray = input.split('');
        const temp = arrray[a];
        arrray[a] = arrray[b];
        arrray[b] = temp;
        return arrray.join('')
    }
}


console.log('SORTEXAMPLE selectionSort ', selectionSort('SORTEXAMPLE'));