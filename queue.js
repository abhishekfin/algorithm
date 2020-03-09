var EX = {};
// proble in queue with link list
EX.node = function () {
    this.item = null;
    this.next = '';
}

EX.Queue = function (val) {
    var first = null;
    var last = null;
    this.enQueue = function (val) {
        var oldLast = last;
        var newNOde = new EX.node();
        newNOde.item = val;
        newNOde.next = null;
        if (this.isEmpty()) {
            first = newNOde;
            last = newNOde
        } else {
            last.next = newNOde;
        }
        console.log('last ', last);
    }
    this.deQueue = function () {
        var item = first.item;
        first = first.next;
        if (this.isEmpty()) {
            last = null;
        }
        return item;
    }
    this.isEmpty = function () {
        return first == null;
    }

}

var q = new EX.Queue();
q.enQueue(12);
q.enQueue(1211);
q.enQueue(22299);
q.enQueue(000);
console.log('ABC ', q.first);





// Queue with array 
var arr = Array(10).fill(null);
var tail = 0;
var head = 0;

function resize(n) {
    arr.length = n;
}

function queue(val) {
    arr[tail++] = val;
}

function deQueue() {
    tail--;;
    var item1 = arr[head]
    arr[head++] = null;
    return item1;
}

queue(1);
queue(2);
queue(3);

deQueue();
queue(5);
queue('6');
deQueue();
console.log('final ', arr);