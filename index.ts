/// <reference path="index.d.ts"/>
// 这个指令是用来声明依赖,对这些包的名字的解析与在 import语句里对模块名的解析类似
// /// <reference type="" /> 
// /// <reference no-default-lib="true"/> 把文件标记成默认库，，告诉编译器在编译过程中不要包含这个默认库，与使用命令--noLib相似
// ///<amd-module name='NamedModule'/>给模块命名

function greeter(person: string) {
    return "Hello, " + person;
}
let user = "Jane User";

const helloStr: string = '类型检验';
class Site {
    name(): void {

    }
}
var obj = new Site();
obj.name();

//元祖类型,数组类型可以不一样，但是对应类型必须一样
let yuanzuArr: [string, number];
yuanzuArr = ['huang', 1];
let numArr: Array<number>;
numArr = [1, 2, 3]


//任意类型 Any类型，当不知道数据类型，可以定义Any
//在js中null和underfined可以赋值给任意类型的值，但是在ts中启用严格的空校验，null和underfined只能赋值给void和本身对应类型
//never类型是其他类型的子类型，代表从不会出现的值，在函数中通常表现为抛出异常或无法执行到终点

//联合类型
// 一个数据声明，使用两个类型定义
var lotType: number | string;


//类型断言
// 手动指定一个值的类型，允许变量从一种类型更改为另一种类型
// <类型>值    或者     值 as 类型
var str1: string = '1';
var str2: number = <number><any>str1;

//作用域，全局，类，局部
var All_num = 12;  //全局
class Numbers {
    num_val = 13;  //实例
    static sval = 10;  //静态
    storeNum(): void {
        var local_num = 14; // 局部
    }
}
var Classobj = new Numbers();

//Map对象,  es6的语法，在编译时候需要加上tsc --target es6 index.ts
// let myMap = new Map();
// myMap.set("key3","value3");
// //console.log(myMap)
interface readonlyData {
    readonly name: string;
    readonly password: Array<number>
}
var rO: readonlyData = {
    name: 'huanglin',
    password: [1, 2, 3, 4]
}
let ro: ReadonlyArray<number> = [1, 2, 3, 4]
ro = [2, 3, 4]//不能修改单个索引数据，不能push等，但是直接替换没报错
//console.log(ro)
let a: number[] = [1, 2, 3, 4]
// a = ro只读属性不能直接分配,但是可以用类型断言重写
a = ro as number[]
//readonly是只读，只能在初始化定义数据，后面不能修改数据，
// rO.name = 'asd'不能修改，只能初始化时候修改

//ts接口定义,再由另外的定义实现这个接口，不能转换为js，这个是ts的一部分
interface Iperson {
    readonly firstName: string,
    sayHi: () => string,
    [index: number]: string
}
var customer: Iperson = {
    firstName: 'huang',
    sayHi: (): string => { return "Hi huanglin" },
    12: 'huanglin'
}
// 接口中可以将数组的索引值和元素设置为不同类型，索引可以是数字或字符串
interface arrNum {
    [index: number]: string
}
var list2: arrNum = ["huang", "lin"];
interface arrStr {
    [index: string]: number
}
var strArr: arrStr = {
    'name': 123
    // 123: 'huang'索引定义了类型
}

// 函数检查
interface funFace {
    (name: string, num: number): boolean
}
let mySearch: funFace;
mySearch = function (source: string, num: number) {
    return false;
}
/**
 * 检查方法时候，参数名可以不一样，类型一样就行
*/



// var ageList:arrStr;
// ageList["lin"] = 5;
// 接口继承
interface firend {
    firstName: string
}
interface ChildPerson extends firend {
    lastName: string
}
var firendChild = <ChildPerson>{};
firendChild.firstName = 'huang'

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
    private state: string
}
//接口继承了类，继承了类的私有和保护成员和属性
interface SelectAbled extends Control {
    select(): void
}
//接口继承类类型时，会继承类的成员但不包括其实现，会继承类的private和protected成员，上面的接口SelectAbled是有select方法和state验证

