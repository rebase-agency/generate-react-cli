import {createFileSync, existsSync, writeFileSync} from 'fs-extra';
import componentTemplate from "../templates/component";
import exportTemplate from "../templates/export";
import docsTemplate from "../templates/docs"
import readmeTemplate from "../templates/readme"
import storiesTemplate from "../templates/stories";
import hookTemplate from "../templates/hook"
import contextTemplates from "../templates/context"
import { NAME } from "../core";
import {pathParse} from "../utils/pathParse";

export class GeneratorComponent {
  constructor(private pathProp: string, private componentNameProp: string) {}
  private componentName: string = ''
  private path: string = ''

  private generateFile = (template: string, file: string, noInFolder?: boolean) => {
    const source = noInFolder ? `${this.path}/${file}` : `${this.path}/${this.componentName}/${file}`
    const existsFile = existsSync(source)
    if (!existsFile) {
      try {
        const templateParse = template.replaceAll(NAME, this.componentName)
        createFileSync(source)
        writeFileSync(source, templateParse)
      } catch (e) {
        console.error(e)
      }
    } else {
      console.error(`File ${source} already exists.`)
    }
  }

  private generateComponent = (storybook?: boolean) => {
    const importReact = `import React from "react";\n`
    this.generateFile(`${storybook ? importReact : ''}${componentTemplate}`, `${this.componentName}.tsx`)
  }

  private generateExportFile = () => {
    this.generateFile(exportTemplate, `index.ts`)
  }

  private generateModuleCss = () => {
    this.generateFile('', `${this.componentName}.module.css`)
  }

  private configureHandle = () => {
    this.path = pathParse(this.pathProp)
    this.componentName = this.componentNameProp
  }

  generateReact = () => {
    this.configureHandle()
    this.generateComponent()
    this.generateExportFile()
    this.generateModuleCss()
  }

  generateStorybook = () => {
    this.configureHandle()
    this.generateComponent(true)
    this.generateExportFile()
    this.generateModuleCss()
    this.generateFile(docsTemplate, `Docs.mdx`)
    this.generateFile(readmeTemplate, `README.md`)
    this.generateFile(storiesTemplate, `${this.componentName}.stories.tsx`)
  }

  generateHook = () => {
    this.configureHandle()
    this.generateFile(hookTemplate, `${this.componentName}.tsx`, true)
  }

  generateContext = () => {
    this.configureHandle()
    this.generateFile(contextTemplates.context, `${this.componentName}Context.tsx`)
    this.generateFile(contextTemplates.hookContext, `use${this.componentName}Context.tsx`)
    this.generateFile(contextTemplates.types, "types.ts")
    this.generateFile(contextTemplates.exp, "index.ts")
  }
}
