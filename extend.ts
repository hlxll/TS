export default class Search {
    protected Search(): void {
        console.log('测试导入继承')
    }
}

export namespace moreFile {
    export class moreFileName {
        getName(): void {
            console.log('同命名空间多文件')
        }
    }
}