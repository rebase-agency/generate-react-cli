"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneratorModule = void 0;
const component_1 = __importDefault(require("../templates/component"));
const fs_extra_1 = require("fs-extra");
const core_1 = require("../core");
const apiService_1 = __importDefault(require("../templates/apiService"));
class GeneratorModule {
    constructor(path, componentName) {
        this.path = path;
        this.componentName = componentName;
    }
    generateFile(source, template, suffix) {
        try {
            const templateParse = template.replaceAll(core_1.NAME, `${this.componentName}${suffix ?? ''}`);
            (0, fs_extra_1.createFileSync)(source);
            (0, fs_extra_1.writeFileSync)(source, templateParse);
        }
        catch (e) {
            console.error(e);
        }
    }
    generate(withProps) {
        const source = `${this.path}/${this.componentName}`;
        const existsFolder = (0, fs_extra_1.existsSync)(source);
        if (!existsFolder) {
            this.generateFile(`${source}/components/index.tsx`, (0, component_1.default)(false, false, false, withProps));
            this.generateFile(`${source}/components/${this.componentName}.module.css`, '');
            this.generateFile(`${source}/index.ts`, `export { ${this.componentName} } from "./components"\n`);
            this.generateFile(`${source}/api/${this.componentName}Service.ts`, apiService_1.default, 'Service');
            (0, fs_extra_1.mkdirSync)(`${source}/constants`);
            (0, fs_extra_1.mkdirSync)(`${source}/hooks`);
            (0, fs_extra_1.mkdirSync)(`${source}/libs`);
            (0, fs_extra_1.mkdirSync)(`${source}/interfaces`);
            console.info("Done");
        }
        else {
            console.error(`Module ${source} already exists.`);
        }
    }
}
exports.GeneratorModule = GeneratorModule;
//# sourceMappingURL=generator-module.js.map