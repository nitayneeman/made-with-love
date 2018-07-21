import { chain, Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import {
  addModuleImportToRootModule,
  addPackageJsonDependency,
  getProjectFromWorkspace,
  getWorkspace,
  NodeDependency,
  NodeDependencyType
} from 'schematics-utilities';

function addPackageJsonDependencies(): Rule {
  return (host: Tree, context: SchematicContext) => {
    const dependencies: NodeDependency[] = [
      { type: NodeDependencyType.Default, version: '`1.1.0', name: '@webcomponents/custom-elements' },
      { type: NodeDependencyType.Default, version: '~1.1.0', name: 'angular-made-with-love' }
    ];

    dependencies.forEach(dependency => {
      addPackageJsonDependency(host, dependency);
      context.logger.log('info', `✍️ Added "${dependency.name}" into ${dependency.type}`);
    });

    return host;
  };
}

function installPackageJsonDependencies(): Rule {
  return (host: Tree, context: SchematicContext) => {
    context.addTask(new NodePackageInstallTask());
    context.logger.log('info', `🔍️ Installing dependencies...`);

    return host;
  };
}

function addModuleToImports(options: any): Rule {
  return (host: Tree, context: SchematicContext) => {
    const workspace = getWorkspace(host);
    const project = getProjectFromWorkspace(workspace, options.project);
    const moduleName = 'MadeWithLoveModule';

    addModuleImportToRootModule(host, moduleName, 'angular-made-with-love', project);
    context.logger.log('info', `✍ Added "${moduleName}" into the imports of "${project.name}"`);

    return host;
  };
}

function addPolyfillToScripts(options: any) {
  return (host: Tree, context: SchematicContext) => {
    const polyfillPath = 'node_modules/@webcomponents/custom-elements/src/native-shim.js';
    const polyfillName = 'custom-elements';

    try {
      const angularJsonFile = host.read('angular.json');

      if (angularJsonFile) {
        const angularJsonFileObject = JSON.parse(angularJsonFile.toString('utf-8'));
        const project = options.project;
        const projectObject = angularJsonFileObject.projects[project];
        const scripts = projectObject.architect.build.options.scripts;

        scripts.push({
          input: polyfillPath
        });
        host.overwrite('angular.json', JSON.stringify(angularJsonFileObject, null, 2));
      }
    } catch (e) {
      context.logger.log('error', `🚫 Failed to add the polyfill "${polyfillName}" to scripts`);
    }

    context.logger.log('info', `✍ Added "${polyfillName}" polyfill to scripts`);

    return host;
  };
}

export default function(options: any): Rule {
  return chain([
    addPackageJsonDependencies(),
    installPackageJsonDependencies(),
    addModuleToImports(options),
    addPolyfillToScripts(options)
  ]);
}
