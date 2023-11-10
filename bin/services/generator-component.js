"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneratorComponent = void 0;
const fs_extra_1 = require("fs-extra");
const component_1 = require("../templates/component");
const export_1 = require("../templates/export");
const docs_1 = require("../templates/docs");
const readme_1 = require("../templates/readme");
const stories_1 = require("../templates/stories");
const core_1 = require("../core");
const pathParse_1 = require("../utils/pathParse");
class GeneratorComponent {
    constructor(pathProp, componentNameProp) {
        this.pathProp = pathProp;
        this.componentNameProp = componentNameProp;
        this.generateUtil = (template, file) => {
            const source = `${this.path}/${this.componentName}/${file}`;
            try {
                const templateParse = template.replaceAll(core_1.NAME, this.componentName);
                (0, fs_extra_1.createFileSync)(source);
                (0, fs_extra_1.writeFileSync)(source, templateParse);
            }
            catch (e) {
                console.error(e);
            }
        };
        this.generateComponent = (storybook) => {
            const importReact = `import { React } from "React";\n`;
            this.generateUtil(`${storybook ? importReact : ''}${component_1.default}`, `${this.componentName}.ts`);
        };
        this.generateExportFile = () => {
            this.generateUtil(export_1.default, `index.ts`);
        };
        this.generateModuleCss = () => {
            this.generateUtil('', `${this.componentName}.module.css`);
        };
        this.configureHandle = () => {
            this.path = (0, pathParse_1.pathParse)(this.pathProp);
            this.componentName = this.componentNameProp;
            const existsDir = (0, fs_extra_1.existsSync)(`${this.path}/${this.componentName}`);
            if (existsDir) {
                console.error(`Folder with ${this.componentName} component in ${process.cwd()}/${this.path} already exists.`);
            }
            return !existsDir;
        };
        this.generateReact = () => {
            if (this.configureHandle()) {
                this.generateComponent();
                this.generateExportFile();
                this.generateModuleCss();
            }
        };
        this.generateStorybook = () => {
            if (this.configureHandle()) {
                this.generateComponent(true);
                this.generateExportFile();
                this.generateModuleCss();
                this.generateUtil(docs_1.default, `Docs.mdx`);
                this.generateUtil(readme_1.default, `README.md`);
                this.generateUtil(stories_1.default, `${this.componentName}.stories.ts`);
            }
        };
    }
}
exports.GeneratorComponent = GeneratorComponent;
