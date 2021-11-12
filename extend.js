"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moreFile = void 0;
var Search = /** @class */ (function () {
    function Search() {
    }
    Search.prototype.Search = function () {
        console.log('测试导入继承');
    };
    return Search;
}());
exports.default = Search;
var moreFile;
(function (moreFile) {
    var moreFileName = /** @class */ (function () {
        function moreFileName() {
        }
        moreFileName.prototype.getName = function () {
            console.log('同命名空间多文件');
        };
        return moreFileName;
    }());
    moreFile.moreFileName = moreFileName;
})(moreFile = exports.moreFile || (exports.moreFile = {}));
