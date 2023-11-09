import {GeneratorComponent} from "./generator-component";

export class Cli {
  constructor() {}

  run() {
    const args = process.argv
    if (args[2] && args[3]) {
      const generatorComponent = new GeneratorComponent(args[2], args[3])
      generatorComponent.generate()
    }
  }
}
