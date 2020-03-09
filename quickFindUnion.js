//   1. QUICK FIND
// it gives if two node are connected
var arr1 = [0, 1, 9, 9, 9, 6, 6, 7, 8, 9];
var arr = [0, 1, 2, 4, 4, 5, 6, 7, 8, 9]

function reset() {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = i;
  }
  for (var i = 0; i < sz.length; i++) {
    sz[i] = 1;
  }
}

function find(p, q) {
  if (arr[p] == arr[q]) {
    console.log(`${p} and ${q} are connected`)
  } else {
    console.log(`${p} and ${q} are not connected`)
  }
}
find(0, 1);
find(3, 4);
find(3, 8);
find(5, 9);
//  UNION. To merge components containing p and q,/ change all entries with id[p] to id[q].

function union(p, q) {
  const valueToReplace = arr[p];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == valueToReplace) {
      arr[i] = arr[q]
    }
  }
  console.log(`final array is ${arr}`)
}
union(3, 6);


// QUICK FIND UNION 

var arr21 = [0, 1, 9, 4, 9, 6, 6, 7, 8, 9];
arr = [0, 1, 2, 4, 4, 5, 6, 7, 8, 9]

function root(i) {
  while (i != arr[i]) {
    i = arr[i]
  }
  return i;
}

function findQ(p, q) {
  if (root(p) == root(q)) {
    console.log(`${p} and ${q} are connected`)
  } else {
    console.log(`${p} and ${q} are not connected`)
  }
}

function unionQ(p, q) {
  var i = root(p);
  var j = root(q);
  arr[i] = j;
}

//      Weighted quick-union

var sz = Array(arr.length).fill(1);

function unionWeighted(p, q) {
  var i = root(p);
  var j = root(q);
  if (sz[i] < sz[j]) {
    arr[i] = j
    sz[j] += sz[i];
  } else {
    arr[j] = i
    sz[i] += sz[j];

  }
}

function compressUnionWeighted(p, q) {
  var i = compressroot(p);
  var j = compressroot(q);
  if (sz[i] < sz[j]) {
    arr[i] = j
    sz[j] += sz[i];
  } else {
    arr[j] = i
    sz[i] += sz[j];

  }
}



function compressroot(i) {
  while (i != arr[i]) {
    arr[i] = arr[arr[i]]
    i = arr[i];
  }
  return i;
}


console.log(`root of 3 is ${root(3)}`)
console.log(`root of 2 is ${root(2)}`)
console.log(`root of 6 is ${root(6)}`)
console.log(`root of 1 is ${root(1)}`)

findQ(1, 2)
findQ(3, 4)
findQ(4, 9)
findQ(0, 1)

unionQ(3, 4);
unionQ(4, 9);
unionQ(8, 0);
unionQ(2, 3);
unionQ(5, 6);
console.log(`after union ${arr}`)

reset();
console.log(`befire unionWeighted ${arr}`)
unionWeighted(3, 4)
unionWeighted(4, 9)
unionWeighted(8, 0)
unionWeighted(2, 3)
unionWeighted(5, 6)
unionWeighted(5, 9)
unionWeighted(7, 3)
unionWeighted(4, 8)
unionWeighted(6, 1)
console.log("size ", sz)
console.log(`after unionWeighted ${arr}`)

reset();
console.log(`befire compressUnionWeighted unionWeighted ${arr}`)
compressUnionWeighted(3, 4)
compressUnionWeighted(4, 9)
compressUnionWeighted(8, 0)
compressUnionWeighted(2, 3)
compressUnionWeighted(5, 6)
compressUnionWeighted(5, 9)
compressUnionWeighted(7, 3)
compressUnionWeighted(4, 8)
compressUnionWeighted(6, 1)
console.log("size ", sz)
console.log(`after compressUnionWeighted unionWeighted ${arr}`)