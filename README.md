# 接口
给类定义接口时候，构造函数（controller）不检测

# 类
派生类包含一个构造函数，它必须调用super，在构造函数里访问this的属性之前，一定要调用super
比较两个类的时候，public只要类型想同的成员就认为是相等的，private和protected是要类型相同，并且来自同一处声明时，才认为是相等的
protected是不能在类外使用，可以再派生类使用，如果构造函数使用protected，就不能new这个类
# 函数
