"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateClass = void 0;
function greeter(person) {
    return "Hello, " + person;
}
let user = "Jane User";
const helloStr = '类型检验';
class Site {
    name() {
    }
}
var obj = new Site();
obj.name();
//元祖类型,数组类型可以不一样，但是对应类型必须一样
let yuanzuArr;
yuanzuArr = ['huang', 1];
let numArr;
numArr = [1, 2, 3];
//任意类型 Any类型，当不知道数据类型，可以定义Any
//在js中null和underfined可以赋值给任意类型的值，但是在ts中启用严格的空校验，null和underfined只能赋值给void和本身对应类型
//never类型是其他类型的子类型，代表从不会出现的值，在函数中通常表现为抛出异常或无法执行到终点
//联合类型
// 一个数据声明，使用两个类型定义
var lotType;
//类型断言
// 手动指定一个值的类型，允许变量从一种类型更改为另一种类型
// <类型>值    或者     值 as 类型
var str1 = '1';
var str2 = str1;
//作用域，全局，类，局部
var All_num = 12; //全局
class Numbers {
    constructor() {
        this.num_val = 13; //实例
    }
    storeNum() {
        var local_num = 14; // 局部
    }
}
Numbers.sval = 10; //静态
var Classobj = new Numbers();
var rO = {
    name: 'huanglin',
    password: [1, 2, 3, 4]
};
let ro = [1, 2, 3, 4];
ro = [2, 3, 4]; //不能修改单个索引数据，不能push等，但是直接替换没报错
//console.log(ro)
let a = [1, 2, 3, 4];
// a = ro只读属性不能直接分配,但是可以用类型断言重写
a = ro;
var customer = {
    firstName: 'huang',
    sayHi: () => { return "Hi huanglin"; },
    12: 'huanglin'
};
var list2 = ["huang", "lin"];
var strArr = {
    'name': 123
    // 123: 'huang'索引定义了类型
};
let mySearch;
mySearch = function (source, num) {
    return false;
};
var firendChild = {};
firendChild.firstName = 'huang';
// 命名空间，解决重名问题
// /// <reference path = "IShape.ts" /> 
// namespace Drawing { 
//     export class Circle implements IShape { 
//         public draw() { 
//             //console.log("Circle is drawn"); 
//         }  
//     }
// }
class Control {
}
//接口继承类类型时，会继承类的成员但不包括其实现，会继承类的private和protected成员，上面的接口SelectAbled是有select方法和state验证
class Button extends Control {
    select() { }
}
// class Image implements SelectAbled{
//     select(){}
// }
/**
 * 类定义+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++类定义
*/
class UserName {
    //new实例化这个类时候，传递的参数，要这个构造函数获取
    //在构造函数加参数，把定义和传参合并
    constructor(name, num) {
        this.num = num;
        this.name = name;
    }
    //存取器getter/setter来截取对对象成员的访问
    //存取器要求你将编译器设置为输出ES5或更高（tsc -t es5 index.ts），
    //只带有get不带有set的存取器自动被推断为readonly,
    //存取器是为了防止数据直接被访问，在访问或者设置前加一些判断
    get fullname() {
        return this._fullname;
    }
    set fullname(newName) {
        this._fullname = newName;
    }
    //private不能在他的类外部访问
    getName() {
        return "我的名字是" + this.name;
    }
    //protected不能在类外部访问，但是可以在子类中访问,构造函数也可以设置protected，就不能实例化，但是可以继承
    getNewName() {
        return "我的_fullname是" + this._fullname;
    }
    getNum() {
        return this.num;
    }
}
//其他是类被实例化的时候才会被初始化的属性，但是staic静态成员，存在于类本身上，访问时候可以直接类名访问
UserName.origin = { x: 0, y: 0 };
// //console.log(UserName.origin);
// 使用继承扩展类
class RootName extends UserName {
    constructor(name, num) {
        super(name, num);
    }
    //继承之后可以使用基类的数据
    setName(name) {
        this.name = name;
        //console.log(super.getNewName());
        //console.log(super.getNum())
    }
}
const setName = new RootName("xulinlin", 13);
setName.fullname = "存取器设置";
setName.getNum();
//抽象类作为派生类的基类，通常不会直接实例化，且内部的抽象方法不包含具体实现，必须在派生类中实现
class Department {
    constructor() {
    }
}
class abstractFun extends Department {
    printMeet() {
        //console.log('抽象方法实现')
    }
}
let absFun = new abstractFun();
absFun.printMeet();
// 类当做接口使用
class interClass {
}
let data = {
    x: 1,
    y: 2
};
// 类定义============================================================================================================================================================类定义
/**
 * 函数定义++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++函数定义
*/
function run(name, age) {
    //定义返回值类型,没加？的参数是必传的
    //形参加问号，调用时候就可传可不传,可选参数必须放最后面
    // 调用实参
    if (age) {
        //console.log(`${name}+${age}`)
    }
    else {
        //console.log(`${name}`)
    }
    return 'run';
}
// run('必须传递')
var run2 = function (name, age = 20) {
    //默认参数，调用这个方法的时候，就可以不传,默认参数可以放前面，但是调用传值时候，不传值必须明确传入undefined
    return age;
};
// //console.log(run2('huanglin'))
//void用于定义没有返回值的方法
function nullReturn() {
    //console.log('null return')
}
// 剩余参数,不知道还有多少参数时候，可以在后面用...定义，会被编译成数组
function run3(a, ...result) {
    //形参可以前面放一两个参数，也可以不放
    for (let i = 0; i < result.length; i++) {
        //console.log(result[i])
    }
    return 1;
}
let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: [1, 2, 3, 4],
    createCardPicker: function () {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);
            return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();
