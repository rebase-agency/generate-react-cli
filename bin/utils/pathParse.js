"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pathParse = void 0;
const pathParse = (path) => {
    const p = path[path.length - 1] === "/" ? path.slice(0, path.length - 1) : path;
    console.log(p);
};
exports.pathParse = pathParse;
