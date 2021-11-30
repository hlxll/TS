import './index.less'

class Food {
    //一个属性表示实物的元素
    element: HTMLElement
    constructor() {
        //获取页面元素，并将其赋值给element，加！表示不会为空
        this.element = document.getElementById('food')!;
    }

    //获取事物x坐标
    get X() {
        return this.element.offsetLeft;
    }
    get Y() {
        return this.element.offsetTop;
    }

    //修改实物位置
    change() {
        let L = Math.round(Math.random() * 29) * 10;
        let T = Math.round(Math.random() * 29) * 10;
        this.element.style.left = L + 'px';
        this.element.style.top = T + 'px';
    }

}