//因为Control的state是私有的，只有Control的子类才能实现SelectAbled接口
class Button extends Control implements SelectAbled {
    select() { }
}
interface name {
    names: string
}
interface password extends name {
    pass: number;
    (num: number): string;
    reset(): void
}
let names = <password>{}
names.names = 'huanglin'
names.pass = 123





/**
 * 类定义+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++类定义
*/

class UserName {
    //其他是类被实例化的时候才会被初始化的属性，但是staic静态成员，存在于类本身上，访问时候可以直接类名访问
    static origin = { x: 0, y: 0 }
    public name: string;
    private _fullname: string;
    //只读必须在声明时或构造函数里被初始化
    readonly password: number;
    //new实例化这个类时候，传递的参数，要这个构造函数获取
    //在构造函数加参数，把定义和传参合并
    public constructor(name: string, readonly num: number) {
        this.name = name
    }
    //存取器getter/setter来截取对对象成员的访问
    //存取器要求你将编译器设置为输出ES5或更高（tsc -t es5 index.ts），
    //只带有get不带有set的存取器自动被推断为readonly,
    //存取器是为了防止数据直接被访问，在访问或者设置前加一些判断
    get fullname(): string {
        return this._fullname
    }
    set fullname(newName: string) {
        this._fullname = newName
    }
    //private不能在他的类外部访问
    private getName() {
        return "我的名字是" + this.name
    }
    //protected不能在类外部访问，但是可以在子类中访问,构造函数也可以设置protected，就不能实例化，但是可以继承
    protected getNewName() {
        return "我的_fullname是" + this._fullname
    }
    public getNum() {
        return this.num
    }
}
// //console.log(UserName.origin);

// 使用继承扩展类
class RootName extends UserName {
    constructor(name: string, num: number) {
        super(name, num);
    }
    //继承之后可以使用基类的数据
    setName(name) {
        this.name = name
        //console.log(super.getNewName());
        //console.log(super.getNum())
    }
}
const setName = new RootName("xulinlin", 13);
setName.fullname = "存取器设置"
setName.getNum()

//抽象类作为派生类的基类，通常不会直接实例化，且内部的抽象方法不包含具体实现，必须在派生类中实现
abstract class Department {
    constructor() {

    }
    abstract printMeet(): void;
}
class abstractFun extends Department {
    printMeet() {
        //console.log('抽象方法实现')
    }
}
let absFun = new abstractFun();
absFun.printMeet()
// 类当做接口使用
class interClass {
    x: number;
}
interface ClassInterface extends interClass {
    y: number
}
let data: ClassInterface = {
    x: 1,
    y: 2
}


// 类定义============================================================================================================================================================类定义



/**
 * 函数定义++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++函数定义
*/
function run(name: string, age?: number): string {

    //定义返回值类型,没加？的参数是必传的
    //形参加问号，调用时候就可传可不传,可选参数必须放最后面
    // 调用实参
    if (age) {
        //console.log(`${name}+${age}`)
    } else {
        //console.log(`${name}`)
    }

    return 'run'
}
// run('必须传递')
var run2 = function (name: string, age: number = 20): number {
    //默认参数，调用这个方法的时候，就可以不传,默认参数可以放前面，但是调用传值时候，不传值必须明确传入undefined
    return age;
}
// //console.log(run2('huanglin'))
//void用于定义没有返回值的方法
function nullReturn(): void {
    //console.log('null return')
}
// 剩余参数,不知道还有多少参数时候，可以在后面用...定义，会被编译成数组
function run3(a: number, ...result: number[]): number {
    //形参可以前面放一两个参数，也可以不放
    for (let i = 0; i < result.length; i++) {
        //console.log(result[i])
    }
    return 1
}
// run3(1, 2, 3, 4, 5)
interface Card {
    suit: string;
    card: number;
}
interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card;
}
let deck: Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: [1, 2, 3, 4],
    createCardPicker: function (this: Deck) {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);
            return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
        }
    }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

