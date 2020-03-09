var first = '';
// stack with link list
function push(val) {
    var k = {
        item: val,
        next: first
    }
    first = k;
}

function pop() {
    var k = first.next;
    var value = first.item;
    first = k;
    return value
}

function isEmpty() {
    return !!frist
}

console.log('1111111', first);
push(235);
push(245);
push(123);
push(123);
pop();
console.log('1111111', first);
console.log('22112', first.item);
console.log('222', first.next.next);
console.log('333', first.item.next);


// stack with array 
var arr = Array(10).fill(null);
var size = 0;

function resize(n) {
    arr.length = n;
}

function pushA(val) {
    arr[size++] = val;
    if (size == arr.length) {
        resize(2 * size);
    }

}

function popA() {
    var item1 = arr[--size]
    arr[size] = null;
    if (size == Math.floor(arr.length / 4)) {
        resize( Math.floor(arr.length / 2));
    }
    return item1;
}

pushA(1);
pushA(2);
pushA(3);
// pushA(4);
// pushA(2);
// pushA(3);
// pushA(2);
// pushA(3);
// pushA(2);
// pushA(3);
// pushA(4);
// pushA(4);
// pushA(4);
popA();
pushA(5);
pushA('6');
popA();
console.log('final ', arr);