import { createFileSync, writeFileSync } from 'fs-extra';
import componentTemplate from "../templates/component";
import exportTemplate from "../templates/export";
import docsTemplate from "../templates/docs"
import readmeTemplate from "../templates/readme"
import storiesTemplate from "../templates/stories";
import {NAME} from "../core";

export class GeneratorComponent {
  constructor(private path: string, private componentName: string) {}
  private source = `${this.path}/${this.componentName}/`

  private generateUtil = (template: string, file: string) => {
    try {
      const templateParse = template.replaceAll(NAME, this.componentName)
      createFileSync(`${this.source}${file}`)
      writeFileSync(`${this.source}/${file}`, templateParse)
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

  generateReact = () => {
    this.generateComponent()
    this.generateExportFile()
    this.generateModuleCss()
  }

  generateStorybook = () => {
    this.generateComponent(true)
    this.generateExportFile()
    this.generateModuleCss()
    this.generateUtil(docsTemplate, `Docs.mdx`)
    this.generateUtil(readmeTemplate, `README.md`)
    this.generateUtil(storiesTemplate, `${this.componentName}.stories.ts`)
  }
}
