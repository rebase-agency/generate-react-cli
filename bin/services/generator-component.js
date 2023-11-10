"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneratorComponent = void 0;
const fs_extra_1 = require("fs-extra");
const component_1 = __importDefault(require("../templates/component"));
const export_1 = __importDefault(require("../templates/export"));
const docs_1 = __importDefault(require("../templates/docs"));
const readme_1 = __importDefault(require("../templates/readme"));
const stories_1 = __importDefault(require("../templates/stories"));
const hook_1 = __importDefault(require("../templates/hook"));
const context_1 = __importDefault(require("../templates/context"));
const core_1 = require("../core");
const pathParse_1 = require("../utils/pathParse");
class GeneratorComponent {
    constructor(pathProp, componentNameProp) {
        this.pathProp = pathProp;
        this.componentNameProp = componentNameProp;
        this.componentName = '';
        this.path = '';
        this.generateFile = (template, file, noFolder) => {
            const source = noFolder ? `${this.path}/${file}` : `${this.path}/${this.componentName}/${file}`;
            const existsFile = (0, fs_extra_1.existsSync)(source);
            if (!existsFile) {
                try {
                    const templateParse = template.replaceAll(core_1.NAME, this.componentName);
                    (0, fs_extra_1.createFileSync)(source);
                    (0, fs_extra_1.writeFileSync)(source, templateParse);
                }
                catch (e) {
                    console.error(e);
                }
            }
            else {
                console.error(`File ${source} already exists.`);
            }
        };
        this.generateComponent = (storybook, noFolder) => {
            this.generateFile((0, component_1.default)(storybook, noFolder), `${this.componentName}.tsx`, noFolder);
        };
        this.generateExportFile = () => {
            this.generateFile(export_1.default, `index.ts`);
        };
        this.generateModuleCss = () => {
            this.generateFile('', `${this.componentName}.module.css`);
        };
        this.configureHandle = () => {
            this.path = (0, pathParse_1.pathParse)(this.pathProp);
            this.componentName = this.componentNameProp;
        };
        this.generateReact = (noFolder) => {
            this.configureHandle();
            this.generateComponent(false, noFolder);
            if (!noFolder) {
                this.generateExportFile();
                this.generateModuleCss();
            }
        };
        this.generateStorybook = () => {
            this.configureHandle();
            this.generateComponent(true);
            this.generateExportFile();
            this.generateModuleCss();
            this.generateFile(docs_1.default, `Docs.mdx`);
            this.generateFile(readme_1.default, `README.md`);
            this.generateFile(stories_1.default, `${this.componentName}.stories.tsx`);
        };
        this.generateHook = () => {
            this.configureHandle();
            this.generateFile(hook_1.default, `${this.componentName}.tsx`, true);
        };
        this.generateContext = () => {
            this.configureHandle();
            this.generateFile(context_1.default.context, `${this.componentName}Context.tsx`);
            this.generateFile(context_1.default.hookContext, `use${this.componentName}Context.tsx`);
            this.generateFile(context_1.default.types, "types.ts");
            this.generateFile(context_1.default.exp, "index.ts");
        };
    }
}
exports.GeneratorComponent = GeneratorComponent;
//# sourceMappingURL=generator-component.js.map