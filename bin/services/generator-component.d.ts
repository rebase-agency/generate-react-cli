export declare class GeneratorComponent {
    private pathProp;
    private componentNameProp;
    constructor(pathProp: string, componentNameProp: string);
    private componentName;
    private path;
    private generateUtil;
    private generateComponent;
    private generateExportFile;
    private generateModuleCss;
    private configureHandle;
    generateReact: () => void;
    generateStorybook: () => void;
}
