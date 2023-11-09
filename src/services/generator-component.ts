import { createFileSync, writeFileSync } from 'fs-extra';
import componentTsTemplate from "../templates/componentTsTemplate";
import exportTemplate from "../templates/exportTemplate";
import {NAME} from "../core";

export class GeneratorComponent {
  constructor(private path: string, private componentName: string) {}

  private generateTsComponent = () => {
    try {
      createFileSync(`${this.path}/${this.componentName}/${this.componentName}.ts`)
      const template = componentTsTemplate.replaceAll(NAME, this.componentName)
      writeFileSync(`${this.path}/${this.componentName}/${this.componentName}.ts`, template)
    } catch (e) {
      console.error(e)
    }
  }

  private generateExportFile = () => {
    try {
      createFileSync(`${this.path}/${this.componentName}/index.ts`)
      const template = exportTemplate.replaceAll(NAME, this.componentName)
      writeFileSync(`./test/${this.componentName}/index.ts`, template)
    } catch (e) {
      console.error(e)
    }
  }

  private generateModuleCss = () => {
    try {
      createFileSync(`${this.path}/${this.componentName}/${this.componentName}.module.css`)
    } catch (e) {
      console.error(e)
    }
  }

  generate = () => {
    this.generateTsComponent()
    this.generateExportFile()
    this.generateModuleCss()
  }
}
