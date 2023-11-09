"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cli = void 0;
const generator_component_1 = require("../services/generator-component");
const commander_1 = require("commander");
const packageJson = require('../../package.json');
const cli = () => {
    const program = new commander_1.Command();
    program
        .name(packageJson.name)
        .version(packageJson.version)
        .description(packageJson.description);
    program
        .argument("<component>", "The component name.")
        .argument("[path]", "The path where the component will get generated in.")
        .option("-s, --storybook", "Generate the files for storybook project.")
        .action((component, path, options) => {
        const generatorComponent = new generator_component_1.GeneratorComponent(path ?? '.', component);
        if (options.storybook) {
            generatorComponent.generateStorybook();
        }
        else {
            generatorComponent.generateReact();
        }
    });
    program.parse();
};
exports.cli = cli;
