import componentTemplate from "../templates/component";
import {createFileSync, existsSync, mkdirSync, writeFileSync} from "fs-extra";
import {NAME} from "../core";
import apiServiceTemplate from '../templates/apiService'

export class GeneratorModule {
  constructor(private path: string, private componentName: string) {}

  generateFile(source: string, template: string, suffix?: string) {
    try {
      const templateParse = template.replaceAll(NAME, `${this.componentName}${suffix ?? ''}`)
      createFileSync(source)
      writeFileSync(source, templateParse)
    } catch (e) {
      console.error(e)
    }
  }

  generate(withProps?: boolean) {
    const source = `${this.path}/${this.componentName}`
    const existsFolder = existsSync(source)

    if (!existsFolder) {
      this.generateFile(
        `${source}/components/index.tsx`,
        componentTemplate(false, false, false, withProps)
      )
      this.generateFile(
        `${source}/components/${this.componentName}.module.css`,
        ''
      )
      this.generateFile(
        `${source}/index.ts`,
        `export { ${this.componentName} } from "./components"\n`
      )
      this.generateFile(`${source}/api/${this.componentName}Service.ts`, apiServiceTemplate, 'Service')
      mkdirSync(`${source}/constants`)
      mkdirSync(`${source}/hooks`)
      mkdirSync(`${source}/libs`)
      mkdirSync(`${source}/interfaces`)
      console.info("Done")
    } else {
      console.error(`Module ${source} already exists.`)
    }
  }
}
