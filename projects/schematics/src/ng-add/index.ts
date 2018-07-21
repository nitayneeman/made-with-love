import { chain, Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { addPackageJsonDependency, NodeDependency, NodeDependencyType } from 'schematics-utilities';

function addPackageJsonDependencies(): Rule {
  return (host: Tree, context: SchematicContext) => {
    const dependencies: NodeDependency[] = [
      { type: NodeDependencyType.Default, version: '~1.1.0', name: '@webcomponents/custom-elements' },
      { type: NodeDependencyType.Default, version: '~0.1.1', name: 'angular-made-with-love' }
    ];

    dependencies.forEach(dependency => {
      addPackageJsonDependency(host, dependency);
      context.logger.log('info', `Added "${dependency.name}" into ${dependency.type}`);
    });

    return host;
  };
}

export default function(): Rule {
  return chain([addPackageJsonDependencies()]);
}