//this参数在回调函数里
interface UIElement {
    addClickListener(onclick: (this: void, e: Event) => void): void;
}
class Handler {
    info: string;
    onClickGood(this: void, e: Event) {
        //console.log('clicked!');
    };
    // onClickGood = (e: Event) => { }
}
let h = new Handler();

// uiElement.addClickListener(h.onClickGood);
//当在回调函数中使用this，this是underfined，也可以传递this，在回调函数时候也要传入this，或者回调函数可以设置成箭头函数，箭头函数不会捕获this


//方法重载
function getInfo(name: string): string;
function getInfo(age: number): string;
function getInfo(str: any): any {
    if (typeof str == 'string') {
        return '名称' + str
    } else {
        return '年龄' + str
    }
}
getInfo('123')
/**
 * 函数定义=============================================================================================================================================函数定义
*/

/**
 * 泛型+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++泛型
*/
// 无法创建泛型枚举和泛型命名空间

//定义一个可以传任何类型的函数，且让参数和返回值类型相同，如果使用any，是不可控的，使用泛型可以控制
function identity<T>(arg: T): T {
    return arg;
}
//定义泛型的函数，处理的时候就得当他是任意类型的，比如获取他的length就不行，如果是数字，没有length
identity<string>('huanglin')
//也可以不写<>中类型，直接传参数，编译器根据传入参数自动帮助我们确定T的类型
identity('huanglin');
interface IdentityFace {
    <T>(arg: T): T,
    <T>(arg: Array<T>): Array<T>
}

//泛型类
class IdentityClass<T> {
    name: T;
    add: (x: T) => T;
}
let identClass = new IdentityClass<string>()

