/* eslint-disable @typescript-eslint/no-array-constructor */
/* eslint-disable @typescript-eslint/no-unused-vars */
const age = 5;
const firstName = "Gabriel";
const isValid = true;
let idk: any = 5;

idk = "Something";
idk = true;

const ids: number[] = [1, 2, 3, 4, 5];
const booleans: boolean[] = [true, false, true];
const names: string[] = ["Gabriel", "Felipe", "Lucas"];


// Tuple
const data: [number, string, boolean] = [1, "Gabriel", true];
// let data: [number, string, boolean] = ["Gabriel", true, 1];

// Tuple List
const employee: [number, string][] = [
  [1, "Gabriel"],
  [2, "Felipe"],
  [3, "Lucas"],
];

// Intersections
const productId: string | number | boolean = true;

// Enum
enum Direction{
    Up = 1,
    Down = 2,
    Left = 'Esquerda',
    Right = 'Direita'
}
const direction = Direction.Up;

// Type Assertions
const productName: any = "Gabriel";
// eslint-disable-next-line prefer-const
let itemId = (productName as string).toUpperCase();
const productName3 = (<string>productName).toUpperCase();

// Functions
const sum = (x: number, y: number): number | string => {
    return (x + y).toString();
}
const value = sum(5, 10);

const log = (message: string | number): void => {
    console.log(message);
}
log("Hello, World!");
log(42);

interface MathFun {
    (x: number, y: number): number;
}

const sum2: MathFun = (x: number, y: number): number => {
    return x + y;
}

const sub: MathFun = (x: number, y: number): number => {
    return x - y;
}

// Objects
type Order = {
    productId: string;
    price: number;
};

type User = {
    firstName: string;
    age: number;
    email: string;
    password?: string;
    orders: Order[];
    register?(): string;
};

const user: User = {
    firstName: "Gabriel",
    age: 25,
    email: "gabriel@gmail.com",
    orders: [
        { productId: "1", price: 100 },
        { productId: "2", price: 200 },
    ],
    register(){
        return `${this.firstName} is registered`;
    }
}

const printLog = (message?: string) => { // The "?" indicates that the parameter is optional, meaning it can be undefined.
    if (message) {
        console.log(message);
    } else {
        console.log("No message provided");    
    }
}

printLog(user.password);
//printLog(user.password!); "!" is used to tell TypeScript that the value is not null or undefined, but it can lead to runtime errors if the value is actually null or undefined.

// Unions
type Author ={
    books: string[];
}

const authors: Author & User = {
    age: 36,
    books: ["Book 1", "Book 2"],
    email: "author.gmail.com",
    firstName: "Rafael",
    orders: [],
}

// Interfaces
interface UserInterface{
    readonly firstName: string; // "readonly" indicates that the property cannot be modified after initialization.
    email: string;
    login?(): string;
}

const emailUser: UserInterface = {
    email: "user@gmail.com",
    firstName: "Gabriel",
    login(){
        return `${this.firstName} is logged in`;
    }
}

//emailUser.firstName = "Felipe"; // This will cause an error because firstName is readonly.

interface AuthorInterface{
    books: string[];
}

const newAuthor: UserInterface & AuthorInterface = {
    firstName: "Rafael",
    email: "rafael@gmail.com",
    books: ["Book 1", "Book 2"],
    login(){
        return `${this.firstName} is logged in`;
    }
}

// interface Grade = number | string; // This is incorrect syntax. You cannot use "interface" to define a union type. Use "type" instead.
type Grade = number | string;
const grade: Grade = 8;

// Classes
interface IPerson{
    id: number;
    firstName: string;
    age: number;
    sayMyName(): string;
}

class Person implements IPerson{
    /*private*/ readonly id: number;
    /*protected*/ firstName: string;
    /*public*/ /*private*/ age: number;

    constructor(id: number, firstName: string, age: number) {
        this.id = id;
        this.firstName = firstName;
        this.age = age;
    }

    sayMyName(): string {
        return this.firstName;
    }
}

// Same as above but with a more concise syntax using parameter properties in the constructor.
class PersonRefact{
    constructor(
        private readonly id: number, 
        protected firstName: string, 
        private age: number) {}
}

const person = new Person(1, "Gabriel", 25);
// person.id = 2; // This will cause an error because id is readonly.
// console.log(person.firstName); // This will cause an error because firstName is protected and cannot be accessed outside the class or its subclasses.

class Employee extends Person{
    constructor(id: number, firstName: string, age: number) {
        super(id, firstName, age);
    }

    whoAmI(): string {
        return this.firstName; // This is valid because firstName is protected and can be accessed in subclasses.
    }
}

const employee1 = new Employee(2, "Felipe", 30);

// Generics
const getArray = <T>(items: T[]): T[] => {
    return new Array().concat(items);
}

const messages = getArray<string>(["Hello", "World"]);
console.log(messages);

const count = getArray<number>([1, 2, 3, 4, 5]);
console.log(count);

class GenericNumber<T>{
    zeroValue: T;
    sum: (x: T, y: T) => T;

    constructor(zeroValue: T, sum: (x: T, y: T) => T) {
        this.zeroValue = zeroValue;
        this.sum = sum;
    }
}

const myGenericNumber = new GenericNumber<number>(0, (x, y) => {
    return x+y;
});

// Promises
const fetchData = async (): Promise<string> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully");
        }, 2000);
    });
}