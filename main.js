// 1. Var / Let, Const: Scope, Hosting
//Scope
/*
var course= 'Javascript';
{
    console.log(course);
}

{
    {
        var course= 'Javascript';
    }
    console.log(course);
}

{
    const course= 'Javascript';
    {
        const course= 123;
        console.log(course);
    }
}
*/
//Hosting
//Var được hỗ trợ hosting, Let và Const thì ko
/*
a = 1;
var a;
console.log(a);

b = 1;
let b; //Lỗi
console.log(b);
*/
//2. Const / Var, Let: Assignment
/*
let a = 1;
a = 100;
console.log(a);

const b = 1;
b=100; //Lỗi ko thể gán lần 2
console.log(b);
*/

//Code thuàn: Var
//Babel: Let, Const 
//Khi định nghĩa biến và không gán lại biến đó: const
//Khi cần gán lại giá trị cho biến: let

//2. Arrow function
/*
const Course= function (name, price) { //Không thể dùng arrow function để định nghĩa constructor
    this.name= name;
    this.price=price;
}

const jsCourse= new Course('Javascript','100');

console.log(jsCourse);

const course= {
    name: 'Javascript!',
    price: '100',
    getName: function () { //arrow function không có context
        return this; //context
    }
};

console.log(course.getName());
*/

//3. Template literals, Multi-line string
/*
const courseName= 'Javascript';
const price= '100';
const description= `Course name: ${courseName}; Course price: ${price}`;

const lines= `Line 1 \nLine 2\nLine 3`;
const mlstring=`Line 1
Line 2
Line 3`;

console.log(description);
*/

//4. Classes
/*
function Course(name,price){
    this.name= name;
    this.price=price;
}

class Course{
    constructor(name,price){
        this.name= name;
        this.price=price;
    }
}

const phpCourse= new Course('PHP', 1000);
const jsCourse= new Course('JS', 2000);

console.log(phpCourse);
console, console.log(jsCourse);
*/

//6. Enhanced object literals
// Định nghĩa key-value cho object
// Định nghĩa method cho object
// Định nghĩa key cho object dưới dạng biến

/*

var name= 'Javascript';
var price= 1000;

var course= {
    name,
    price,
    getName(){
        return this.name;
    }
};

console.log(course.getName());

var fieldName='name';
var fieldPrice='price';

const courseobj={
    [fieldName]: 'Javascript',
    [fieldPrice]: 1000
};

console.log(courseobj);

*/

// 7. Default parameter values
/*
 function logger(log){
    if (typeof log === 'undefined'){
        log='Default value';
    }
    console.log(log);
 }
 
 logger();

 function anotherLogger(log='Default value'){
    console.log(log);
 }

 anotherLogger('Javascript');
 */

 // 8. Destructuring, Rest parameters, Spread

 //Destructuring, rest parameters
 /*
 var array= ['Javascript', 'PHP', 'Ruby']

 var [a,b,...rest]= array;

 console.log(a,b);
 console.log(rest);

 var course={
    name: 'Javascript',
    price: '1000',
    date: 'April 19th',
    child: {
        name: 'ReactJs'
    }
 }  
 var {name, price, date}= course;

 console.log(`Course name: ${name}; Course price: ${price}; Course date: ${date}`);

 var {name: parentName, child: {name: childName}}= course;

 console.log(childName); 



function anotherLogger(a, ...params){ // params ko chứa phần tứ thứ nhất 
    console.log(params);
}

anotherLogger(1,2,3,4,5,6,7,8); 

function logger1({name, price, ...rest}){
    console.log(name);
    console.log(price);
    console.log(rest);
}

logger1({
    name: 'Javascript',
    price: 1000,
    description: 'Description content'
});
*/

//Spread
/*
var array1= ['Javascript','Ruby','PHP'];

var array2= ['ReactJS','Dart'];

var array3=[...array2, ...array1];

console.log(array3);

var obj1= {
    name: 'Javascript'
};

var obj2= {
    price: 1000
};

var obj3= {
    ...obj1,
    ...obj2
};

console.log(obj3);

var array= ['HTML','CSS','JavaScript'];

function logger(a,b,c){
    console.log(a,b,c);
}
 
logger(...array);

*/

// 9. Tagged template literals
/*
function hightlight([first, ...strings],...values){
    return values.reduce((acc, cur) => [...acc, `<b>${cur}</b>`, strings.shift()],
    [first]
    ).join('');

}

var course= 'Javascript';
var brand= 'Codecademy';

const html= hightlight`Học lập trình ${course} tại ${brand}!`;

console.log(html);

const intro= document.getElementById('intro');
intro.innerHTML= html;
*/

// 10. Modules: import / export
/*
import logger from './logger.js';
import * as constants  from './constants.js';

logger('Nevermind', constants.TYPE_WARN);

*/

//11. Optional chaining (?.)

const obj={
    name: 'Alice',
    cat: {
        name: 'Dinah',
        cat2: {
            name: 'Dinah 2',
            cat3: {
                name: 'Dinah 3'
            }
        }    
    }
};

if (obj.cat.cat2.cat3?.name){
    console.log(obj.cat.cat2.cat3.name);
}

const obj2 = {
    getName(value){
        console.log(value);
    }
}

obj2.getName?.('Alice');