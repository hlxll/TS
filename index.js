"use strict";
/// <reference path="index.d.ts"/>
// 这个指令是用来声明依赖,对这些包的名字的解析与在 import语句里对模块名的解析类似
// /// <reference type="" /> 
// /// <reference no-default-lib="true"/> 把文件标记成默认库，，告诉编译器在编译过程中不要包含这个默认库，与使用命令--noLib相似
// ///<amd-module name='NamedModule'/>给模块命名
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
function greeter(person) {
    return "Hello, " + person;
}
var user = "Jane User";
var helloStr = '类型检验';
var Site = /** @class */ (function () {
    function Site() {
    }
    Site.prototype.name = function () {
    };
    return Site;
}());
var obj = new Site();
obj.name();
//元祖类型,数组类型可以不一样，但是对应类型必须一样
var yuanzuArr;
yuanzuArr = ['huang', 1];
var numArr;
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
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.num_val = 13; //实例
    }
    Numbers.prototype.storeNum = function () {
        var local_num = 14; // 局部
    };
    Numbers.sval = 10; //静态
    return Numbers;
}());
var Classobj = new Numbers();
var rO = {
    name: 'huanglin',
    password: [1, 2, 3, 4]
};
var ro = [1, 2, 3, 4];
ro = [2, 3, 4]; //不能修改单个索引数据，不能push等，但是直接替换没报错
//console.log(ro)
var a = [1, 2, 3, 4];
// a = ro只读属性不能直接分配,但是可以用类型断言重写
a = ro;
var customer = {
    firstName: 'huang',
    sayHi: function () { return "Hi huanglin"; },
    12: 'huanglin'
};
var list2 = ["huang", "lin"];
var strArr = {
    'name': 123
    // 123: 'huang'索引定义了类型
};
var mySearch;
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
var Control = /** @class */ (function () {
    function Control() {
    }
    return Control;
}());
//接口继承类类型时，会继承类的成员但不包括其实现，会继承类的private和protected成员，上面的接口SelectAbled是有select方法和state验证
//因为Control的state是私有的，只有Control的子类才能实现SelectAbled接口
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.select = function () { };
    return Button;
}(Control));
var names = {};
names.names = 'huanglin';
names.pass = 123;
/**
 * 类定义+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++类定义
*/
var UserName = /** @class */ (function () {
    //new实例化这个类时候，传递的参数，要这个构造函数获取
    //在构造函数加参数，把定义和传参合并
    function UserName(name, num) {
        this.num = num;
        this.name = name;
    }
    Object.defineProperty(UserName.prototype, "fullname", {
        //存取器getter/setter来截取对对象成员的访问
        //存取器要求你将编译器设置为输出ES5或更高（tsc -t es5 index.ts），
        //只带有get不带有set的存取器自动被推断为readonly,
        //存取器是为了防止数据直接被访问，在访问或者设置前加一些判断
        get: function () {
            return this._fullname;
        },
        set: function (newName) {
            this._fullname = newName;
        },
        enumerable: false,
        configurable: true
    });
    //private不能在他的类外部访问
    UserName.prototype.getName = function () {
        return "我的名字是" + this.name;
    };
    //protected不能在类外部访问，但是可以在子类中访问,构造函数也可以设置protected，就不能实例化，但是可以继承
    UserName.prototype.getNewName = function () {
        return "我的_fullname是" + this._fullname;
    };
    UserName.prototype.getNum = function () {
        return this.num;
    };
    //其他是类被实例化的时候才会被初始化的属性，但是staic静态成员，存在于类本身上，访问时候可以直接类名访问
    UserName.origin = { x: 0, y: 0 };
    return UserName;
}());
// //console.log(UserName.origin);
// 使用继承扩展类
var RootName = /** @class */ (function (_super) {
    __extends(RootName, _super);
    function RootName(name, num) {
        return _super.call(this, name, num) || this;
    }
    //继承之后可以使用基类的数据
    RootName.prototype.setName = function (name) {
        this.name = name;
        //console.log(super.getNewName());
        //console.log(super.getNum())
    };
    return RootName;
}(UserName));
var setName = new RootName("xulinlin", 13);
setName.fullname = "存取器设置";
setName.getNum();
//抽象类作为派生类的基类，通常不会直接实例化，且内部的抽象方法不包含具体实现，必须在派生类中实现
var Department = /** @class */ (function () {
    function Department() {
    }
    return Department;
}());
var abstractFun = /** @class */ (function (_super) {
    __extends(abstractFun, _super);
    function abstractFun() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    abstractFun.prototype.printMeet = function () {
        //console.log('抽象方法实现')
    };
    return abstractFun;
}(Department));
var absFun = new abstractFun();
absFun.printMeet();
// 类当做接口使用
var interClass = /** @class */ (function () {
    function interClass() {
    }
    return interClass;
}());
var data = {
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
var run2 = function (name, age) {
    if (age === void 0) { age = 20; }
    //默认参数，调用这个方法的时候，就可以不传,默认参数可以放前面，但是调用传值时候，不传值必须明确传入undefined
    return age;
};
// //console.log(run2('huanglin'))
//void用于定义没有返回值的方法
function nullReturn() {
    //console.log('null return')
}
// 剩余参数,不知道还有多少参数时候，可以在后面用...定义，会被编译成数组
function run3(a) {
    var result = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        result[_i - 1] = arguments[_i];
    }
    //形参可以前面放一两个参数，也可以不放
    for (var i_1 = 0; i_1 < result.length; i_1++) {
        //console.log(result[i])
    }
    return 1;
}
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: [1, 2, 3, 4],
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
var Handler = /** @class */ (function () {
    function Handler() {
    }
    Handler.prototype.onClickGood = function (e) {
        //console.log('clicked!');
    };
    ;
    return Handler;
}());
var h = new Handler();
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
console.log(identity('huanglin123123'));
//也可以不写<>中类型，直接传参数，编译器根据传入参数自动帮助我们确定T的类型
identity('huanglin');
//泛型类
var IdentityClass = /** @class */ (function () {
    function IdentityClass() {
    }
    return IdentityClass;
}());
var identClass = new IdentityClass();
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
var x;
var y = { name: 'huang', pass: 12 };
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
    var result = {};
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
// export class CreateClass {
//     name: String = '123'
// }
// 编译时候要加上Require.js是--module amd或者Node.js是--module commonjs,编译时候需要把index.d.ts一起编译
//在 .d.ts文件加declare定义模块，
//url用三斜线引入，必须在顶端
var URL = require("url");
var url = URL.parse('huanglin');
console.log(url);
var extend_1 = require("./extend");
var ChildSearch = /** @class */ (function (_super) {
    __extends(ChildSearch, _super);
    function ChildSearch() {
        return _super.call(this) || this;
    }
    ChildSearch.prototype.Search = function () {
        console.log('测试导入的继承2');
    };
    return ChildSearch;
}(extend_1.default));
var search = new ChildSearch();
search.Search();
//编译时采用tsc --target es6 --module commonjs index.ts index.d.ts ,将两个ts编译到一个js，commonjs可以使用node
/**
 * 模块==========================================================================================
*/
/**
 * 命名空间++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
//命名空间，方法属性导出才可以被外部使用，未导出的只能在命名空间使用,用namespace定义
var Validation;
(function (Validation) {
    var name = '';
    var getName = /** @class */ (function () {
        function getName() {
        }
        getName.prototype.getName = function (params) {
            return params;
        };
        return getName;
    }());
    Validation.getName = getName;
    var setName = /** @class */ (function () {
        function setName() {
        }
        setName.prototype.setName = function (params) {
            name = params;
        };
        return setName;
    }());
})(Validation || (Validation = {}));
var getName = new Validation.getName();
var name = getName.getName('huanglin');
console.log(name);
/// <reference path="extend.ts"/>
var extendSpace = new extend_1.moreFile.moreFileName();
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
    return function (target, propertyKey, descriptor) {
        console.log("f(): called");
    };
}
function g() {
    console.log("g(): evaluated");
    return function (target, propertyKey, descriptor) {
        console.log("g(): called");
    };
}
//编译加参数 tsc --target ES5 --experimentalDecorators,该组合装饰器，类似 f(g(x))
var C = /** @class */ (function () {
    function C() {
    }
    C.prototype.method = function () { };
    __decorate([
        f(),
        g()
    ], C.prototype, "method", null);
    return C;
}());
function classDecorator(constructor) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.newProperty = "new property";
            _this.hello = "override";
            return _this;
        }
        return class_1;
    }(constructor));
}
var Greeter = /** @class */ (function () {
    function Greeter(m) {
        this.property = "property";
        this.hello = m;
    }
    Greeter = __decorate([
        classDecorator
    ], Greeter);
    return Greeter;
}());
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
var Disposable = /** @class */ (function () {
    function Disposable() {
    }
    Disposable.prototype.dispose = function () {
        this.isDisposed = true;
    };
    return Disposable;
}());
// Activatable Mixin
var Activatable = /** @class */ (function () {
    function Activatable() {
    }
    Activatable.prototype.activate = function () {
        this.isActive = true;
    };
    Activatable.prototype.deactivate = function () {
        this.isActive = false;
    };
    return Activatable;
}());
var SmartObject = /** @class */ (function () {
    function SmartObject() {
        var _this = this;
        // Disposable
        this.isDisposed = false;
        // Activatable
        this.isActive = false;
        setInterval(function () { return console.log(_this.isActive + " : " + _this.isDisposed); }, 500);
    }
    SmartObject.prototype.interact = function () {
        this.activate();
    };
    return SmartObject;
}());
applyMixins(SmartObject, [Disposable, Activatable]);
var smartObj = new SmartObject();
setTimeout(function () { return smartObj.interact(); }, 1000);
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
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
var JtPerson = /** @class */ (function () {
    function JtPerson(name) {
        this.name = name;
    }
    JtPerson.prototype.run = function () {
        //console.log('实例方法')
    };
    //静态方法不能直接调用类里面的属性，需要定义静态属性
    JtPerson.print = function () {
        //console.log('静态方法' + JtPerson.age)
    };
    JtPerson.age = 12;
    return JtPerson;
}());
// 实例方法调用
var Jp = new JtPerson('huang');
Jp.run();
// 静态方法调用
JtPerson.print();
// 多态：父类定义一个方法不去实现，让继承他的子类去实现，每一个子类有不同的实现
//多态继承
var Animai = /** @class */ (function () {
    function Animai(name) {
        this.name = name;
    }
    Animai.prototype.eat = function () {
        //console.log('多态方法')
    };
    return Animai;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.eat = function () {
        return this.name + '吃死';
    };
    return Dog;
}(Animai));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.eat = function () {
        return this.name + '吃老鼠';
    };
    return Cat;
}(Animai));
//抽象:abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
//abstract抽象方法只能放在抽象类里面
//抽象类和抽象方法用来定义标准，animal这个类要求子类必须包含eat方法
var animal = /** @class */ (function () {
    function animal(name) {
        this.name = name;
    }
    return animal;
}());
//var a = new animal() /*错误的写法，不能直接实例化*/
var animalChild = /** @class */ (function (_super) {
    __extends(animalChild, _super);
    function animalChild(name) {
        return _super.call(this, name) || this;
    }
    animalChild.prototype.eat = function () {
        //console.log('继承抽象类。必须实现这个方法')
    };
    return animalChild;
}(animal));
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
var DogAnimal = /** @class */ (function () {
    function DogAnimal(name) {
        this.name = name;
    }
    DogAnimal.prototype.eat = function () {
        //console.log('name')
    };
    return DogAnimal;
}());
// 泛型 可以支持任意类型，传入的参数和返回参数一致,any类型没有类型检查，
function getData(value) {
    return value;
}
//调用时候，参数和返回和<>内部定义类型一样
getData(123);
// 泛型类
var Minclass = /** @class */ (function () {
    function Minclass() {
        this.list = [];
    }
    Minclass.prototype.add = function (num) {
        this.list.push(num);
    };
    Minclass.prototype.min = function () {
        var minNum = this.list[0];
        for (var i_2 = 0; i_2 < this.list.length; i_2++) {
            if (minNum > this.list[i_2]) {
                minNum = this.list[i_2];
            }
        }
        return minNum;
    };
    return Minclass;
}());
var m1 = new Minclass();
var setData = function (value1) {
    return value1;
};
getData('asd');
// 泛型类
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var MysqlDb = /** @class */ (function () {
    function MysqlDb() {
    }
    MysqlDb.prototype.add = function (user) {
        //console.log(user)
        return true;
    };
    return MysqlDb;
}());
var u = new User();
u.username = '黄林';
var Db = new MysqlDb();
Db.add(u);
// 泛型类
var Mysql = /** @class */ (function () {
    function Mysql() {
    }
    Mysql.prototype.add = function (info) {
        //console.log(info);
        return true;
    };
    return Mysql;
}());
var UserMysql = /** @class */ (function () {
    function UserMysql() {
    }
    return UserMysql;
}());
var i = new UserMysql();
i.username = '黄林';
var dbmysql = new Mysql();
dbmysql.add(i);