class Handler {
    onClickGood(e) {
        //console.log('clicked!');
    }
    ;
}
let h = new Handler();
function getInfo(str) {
    if (typeof str == 'string') {
        return '名称' + str;
    }
    else {
        return '年龄' + str;
    }
}
getInfo('123');
/**
 * 函数定义=============================================================================================================================================函数定义
*/
/**
 * 泛型+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++泛型
*/
// 无法创建泛型枚举和泛型命名空间
//定义一个可以传任何类型的函数，且让参数和返回值类型相同，如果使用any，是不可控的，使用泛型可以控制
function identity(arg) {
    return arg;
}
//定义泛型的函数，处理的时候就得当他是任意类型的，比如获取他的length就不行，如果是数字，没有length
identity('huanglin');
//也可以不写<>中类型，直接传参数，编译器根据传入参数自动帮助我们确定T的类型
identity('huanglin');
//泛型类
class IdentityClass {
}
let identClass = new IdentityClass();
function loggingIdentity(arg) {
    //console.log(arg.length);  // Now we know it has a .length property, so no more error
    return arg;
}
//这个时候的泛型函数，传入的参数就会被限制了，不能传入数字等没有length的
// loggingIdentity({length: 1})
//在泛型约束中使用类型参数       ??????
// interface T {
//     K: string
// }
// function getProperty(obj: T, key: K) {
//     return obj[key];
// }
// let x = { a: 1, b: 2, c: 3, d: 4 };
// getProperty(x, "a"); // okay
// getProperty(x, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.
// 在泛型里使用类类型     ?????
/**
 * 泛型=================================================================================================================================================================泛型
*/
/**
 * 枚举+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++枚举
*/
//枚举，没有赋值，第一个默认是0，后面递增加一
var EnumData;
(function (EnumData) {
    EnumData[EnumData["X"] = 0] = "X";
    EnumData[EnumData["Y"] = 1] = "Y";
    EnumData[EnumData["Z"] = 2] = "Z";
})(EnumData || (EnumData = {}));
let x;
let y = { name: 'huang', pass: 12 };
x = y;
//兼容性检查y，用baseType,必须有name就检查通过
/**
 * 类型兼容====================================================================================
*/
/**
 * 高级类型++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
// 交叉类型,大多实在混入或其他不适合典型面向对象模型的地方使用
function extend(first, second) {
    let result = {};
    return result;
}
//联合类型,有些参数希望可以传number或者string，如果使用any，传入其他类型也不会报错，所以使用联合
function padLeft(name, padding) {
}
function getSmallPet() {
    // ...
    return;
}
// 方法是联合类型，那么只能访问他们共有的成员，比如layEggs
//用户自定义的保护类型，这个方法就可以用来判断类型是否是fish，
function isFish(pet) {
    return pet.swim !== undefined;
}
//类型断言，判断数据类型
function isNumber(x) {
    return typeof x === 'number';
}
// 未完成，类型别名？？？？、
/**
 * 高级类型=======================================================================================
*/
/**
 * 迭代器和生成器++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
//当一个对象实现了symbol.iterator属性时，我们认为他是可迭代的
// 内置的Arrar，map，set，String等已经实现
// for  in遍历对象的键，for of遍历对象的值
// 当生成的js代码是ES5或ES3，for of只支持Array
/**
 * 迭代器和生成器=================================================================================
*/
/**
 * 模块++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
class CreateClass {
    constructor() {
        this.name = '123';
    }
}
exports.CreateClass = CreateClass;
// 编译时候要加上Require.js是--module amd或者Node.js是--module commonjs
//在 .d.ts文件加declare定义模块，
// <reference path="index.d.ts"/>
const URL = require("url");
let url = URL.parse('huanglin');
console.log(url);
const extend_1 = require("./extend");
class ChildSearch extends extend_1.default {
    constructor() {
        super();
    }
    Search() {
        console.log('测试导入的继承2');
    }
}
let search = new ChildSearch();
search.Search();
//编译时采用tsc --target es6 --module commonjs index.ts index.d.ts ,将两个ts编译到一个js，commonjs可以使用node
/**
 * 模块==========================================================================================
*/
// 静态属性和方法
// es5中
// function jintai(){}
// jintai.run = function(){}
// 使用时候可以直接jintai.run()
class JtPerson {
    constructor(name) {
        this.name = name;
    }
    run() {
        //console.log('实例方法')
    }
    //静态方法不能直接调用类里面的属性，需要定义静态属性
    static print() {
        //console.log('静态方法' + JtPerson.age)
    }
}
JtPerson.age = 12;
// 实例方法调用
let Jp = new JtPerson('huang');
Jp.run();
// 静态方法调用
JtPerson.print();
// 多态：父类定义一个方法不去实现，让继承他的子类去实现，每一个子类有不同的实现
//多态继承
class Animai {
    constructor(name) {
        this.name = name;
    }
    eat() {
        //console.log('多态方法')
    }
}
class Dog extends Animai {
    constructor(name) {
        super(name);
    }
    eat() {
        return this.name + '吃死';
    }
}
class Cat extends Animai {
    constructor(name) {
        super(name);
    }
    eat() {
        return this.name + '吃老鼠';
    }
}
//抽象:abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
//abstract抽象方法只能放在抽象类里面
//抽象类和抽象方法用来定义标准，animal这个类要求子类必须包含eat方法
class animal {
    constructor(name) {
        this.name = name;
    }
}
//var a = new animal() /*错误的写法，不能直接实例化*/
class animalChild extends animal {
    constructor(name) {
        super(name);
    }
    eat() {
        //console.log('继承抽象类。必须实现这个方法')
    }
}
function printName(name) {
    //必须传入对象，有firstName  secondName
    //console.log(name.firstName + '--' + name.secondName)
}
var objName = {
    age: 20,
    firstName: 'huang',
    secondName: 'lin'
};
printName(objName);
var md5 = function (key, value) {
    return key + value;
};
md5('name', 'zhangsan');
class DogAnimal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        //console.log('name')
    }
}
// 泛型 可以支持任意类型，传入的参数和返回参数一致,any类型没有类型检查，
function getData(value) {
    return value;
}
//调用时候，参数和返回和<>内部定义类型一样
getData(123);
// 泛型类
class Minclass {
    constructor() {
        this.list = [];
    }
    add(num) {
        this.list.push(num);
    }
    min() {
        var minNum = this.list[0];
        for (let i = 0; i < this.list.length; i++) {
            if (minNum > this.list[i]) {
                minNum = this.list[i];
            }
        }
        return minNum;
    }
}
var m1 = new Minclass();
var setData = function (value1) {
    return value1;
};
getData('asd');
// 泛型类
class User {
}
class MysqlDb {
    add(user) {
        //console.log(user)
        return true;
    }
}
var u = new User();
u.username = '黄林';
var Db = new MysqlDb();
Db.add(u);
// 泛型类
class Mysql {
    add(info) {
        //console.log(info);
        return true;
    }
}
class UserMysql {
}
var i = new UserMysql();
i.username = '黄林';
var dbmysql = new Mysql();
dbmysql.add(i);
