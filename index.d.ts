//全局声明变量，不用import等引入就能使用，而且有语法提示
// .d.ts 文件中的顶级声明必须以 "declare" 或 "export" 修饰符开头。通过declare声明的类型或者变量或者模块，
// 在include包含的文件范围内，都可以直接引用而不用去import或者import type相应的变量或者类型
// declare声明变量，假如项目引入微信的sdk，你直接在ts使用肯定报错，声明了之后就不会了
//decalre最好不要和export同级，不然其他ts文件引入这个.d.ts内容就不能直接使用，得引入

declare module "url" {
    export interface Url {
        protocol?: string;
        hostname?: string;
        pathname?: string;
    }

    export function parse(urlStr: string, parseQueryString?, slashesDenoteHost?): Url;
    export class Search {
        protected Search(): void;
    }
}
// export class ExportClass {
//     public Search(): void;
// }

