
// let scope is inside curly braces
function scopeExample() {
    for (var i = 0; i < 10; i++){
        let j = i;
        setTimeout(function () { console.log(i + '-' + j) }, 1000)
        //will console log 10-1, 10-2, 10-3, 10-4, 10-5,
        //10-6, 10-7, 10-8, 10-9, 10-10
    }
}
scopeExample();

const num: number = 1000
//num = 40 // will give error

//destructing- explode object into variables
let input: number[] = [12, 45]
let [first, second] = input
console.log(first, second, ...input)
//above is same as, onsole.log.apply(console, [first, second].concat(input));

first = input[0];
[first, second] = [second, first]
console.log('swapped', first, second)

function f([first, second]: [number, number]) {
    console.log('first', first, 'second', second)
}
f([20, 34])
let [firstN, ...rest] = [12, 13, 14, 15]
console.log(rest) //reset = [13, 14, 15]
let [, ,third, , fifth] = [1, 2, 3, 4, 5]
console.log(third, fifth);

let o = {
    a: 'foo',
    b: 20,
    c: 'bar',
    d: 24.65
}
let {a, b } = o //same as var a = o.a, b = o.b;
let {c, ...restObj } = o //restObj will contain everything except key c
let { d: valD } = o //valD = o.d;
//valD is not datatype here.will read, d as valD
