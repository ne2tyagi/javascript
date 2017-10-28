let isDone: boolean = false
let decimal: number = 6
let hex: number = 0xfd34
let binary: number = 0b101010
let octal: number = 0o726

let color: string = "blue"
color = 'red'
let sentence: string = `color ${color} ${hex + 1}`

let list: number[] = [12, 14, 15]
let listGeneric: Array<number> = [24, 25, 56]

//Touple- array with values of multiple data types in order
let x: [string, number]
x = ['string1', 12, 13, 'ss', 'str', 222]
 
enum Color { Red, Green = 20, Blue }
let c: Color = Color.Red
console.log(Color.Blue) //will log 21

let notSure: any = 20
notSure = 'New string'
let list2: any[] = [12, 'hello', 44]

function warnUser(): void {
    alert('warning message')
}
let unstable: void = undefined //only undefined can be assigned to void type

let u: undefined = undefined //only undefined can be assigned
let n: null = null //only null can be assigned

//function returning must have unreachable endpoint
function err(message: string): never{
    throw new Error(message)
}

//Type assertions- consider value of type
let someValue: any = "This is string"
let strLen: number = (<string>someValue).length
let strLength: number = (someValue as string).length
