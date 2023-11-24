import {createFileSync, existsSync, writeFileSync, readdirSync} from 'fs-extra';
import componentTemplate from "../templates/component";
import exportTemplate from "../templates/export";
import docsTemplate from "../templates/docs"
import readmeTemplate from "../templates/readme"
import storiesTemplate from "../templates/stories";
import hookTemplate from "../templates/hook"
import contextTemplates from "../templates/context"
import iconTemplate from "../templates/icon"
import { NAME } from "../core";
import {pathParse} from "../utils/pathParse";

export class GeneratorComponent {
  constructor(private pathProp: string, private componentNameProp: string) {}
  private componentName: string = ''
  private path: string = ''

  private generateFile = (template: string, file: string, noFolder?: boolean, noCheck?: boolean) => {
    const source = noFolder ? `${this.path}/${file}` : `${this.path}/${this.componentName}/${file}`
    const existsFile = existsSync(source)
    if (!existsFile || noCheck) {
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

  private generateComponent = (storybook?: boolean, noFolder?: boolean, noCss?: boolean, withProps?: boolean) => {
    this.generateFile(componentTemplate(storybook, noFolder, noCss, withProps), `${this.componentName}.tsx`, noFolder)
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

  generateReact = (noFolder?: boolean, noCss?: boolean, withProps?: boolean) => {
    console.log(withProps)
    this.configureHandle()
    this.generateComponent(false, noFolder, noCss, withProps)
    if (!noFolder) {
      this.generateExportFile()
      if (!noCss) {
        this.generateModuleCss()
      }
    }
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

  generateCommonExport = () => {
    this.configureHandle()
    const list = readdirSync(this.path, { withFileTypes: true })
    let content = '';
    list.map((dirent) => {
      if (dirent.isDirectory()) {
        content = `${content}${exportTemplate.replaceAll(NAME, dirent.name)}\n`
      }
    })
    this.generateFile(content, 'index.ts', true, true)
  }

  generateIcon = () => {
    this.configureHandle()
    this.generateFile(iconTemplate, `${this.componentName}.tsx`)
    this.generateExportFile()
  }
}
