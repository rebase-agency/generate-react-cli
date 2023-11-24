import {GeneratorComponent} from "../services/generator-component";
import { Command } from 'commander'
const packageJson = require('../../package.json')

export const cli = () => {
  const program = new Command();
  program
    .name("generate-react")
    .version(packageJson.version)
    .description(packageJson.description)

  program
    .argument("<component>", "The component name.")
    .argument("[path]", "The path where the component will get generated in.")
    .option("-s, --storybook", "Generate the component files for storybook project.")
    .option("-c, --context", "Generate the context files for project.")
    .option("-hk, --hook", "Generate the hook file with default code.")
    .option("-nf --noFolder", "Generate only one React component.")
    .option("-nc --noCss", "Generate the React components without css module file.")
    .option("-i --icon", "Generate files for svg icon component.")
    .action((component, path, options) => {
      const generatorComponent = new GeneratorComponent(path ?? '.', component)

      if (options.storybook) {
        generatorComponent.generateStorybook()
      } else if (options.hook) {
        generatorComponent.generateHook()
      } else if (options.context) {
        generatorComponent.generateContext()
      } else if (options.icon) {
        generatorComponent.generateIcon()
      } else {
        generatorComponent.generateReact(options.noFolder, options.noCss)
      }
    })

  program
    .command("export [source]")
    .description("Generate the public export file for all components in source folder.")
    .action((source) => {
      const generatorComponent = new GeneratorComponent(source ?? '.', '')
      generatorComponent.generateCommonExport()
    })

  program.parse()
}
