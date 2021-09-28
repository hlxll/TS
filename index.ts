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
// console.log(myMap)
interface readonlyData {
    readonly name: string
}
var rO: readonlyData = {
    name: 'huanglin'
}
// rO.name = 'asd'不能修改，只能初始化时候修改

//ts接口定义,再由另外的定义实现这个接口，不能转换为js，这个是ts的一部分
interface Iperson {
    readonly firstName: string,
    sayHi: () => string,
    [index: number]: string
}
var customer: Iperson = {
    firstName: 'huang',
    sayHi: (): string => { return "Hi huanglin" }
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
//             console.log("Circle is drawn"); 
//         }  
//     }
// }



/**
 * 类定义+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++类定义
*/

class UserName {
    public name: string;
    private _fullname: string;
    //只读必须在声明时或构造函数里被初始化
    readonly password: number;
    //new实例化这个类时候，传递的参数，要这个构造函数获取
    //在构造函数参数加只读，把定义和传参合并
    public constructor(name: string, readonly num: number) {
        this.name = name
    }
    //存取器getter/setter来截取对对象成员的访问
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
// 使用继承扩展类
class RootName extends UserName {
    constructor(name: string, num: number) {
        super(name, num);
    }
    //继承之后可以使用基类的数据
    setName(name) {
        this.name = name
        console.log(super.getNewName());
        console.log(super.getNum())
    }
}
const setName = new RootName("xulinlin", 13);
const myNewName = setName.setName('protected访问')


// 类定义============================================================================================================================================================类定义

// 函数定义
function run(name: string, age?: number): string {

    //定义返回值类型
    //形参加问号，调用时候就可传可不传,可选参数必须放最后面
    // 调用实参
    if (age) {
        console.log(`${name}+${age}`)
    } else {
        console.log(`${name}`)
    }

    return 'run'
}
run('必须传递')
var run2 = function (name: string, age: number = 20): number {
    //默认参数，调用这个方法的时候，就可以不传
    return 1;
}
//void用于定义没有返回值的方法
function nullReturn(): void {
    console.log('null return')
}
// 剩余参数
function run3(a: number, ...result: number[]): number {
    //形参可以前面放一两个参数，也可以不放
    for (let i = 0; i < result.length; i++) {
        console.log(result[i])
    }
    return 1
}

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
// 类
class person {
    name: string;
    public age: number;
    constructor(n: string) { //构造函数，实例化时候调用的方法
        this.name = n;
        this.age = 12;
    }
    getName(): string {
        return this.name;
    }
    setName(name: string): void {
        this.name = name
    }
}
//类继承
class Web extends person {
    constructor(name: string) {
        super(name);
    }
    //自定义方法,如果父类和子类有一样的方法，先找子类，没有才会去父类找
    work() {
        console.log(`${this.name}`)
    }
}
// 类修饰符，默认，pubilc，共有 在类里面，子类，类外面都可以访问
//private在类里面，子类可以访问类外面不能
//protected类里面可以访问，子类和类外部不能访问


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
        console.log('实例方法')
    }
    //静态方法不能直接调用类里面的属性，需要定义静态属性
    static print() {
        console.log('静态方法' + JtPerson.age)
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
        console.log('多态方法')
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
        console.log('继承抽象类。必须实现这个方法')
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
    console.log(name.firstName + '--' + name.secondName)
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
        console.log('name')
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
        console.log(user)
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
        console.log(info);
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