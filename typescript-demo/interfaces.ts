interface LabelValue{
    label: string,
    optionalVal?: number
}

function printLabel(labelObj: LabelValue) {
    console.log(labelObj.label);
    //labelObj.optionalValue; property not exists error
}
printLabel({ label: "SampleText" })

//readonly properties
interface Point{
    readonly x: number,
    readonly y: number
}
let p: Point = { x: 20, y: 100 }
//p.x = 30; cannot assign error as x is readonly property or constant

let a: number[] = [12, 45]
let b: ReadonlyArray<number> = [30, 40]
//b[0] = 34; //error only readonly permitted
//a = b; //it will give error.
a = b as number[]; //assign as 
console.log(b, b.length, a)

//readonly vs const
//use readonly for properties and const for variables

interface SquareConfig{
    width?: number,
    height?: number,
    [propName: string]: any
}
function createSquare(config: SquareConfig): { color: string; area: number } {
    // body
    return { color: 'green', area: 222 }
}
createSquare({ width: 20, colorName: 'blue' } as SquareConfig)

interface SearchFunc{
    (source: string, subStr: string): boolean
}
let mySearch: SearchFunc
mySearch = function (source: string, subStr: string) {
    //code here
    return true
}

//indexable types
interface StringArray{
    [index: number]: string//array index will be number and has string values
}
let myArray: StringArray = ['string1', 'sample']
interface NameDictionary{
    [index: string]: number,
    length: number,
    //name: string //error, it should be number
}

interface ReadOnlyStringArray{
    readonly [index: number]: string
}
let myArr2: ReadOnlyStringArray = ["st", "word"]
//myArr2[1] = 'sdsds'; //error readonly permits reading

//Class Types
interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface
}
interface ClockInterface {
    tick();
}
function createClock(ctor: ClockConstructor,
    hour: number,
    minute: number): ClockInterface {
    return new ctor(hour, minute);
}

class AnalogClock implements ClockInterface {
    constructor(hour: number, minute: number){ }
    tick() {
        console.log('tick tock');
    }
}
class DigitalClock implements ClockInterface {
    constructor(hour: number, minute: number) { }
    tick() {
        console.log('beep beep')
    }
}
let digital = createClock(DigitalClock, 12, 35);
let analog = createClock(AnalogClock, 12, 35);

//extending interface
interface Shape {
    color: string
}
interface PenStroke {
    penWidth: number
}
interface Square extends Shape, PenStroke {
    sideLength: number
}
let square = <Square>{};
square.sideLength = 12
square.color = 'green'
square.penWidth = 4



//Hybrid types
interface Counter {
    (start: number): string,
    interval: number,
    reset(): void
}
function getCounter(): Counter{
    let counter = <Counter>function (start: number) { }
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
let c = getCounter();
c(10);
c.reset();
c.interval = 10;

//interface extending classes
class Control{
    private state: any;
}
interface SelectableControl extends Control {
    select(): void;
}
//you need to implement state and select in classes-
//that are not subclass of Control and implements SelectableControl

