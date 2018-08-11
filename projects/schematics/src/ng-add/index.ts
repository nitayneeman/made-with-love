import { chain, noop, Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import {
  addModuleImportToRootModule,
  addPackageJsonDependency,
  getProjectFromWorkspace,
  getWorkspace,
  NodeDependency,
  NodeDependencyType
} from 'schematics-utilities';

import { Schema } from './schema';

function addPackageJsonDependencies(): Rule {
  return (host: Tree, context: SchematicContext) => {
    const dependencies: NodeDependency[] = [
      { type: NodeDependencyType.Default, version: '~6.1.1', name: '@angular/elements' },
      { type: NodeDependencyType.Default, version: '~1.1.0', name: '@webcomponents/custom-elements' },
      { type: NodeDependencyType.Default, version: '^2.0.0', name: 'angular-made-with-love' }
    ];

    dependencies.forEach(dependency => {
      addPackageJsonDependency(host, dependency);
      context.logger.log('info', `✅️ Added "${dependency.name}" into ${dependency.type}`);
    });

    return host;
  };
}

function installPackageJsonDependencies(): Rule {
  return (host: Tree, context: SchematicContext) => {
    context.addTask(new NodePackageInstallTask());
    context.logger.log('info', `🔍 Installing packages...`);

    return host;
  };
}

function addModuleToImports(options: Schema): Rule {
  return (host: Tree, context: SchematicContext) => {
    const workspace = getWorkspace(host);
    const project = getProjectFromWorkspace(
      workspace,
      // Takes the first project in case it's not provided by CLI
      options.project ? options.project : Object.keys(workspace['projects'])[0]
    );
    const moduleName = 'MadeWithLoveModule';

    addModuleImportToRootModule(host, moduleName, 'angular-made-with-love', project);
    context.logger.log('info', `✅️ "${moduleName}" is imported`);

    return host;
  };
}

function addPolyfillToScripts(options: Schema) {
  return (host: Tree, context: SchematicContext) => {
    const polyfillName = 'custom-elements';
    const polyfillPath = 'node_modules/@webcomponents/custom-elements/src/native-shim.js';

    try {
      const angularJsonFile = host.read('angular.json');

      if (angularJsonFile) {
        const angularJsonFileObject = JSON.parse(angularJsonFile.toString('utf-8'));
        const project = options.project ? options.project : Object.keys(angularJsonFileObject['projects'])[0];
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

    context.logger.log('info', `✅️ Added "${polyfillName}" polyfill to scripts`);

    return host;
  };
}

export default function(options: Schema): Rule {
  return chain([
    options && options.skipPackageJson ? noop() : addPackageJsonDependencies(),
    options && options.skipPackageJson ? noop() : installPackageJsonDependencies(),
    options && options.skipModuleImport ? noop() : addModuleToImports(options),
    options && options.skipPolyfill ? noop() : addPolyfillToScripts(options)
  ]);
}
