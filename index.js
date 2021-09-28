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
    name: 'huanglin'
};
var customer = {
    firstName: 'huang',
    sayHi: function () { return "Hi huanglin"; }
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
//             console.log("Circle is drawn"); 
//         }  
//     }
// }
/**
 * 类定义+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++类定义
*/
var UserName = /** @class */ (function () {
    //new实例化这个类时候，传递的参数，要这个构造函数获取
    //在构造函数参数加只读，把定义和传参合并
    function UserName(name, num) {
        this.num = num;
        this.name = name;
    }
    Object.defineProperty(UserName.prototype, "fullname", {
        //存取器getter/setter来截取对对象成员的访问
        //存取器要求你将编译器设置为输出ES5或更高（tsc -t es5 index.ts），只带有get不带有set的存取器自动被推断为readonly
        get: function () {
            console.log('获取fullname');
            return this._fullname;
        },
        set: function (newName) {
            console.log('设置fullname');
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
console.log(UserName.origin);
// 使用继承扩展类
var RootName = /** @class */ (function (_super) {
    __extends(RootName, _super);
    function RootName(name, num) {
        return _super.call(this, name, num) || this;
    }
    //继承之后可以使用基类的数据
    RootName.prototype.setName = function (name) {
        this.name = name;
        console.log(_super.prototype.getNewName.call(this));
        console.log(_super.prototype.getNum.call(this));
    };
    return RootName;
}(UserName));
var setName = new RootName("xulinlin", 13);
setName.fullname = "存取器设置";
console.log(setName.fullname);
// 类定义============================================================================================================================================================类定义
// 函数定义
function run(name, age) {
    //定义返回值类型
    //形参加问号，调用时候就可传可不传,可选参数必须放最后面
    // 调用实参
    if (age) {
        console.log(name + "+" + age);
    }
    else {
        console.log("" + name);
    }
    return 'run';
}
run('必须传递');
var run2 = function (name, age) {
    if (age === void 0) { age = 20; }
    //默认参数，调用这个方法的时候，就可以不传
    return 1;
};
//void用于定义没有返回值的方法
function nullReturn() {
    console.log('null return');
}
// 剩余参数
function run3(a) {
    var result = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        result[_i - 1] = arguments[_i];
    }
    //形参可以前面放一两个参数，也可以不放
    for (var i_1 = 0; i_1 < result.length; i_1++) {
        console.log(result[i_1]);
    }
    return 1;
}
function getInfo(str) {
    if (typeof str == 'string') {
        return '名称' + str;
    }
    else {
        return '年龄' + str;
    }
}
// 类
var person = /** @class */ (function () {
    function person(n) {
        this.name = n;
        this.age = 12;
    }
    person.prototype.getName = function () {
        return this.name;
    };
    person.prototype.setName = function (name) {
        this.name = name;
    };
    return person;
}());
//类继承
var Web = /** @class */ (function (_super) {
    __extends(Web, _super);
    function Web(name) {
        return _super.call(this, name) || this;
    }
    //自定义方法,如果父类和子类有一样的方法，先找子类，没有才会去父类找
    Web.prototype.work = function () {
        console.log("" + this.name);
    };
    return Web;
}(person));
// 类修饰符，默认，pubilc，共有 在类里面，子类，类外面都可以访问
//private在类里面，子类可以访问类外面不能
//protected类里面可以访问，子类和类外部不能访问
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
        console.log('实例方法');
    };
    //静态方法不能直接调用类里面的属性，需要定义静态属性
    JtPerson.print = function () {
        console.log('静态方法' + JtPerson.age);
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
        console.log('多态方法');
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
        console.log('继承抽象类。必须实现这个方法');
    };
    return animalChild;
}(animal));
function printName(name) {
    //必须传入对象，有firstName  secondName
    console.log(name.firstName + '--' + name.secondName);
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
        console.log('name');
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
        console.log(user);
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
        console.log(info);
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
