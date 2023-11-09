"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cli = void 0;
const generator_component_1 = require("./generator-component");
class Cli {
    constructor() { }
    run() {
        const { argv } = process;
        if (argv[2] && argv[3]) {
            const generatorComponent = new generator_component_1.GeneratorComponent(argv[2], argv[3]);
            generatorComponent.generate();
        }
        else {
            console.error('fdfd');
            process.exit();
        }
    }
}
exports.Cli = Cli;
