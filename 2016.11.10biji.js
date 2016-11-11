/*var sayHello = function () {
    
    console.log('hello');
}

var execute = function (func) {
    func()
}

execute(sayHello); */

//==================函数可以当做参数传个其他函数
/*function A(funcB) {
    console.log('a');
    funcB();
}
function B() {
    console.log('b');
}

A(B);*/
//================
/*var arr = [3, 2, 5, 8, 9, 10, 11];

function one(a, b) {
    return a - b
}
arr.sort(one);
console.log(arr); */
//=======================

/*function c(func) {
    func();
}
c(function () {
    console.log('c');
});  */

/*function c(func) {
    var a = 1, b = 2, c = 2
    func(a, b, c);
}
c(function (a, b, c) {
    console.log(a + b + c);
}); */

//=============================
/*function doThing() {
    return function () {
        console.log('say hello');
    }
}
var something = doThing();
something(); */

//==========================
/*function calc(action) {
    switch (action) {
        case 'add':
            return function (a, b) {
                return a + b
            };
        case 'powe':
            return function (a, b) {
                return Math.pow(a, b);
            };

    }

}
var addFn = calc('add');
console.log(addFn(2, 3));
var powFn = calc('powe');
console.log(powFn(2, 3)); */
//====================================

/*var a = function () {

}
var add = function (a, b) {
    return a + b;
}
//tsc week/dany02/src/no-name-function.ts(编译)
var add = (a, b) => a + b;   //(上面简写) */
//========================================
/*var test = "abcdefgf";                    //删除最后一个f
var position = test.lastIndexOf('f');
console.log(position);  */

/*var test = "abcdefgf";                    //删除所有f
var position = test.replace(/f/g, '');
console.log(position); */

/*var test = "abcdefgf";               //输出大写
var position = test.toLocaleUpperCase();
console.log(position); */

/*var test1 = 'abcdefgf'                //第一个f的位置
var position = test1.indexOf('f');
//console.log(position);
var test1 = test1.slice(0, position);     //0起始 
console.log(test1); */
//====================================================
var peoples = [{ name: 'a', age: 23 }, { name: 'b', age: 13 }];
/*peoples.sort((a, b) => a.age - b.age);
console.log(peoples); */
/*peoples = peoples.filter(person => person.name == 'a')     //过滤名字b 
console.log(peoples); */

/*var results = peoples.every(people => peoples.age >= 18);    //每个人  some一些人
console.log(results); */

/*var week = new Date().getDate();    //时间用法
console.log(week);  */

var week = new Date()                  //年月日的用法
week.setFullYear(2010);
week.setMonth(4);
week.setDate(5);
console.log(week.toLocaleString());




