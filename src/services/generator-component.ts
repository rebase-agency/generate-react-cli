import {createFileSync, existsSync, writeFileSync} from 'fs-extra';
import componentTemplate from "../templates/component";
import exportTemplate from "../templates/export";
import docsTemplate from "../templates/docs"
import readmeTemplate from "../templates/readme"
import storiesTemplate from "../templates/stories";
import { NAME } from "../core";
import {pathParse} from "../utils/pathParse";

export class GeneratorComponent {
  constructor(private pathProp: string, private componentNameProp: string) {}
  private componentName
  private path

  private generateUtil = (template: string, file: string) => {
    const source = `${this.path}/${this.componentName}/${file}`
    try {
      const templateParse = template.replaceAll(NAME, this.componentName)
      createFileSync(source)
      writeFileSync(source, templateParse)
    } catch (e) {
      console.error(e)
    }
  }

  private generateComponent = (storybook?: boolean) => {
    const importReact = `import { React } from "React";\n`
    this.generateUtil(`${storybook ? importReact : ''}${componentTemplate}`, `${this.componentName}.ts`)
  }

  private generateExportFile = () => {
    this.generateUtil(exportTemplate, `index.ts`)
  }

  private generateModuleCss = () => {
    this.generateUtil('', `${this.componentName}.module.css`)
  }

  private configureHandle = () => {
    this.path = pathParse(this.pathProp)
    this.componentName = this.componentNameProp

    const existsDir = existsSync(`${this.path}/${this.componentName}`)
    if (existsDir) {
      console.error(`Folder with ${this.componentName} component in ${process.cwd()}/${this.path} already exists.`)
    }
    return !existsDir;
  }

  generateReact = () => {
    if (this.configureHandle()) {
      this.generateComponent()
      this.generateExportFile()
      this.generateModuleCss()
    }
  }

  generateStorybook = () => {
    if (this.configureHandle()) {
      this.generateComponent(true)
      this.generateExportFile()
      this.generateModuleCss()
      this.generateUtil(docsTemplate, `Docs.mdx`)
      this.generateUtil(readmeTemplate, `README.md`)
      this.generateUtil(storiesTemplate, `${this.componentName}.stories.ts`)
    }
  }
}