//给泛型添加一下约束, 必须包含必须的属性
interface LengthWise {
    length: number
}
function loggingIdentity<T extends LengthWise>(arg: T): T {
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
enum EnumData {
    X,
    Y,
    Z
}

/**
 * 枚举===================================================================================================================================================================枚举
*/


/**
 * 类型推论++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++类型推论
*/


/**
 * 类型推论===================================================================================================================================================================类型推论
 * 
*/
/**
 * 类型兼容++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
// 如果x要兼容y，那么y至少具有与x相同的属性
interface baseType {
    name: String
}
let x: baseType;
let y = { name: 'huang', pass: 12 }
x = y
//兼容性检查y，用baseType,必须有name就检查通过
/**
 * 类型兼容====================================================================================
*/

/**
 * 高级类型++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
// 交叉类型,大多实在混入或其他不适合典型面向对象模型的地方使用
function extend<T, U>(first: T, second: U): T & U {
    let result = <T & U>{};
    return result;
}
//联合类型,有些参数希望可以传number或者string，如果使用any，传入其他类型也不会报错，所以使用联合
function padLeft(name: String, padding: Number | String) {

}
interface Bird {
    fly();
    layEggs();
}

interface Fish {
    swim();
    layEggs();
}

function getSmallPet(): Fish | Bird {
    // ...
    return;
}
// 方法是联合类型，那么只能访问他们共有的成员，比如layEggs

//用户自定义的保护类型，这个方法就可以用来判断类型是否是fish，
function isFish(pet: Fish | Bird): pet is Fish {
    return (<Fish>pet).swim !== undefined;
}
//类型断言，判断数据类型
function isNumber(x: any): x is number {
    return typeof x === 'number'
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

// export class CreateClass {
//     name: String = '123'
// }
// 编译时候要加上Require.js是--module amd或者Node.js是--module commonjs,编译时候需要把index.d.ts一起编译
//在 .d.ts文件加declare定义模块，

//url用三斜线引入，必须在顶端

import * as URL from 'url'
let url = URL.parse('huanglin');
console.log(url)
import Search, { moreFile } from './extend'
class ChildSearch extends Search {
    constructor() {
        super();
    }
    Search(): void {
        console.log('测试导入的继承2')
    }
}
let search = new ChildSearch()
search.Search();
//编译时采用tsc --target es6 --module commonjs index.ts index.d.ts ,将两个ts编译到一个js，commonjs可以使用node

/**
 * 模块==========================================================================================
*/

/**
 * 命名空间++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
//命名空间，方法属性导出才可以被外部使用，未导出的只能在命名空间使用,用namespace定义
namespace Validation {
    let name: String = ''
    export class getName {
        getName(params: String) {
            return params;
        }
    }
    class setName {
        setName(params: String): void {
            name = params;
        }
    }
}
let getName = new Validation.getName();
let name = getName.getName('huanglin');
console.log(name);

/// <reference path="extend.ts"/>
let extendSpace = new moreFile.moreFileName();


/**
 * 命名空间=====================================================================================
*/

/**
 * 命名空间和模块++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
//命名空间帮助组织Web应用不错的方式，可以把所有依赖都放在HTML页面的script里
//模块对于大型应用带来长久的模块化和可维护性上的便利，也提供了更好的代码重要，更强的封闭性以及更好的
//使用工具进行优化
//不应该对模块使用命名空间，使用命名空间是为了提供逻辑分组和避免命名冲突，模块文件本身已经是一个逻辑分组
//并且他的名字是由导入这个模块的代码指定的，没有必要为导出的对象增加额外的模块层

//模块解析
//模块解析是指编译器在查找导入模块内容时所遵循的流程，
//相对导入，比如./  ../    /开头的路径
//其他都是非相对的
// 非相对的才可以被解析成外部模块声明

//非相对模块的导入，是从导入文件的目录开始依次向上级目录遍历，不找兄弟目录
//ts解析是在node基础上增加了对（.ts, .tsx, .d.ts）同时在package里使用字段types来表示类似main的意义
/**
 * 命名空间和模块=====================================================================================
*/

/**
 * 装饰器++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
// 额外的特性支持标注和修改类及其成员，装饰器可以实现，装饰器需要返回一个函数
// 被装饰的声明信息作为参数传入装饰器
// 多个装饰器应用在一个声明上，由上至下依次对装饰器表达式求值。 求值的结果会被当作函数，由下至上依次调用。

function f() {
    console.log("f(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("f(): called");
    }
}
function g() {
    console.log("g(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("g(): called");
    }
}
//编译加参数 tsc --target ES5 --experimentalDecorators,该组合装饰器，类似 f(g(x))
class C {
    @f()
    @g()
    method() { }
}
function classDecorator<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    }
}

@classDecorator
class Greeter {
    property = "property";
    hello: string;
    constructor(m: string) {
        this.hello = m;
    }
}

console.log(new Greeter("world"));
/**
 * 装饰器=====================================================================================
*/

/**
 * Mixins++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
//Mixins
// 定义两个类，创建一个新的类，新的类用implements把两个类当接口，实现两个类的方法
// Disposable Mixin
class Disposable {
    isDisposed: boolean;
    dispose() {
        this.isDisposed = true;
    }

}

// Activatable Mixin
class Activatable {
    isActive: boolean;
    activate() {
        this.isActive = true;
    }
    deactivate() {
        this.isActive = false;
    }
}

class SmartObject implements Disposable, Activatable {
    constructor() {
        setInterval(() => console.log(this.isActive + " : " + this.isDisposed), 500);
    }

    interact() {
        this.activate();
    }

    // Disposable
    isDisposed: boolean = false;
    dispose: () => void;
    // Activatable
    isActive: boolean = false;
    activate: () => void;
    deactivate: () => void;
}
applyMixins(SmartObject, [Disposable, Activatable]);

let smartObj = new SmartObject();
setTimeout(() => smartObj.interact(), 1000);

function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}

/**
 * Mixins=====================================================================================
*/


// 文件类型检查？？？？？？？？？？？？？？














// 静态属性和方法

// es5中
// function jintai(){}
// jintai.run = function(){}
// 使用时候可以直接jintai.run()

class JtPerson {
    name: string;
    static age = 12;
    constructor(name: string) {
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
// 实例方法调用
let Jp = new JtPerson('huang')
Jp.run();
// 静态方法调用
JtPerson.print()

// 多态：父类定义一个方法不去实现，让继承他的子类去实现，每一个子类有不同的实现

//多态继承
class Animai {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    eat() {
        //console.log('多态方法')
    }
}
class Dog extends Animai {
    constructor(name: string) {
        super(name)
    }
    eat() {
        return this.name + '吃死';
    }
}
class Cat extends Animai {
    constructor(name: string) {
        super(name)
    }
    eat() {
        return this.name + '吃老鼠';
    }
}

//抽象:abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现

//abstract抽象方法只能放在抽象类里面

//抽象类和抽象方法用来定义标准，animal这个类要求子类必须包含eat方法
abstract class animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    abstract eat(): any;
}
//var a = new animal() /*错误的写法，不能直接实例化*/
class animalChild extends animal {
    constructor(name: string) {
        super(name)
    }
    eat() {
        //console.log('继承抽象类。必须实现这个方法')
    }
}


// 接口
// 1:属性接口
// function pringLabel(label:string, str:{label:string}):void{
//     //参数对属性约束

// }
//对象约束   属性接口
interface FullName {
    firstName: string;
    secondName: string;
    threeName?: string;//可选参数
}
function printName(name: FullName) {
    //必须传入对象，有firstName  secondName
    //console.log(name.firstName + '--' + name.secondName)
}
var objName = {
    age: 20,
    firstName: 'huang',
    secondName: 'lin'
};
printName(objName)

// 函数接口
interface encrypt {
    (key: string, value: string): string;
}
var md5: encrypt = function (key: string, value: string): string {


    return key + value;
}
md5('name', 'zhangsan')
// 可索引接口，数组，对象约束
interface arr {
    [index: number]: string;
}
//对象约束
interface obj {
    [index: string]: string
}
// 类类型接口，对类的约束，和抽象类相似
interface Animal {
    name: string;
    eat(str: string): void;
}
class DogAnimal implements Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    eat() {//约束了参数，但是不传也可以，但是不定义这个方法就报错
        //console.log('name')
    }
}
// 接口继承,继承接口后，就需要实现这两个地方的约束
interface Web extends Animal {
    work(): void;
}


// 泛型 可以支持任意类型，传入的参数和返回参数一致,any类型没有类型检查，
function getData<T>(value: T): T {

    return value;
}
//调用时候，参数和返回和<>内部定义类型一样
getData<number>(123)

// 泛型类
class Minclass<T>{
    public list: T[] = [];
    add(num: T): void {
        this.list.push(num)
    }
    min(): T {
        var minNum = this.list[0];
        for (let i = 0; i < this.list.length; i++) {
            if (minNum > this.list[i]) {
                minNum = this.list[i];
            }
        }
        return minNum;
    }
}
var m1 = new Minclass<number>();
// 泛型接口
interface ConfigFn {
    <T>(value: T): T
}
var setData: ConfigFn = function <T>(value1: T): T {
    return value1;
}
getData<string>('asd')
// 泛型类
class User {
    username: string | undefined;
}
class MysqlDb {
    add(user: User): boolean {
        //console.log(user)
        return true;
    }
}
var u = new User();
u.username = '黄林';
var Db = new MysqlDb();
Db.add(u);
// 泛型类
class Mysql<T>{
    add(info: T): boolean {
        //console.log(info);
        return true;
    }
}
class UserMysql {
    username: string | undefined;
}
var i = new UserMysql();
i.username = '黄林';
var dbmysql = new Mysql<UserMysql>();
dbmysql.add(i)

