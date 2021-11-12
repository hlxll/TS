# 接口
给类定义接口时候，构造函数（controller）不检测

# 类
派生类包含一个构造函数，它必须调用super，在构造函数里访问this的属性之前，一定要调用super
比较两个类的时候，public只要类型想同的成员就认为是相等的，private和protected是要类型相同，并且来自同一处声明时，才认为是相等的
protected是不能在类外使用，可以再派生类使用，如果构造函数使用protected，就不能new这个类
# 函数
可选参数必须放必选参数后面
参数收集到一个变量中，(...resName: string[]),代表任意多个string参数
函数内有函数，this作用于问题因为嵌套多层的函数会发生变化，可以给内部函数传递this，类型和这个外部函数一样
let deck: Deck = {
    suits: [],
    createCardPicker: function(this: Deck) {
        return () => {}
    }
}
# 泛型
泛型可以使用接口，给泛型加条件<T extends interface>